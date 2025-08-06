import { getCategories } from "@/actions/category/getCategories";
import SeoMeta from "@layouts/partials/SeoMeta";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Categories = async () => {
  const { data: categories } = await getCategories();

  if (!categories || categories.length === 0) {
    return (
      <>
        <SeoMeta title={"Categories"} />
        <section className="section min-h-dvh">
          <div className="container text-center">
            {markdownify("No categories found", "h1", "h2 mb-16")}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SeoMeta title="Categories" />
      <section className="section min-h-dvh">
        <div className="container text-center">
          {markdownify("Categories", "h1", "h2 mb-16")}
          <ul className="flex flex-wrap gap-4">
            {categories.map((category, i) => (
              <li key={`category-${i}`} className="inline-block">
                <Link
                  href={`/categories/${category.slug}`}
                  className="block rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white"
                >
                  &#8226; {humanize(category.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;
