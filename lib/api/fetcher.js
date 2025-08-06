"use server";

import { API_URL, TOKEN } from "../constant";
import { CustomApiError } from "./errors";

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

    const { meta, ...rest } = responseBody || {};

    return {
      status: result.status,
      body: rest,
      meta: meta,
    };
  } catch (error) {
    throw error;
  }
}

export async function safeApi(callback) {
  try {
    const { body, status, meta } = (await callback()) || {};
    return {
      data: body?.result,
      meta: meta || {},
      error: [],
      message: body?.message,
      isError: false,
      isSuccess: true,
      statusCode: status,
    };
  } catch (err) {
    if (err instanceof CustomApiError) {
      return {
        data: null,
        isError: true,
        meta: {},
        isSuccess: false,
        error: err.errorMessage,
        message: err.message,
        statusCode: err.statusCode,
      };
    }

    if (err instanceof Error) {
      return {
        data: null,
        meta: {},
        isError: true,
        isSuccess: false,
        error: [],
        message: err.message,
        statusCode: 500,
      };
    }

    return {
      data: null,
      meta: {},
      isError: true,
      isSuccess: false,
      error: [],
      message: "Something went wrong",
      statusCode: 500,
    };
  }
}
