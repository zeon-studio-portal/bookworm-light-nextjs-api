import { getPostsByCategory } from "@/actions/post/getPostByCategory";
import config from "@config/config.json";
import Posts from "@layouts/partials/Posts";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getTaxonomy } from "@lib/taxonomyParser";
const { blog_folder } = config.settings;

// category page
const Category = async ({ params }) => {
  const { category } = await params;

  // Fetching posts by category
  const { data: blogs } = await getPostsByCategory(category);

  return (
    <>
      <SeoMeta title={category} />
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Showing posts from <span className="text-primary">{category}</span>{" "}
            category
          </h1>
          <Posts posts={blogs} />
        </div>
      </div>
    </>
  );
};

export default Category;

// category page routes
export async function generateStaticParams() {
  const allCategories = getTaxonomy(`content/${blog_folder}`, "categories");

  const paths = allCategories.map((category) => ({
    category: category,
  }));

  return paths;
}
