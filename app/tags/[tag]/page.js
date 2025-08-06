import { getPostsByTag } from "@/actions/post/getPostByTag";
import config from "@config/config.json";
import Posts from "@layouts/partials/Posts";
import SeoMeta from "@layouts/partials/SeoMeta";
const { blog_folder } = config.settings;

// tag page
const Tag = async ({ params }) => {
  const { tag } = await params;

  // Fetch posts by tag
  const { data: blogs } = await getPostsByTag(tag);

  return (
    <>
      <SeoMeta title={tag} />
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Showing posts from <span className="text-primary">{tag}</span> tag
          </h1>
          <Posts posts={blogs} />
        </div>
      </div>
    </>
  );
};

export default Tag;
