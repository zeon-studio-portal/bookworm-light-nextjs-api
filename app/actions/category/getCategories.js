import { fetchApi, safeApi } from "@lib/api/fetcher";
import { SITE_DOMAIN } from "@lib/constant";

export async function getCategories() {
  const endpoint = `/site/${SITE_DOMAIN}/categories`;

  return await safeApi(() =>
    fetchApi({
      endPoint: endpoint,
    }),
  );
}
