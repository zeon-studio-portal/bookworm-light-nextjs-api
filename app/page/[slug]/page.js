import { getPosts } from "@/actions/post/getPosts";
import Pagination from "@components/Pagination";
import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import Posts from "@partials/Posts";
import { notFound } from "next/navigation";

// blog pagination
const BlogPagination = async ({ params }) => {
  const { slug } = await params;
  const currentPage = parseInt(slug) || 1;
  const { pagination } = config.settings;
  const {
    data: posts,
    isError,
    meta,
  } = await getPosts({
    page: currentPage,
    limit: config.settings.pagination,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  if (isError) {
    notFound();
  }

  const totalPages = Math.ceil(meta.total / pagination);
  const currentPosts = posts;

  return (
    <>
      <SeoMeta title="Blog Pagination" />
      <section className="section">
        <div className="container">
          <Posts className="mb-16" posts={currentPosts} />
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
