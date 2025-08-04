"use server";

export async function fetchApi({
  endPoint,
  cache = "no-store",
  headers = {},
  tags = [],
  body,
  method = "GET",
  signal,
}) {
  try {
    const headersObj = {
      "Content-Type": "application/json",
      authorization_token: `Bearer ${TOKEN}`,
      ...headers,
    };

    if (body instanceof FormData) {
      delete headersObj["Content-Type"];
    }

    const requestBody =
      body instanceof FormData
        ? body
        : typeof body === "string"
          ? body
          : JSON.stringify(body);

    const result = await fetch(API_URL + endPoint, {
      method,
      headers: headersObj,
      ...(method !== "GET" && { body: requestBody }),
      cache,
      ...(tags.length > 0 && { next: { tags } }),
      ...(signal && { signal }),
    });

    const contentType = result.headers.get("content-type");

    let responseBody;
    if (contentType && contentType.includes("application/json")) {
      responseBody = await result.json();
    } else if (contentType && contentType.includes("text/")) {
      responseBody = await result.text();
    } else {
      responseBody = await result.blob();
    }

    if (!result.ok) {
      const customError = new CustomApiError(
        result.status,
        responseBody?.message,
        responseBody?.errorMessage ?? [],
      );
      throw customError;
    }

    return {
      status: result.status,
      body: responseBody,
    };
  } catch (error) {
    throw error;
  }
}
