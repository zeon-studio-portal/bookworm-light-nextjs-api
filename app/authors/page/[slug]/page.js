import { getAuthors } from "@/actions/post/author/getAuthors";
import config from "@config/config.json";
import Pagination from "@layouts/components/Pagination";
import Authors from "@layouts/partials/Authors";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getListPage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
const { pagination } = config.settings;

const AuthorPagination = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { data: authors, meta } = await getAuthors({
    limit: pagination,
    page: currentPage,
  });
  const totalAuthors = meta?.total || 0;
  const authorIndex = await getListPage("content/authors/_index.md");
  const title = authorIndex?.frontmatter?.title || "Authors";

  return (
    <>
      <SeoMeta title={title} />
      <section className="section">
        <div className="container text-center">
          {markdownify(title, "h1", "h2 mb-16")}
          <Authors authors={authors} />
          <Pagination
            section="authors"
            totalPages={Math.ceil(totalAuthors / pagination)}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
};

export default AuthorPagination;
