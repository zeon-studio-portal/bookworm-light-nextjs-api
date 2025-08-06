import { fetchApi, safeApi } from "@lib/api/fetcher";
import { SITE_DOMAIN } from "@lib/constant";

export async function getTags() {
  const endpoint = `/site/${SITE_DOMAIN}/tags`;
  return await safeApi(() =>
    fetchApi({
      endPoint: endpoint,
    }),
  );
}
