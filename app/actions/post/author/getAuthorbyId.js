import { fetchApi, safeApi } from "@lib/api/fetcher";

export async function getAuthorById(authorId) {
  const endpoint = "/author/" + authorId;
  return await safeApi(() =>
    fetchApi({
      endPoint: endpoint,
    }),
  );
}
