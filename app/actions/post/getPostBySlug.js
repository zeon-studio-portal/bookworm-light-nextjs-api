import { fetchApi, safeApi } from "@lib/api/fetcher";

export async function getPost(slug) {
  const endPoint = `/post/slug/${slug}`;
  return await safeApi(() =>
    fetchApi({
      endPoint,
    }),
  );
}
