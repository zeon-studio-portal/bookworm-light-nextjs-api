"use server";

import { fetchApi, safeApi } from "@lib/api/fetcher";
import { SITE_DOMAIN } from "@lib/constant";

export async function getPosts(args) {
  const {
    limit,
    page,
    search = "",
    sortBy = "createdAt",
    sortOrder = "desc",
  } = args || {};
  const params = new URLSearchParams({
    ...(limit && { limit: String(limit) }),
    ...(page && { page: String(page) }),
    ...(search && { search: String(search) }),
    ...(sortBy && { sortBy: String(sortBy) }),
    ...(sortOrder && { sortOrder: String(sortOrder) }),
  });

  const endPoint = `/site/${SITE_DOMAIN}/posts?${params.toString()}`;
  return await safeApi(() =>
    fetchApi({
      endPoint: endPoint,
    }),
  );
}
