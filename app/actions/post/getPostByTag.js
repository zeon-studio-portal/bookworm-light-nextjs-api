import { fetchApi, safeApi } from "@lib/api/fetcher";
import { SITE_DOMAIN } from "@lib/constant";

export async function getPostsByTag(tag) {
  const endpoint = `/site/${SITE_DOMAIN}/posts/?tags=${tag}`;
  return await safeApi(() =>
    fetchApi({
      endPoint: endpoint,
    }),
  );
}
