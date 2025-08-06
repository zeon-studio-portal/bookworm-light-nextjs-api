import { fetchApi, safeApi } from "@lib/api/fetcher";
import { SITE_DOMAIN } from "@lib/constant";

export const getPostByQuery = async (query) => {
  const endpoint = `/site/${SITE_DOMAIN}/posts/?search=${query}`;
  return await safeApi(() =>
    fetchApi({
      endPoint: endpoint,
    }),
  );
};
