import { getTags } from "@/actions/tags/getTags";
import SeoMeta from "@layouts/partials/SeoMeta";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Tags = async () => {
  const { data: tags } = await getTags();

  if (!tags || tags.length === 0) {
    return (
      <>
        <SeoMeta title={"Tags"} />
        <section className="section min-h-dvh">
          <div className="container text-center">
            {markdownify("No tags found", "h1", "h2 mb-16")}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SeoMeta title={"Tags"} />
      <section className="section min-h-dvh">
        <div className="container text-center">
          {markdownify("Tags", "h1", "h2 mb-16")}
          <ul className="flex flex-wrap gap-4">
            {tags.map((tag, i) => (
              <li key={`category-${i}`}>
                <Link
                  href={`/tags/${tag.slug}`}
                  className="block rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white"
                >
                  &#8226; {humanize(tag.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Tags;
