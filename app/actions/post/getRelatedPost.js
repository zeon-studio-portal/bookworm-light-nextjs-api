import { fetchApi, safeApi } from "@lib/api/fetcher";
import { SITE_DOMAIN } from "@lib/constant";

export const getRelatedPosts = async (postId) => {
  const endpoint = `/site/${SITE_DOMAIN}/related-posts/${postId}`;
  return await safeApi(() =>
    fetchApi({
      endPoint: endpoint,
    }),
  );
};
