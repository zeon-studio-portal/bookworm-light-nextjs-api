import NotFound from "@layouts/404";
import About from "@layouts/About";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = async ({ params }) => {
  // SERVER SIDE RENDERING
  const { regular: slug } = await params;
  const pageData = await getRegularPage(slug);
  // get posts folder slug for filtering

  const { title, meta_title, description, image, noindex, canonical, layout } =
    pageData.frontmatter;
  const { content } = pageData;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
        meta_title={meta_title}
        image={image}
        noindex={noindex}
        canonical={canonical}
      />

      {/* single post */}
      {layout === "404" ? (
        <NotFound data={pageData} />
      ) : layout === "about" ? (
        <About data={pageData} />
      ) : layout === "contact" ? (
        <Contact data={pageData} />
      ) : (
        <Default data={pageData} />
      )}
    </>
  );
};
export default RegularPages;

// for regular page routes
export async function generateStaticParams() {
  const regularSlugs = await getSinglePage("content");
  const allSlugs = [...regularSlugs];
  const paths = allSlugs.map((item) => ({
    regular: item.slug,
  }));

  return paths;
}
