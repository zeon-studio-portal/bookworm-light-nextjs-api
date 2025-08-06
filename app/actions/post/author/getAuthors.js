import { fetchApi, safeApi } from "@lib/api/fetcher";

export async function getAuthors(args) {
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

  const endPoint = `/author?${params.toString()}`;

  return await safeApi(() =>
    fetchApi({
      endPoint: endPoint,
    }),
  );
}
