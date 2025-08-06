import { fetchApi, safeApi } from "@lib/api/fetcher";
import { SITE_DOMAIN } from "@lib/constant";

export async function getPostsByCategory(category) {
  const endpoint = `/site/${SITE_DOMAIN}/posts/?categories=${category}`;
  return await safeApi(() =>
    fetchApi({
      endPoint: endpoint,
    }),
  );
}
