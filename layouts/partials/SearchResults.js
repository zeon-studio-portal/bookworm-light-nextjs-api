import { getPostByQuery } from "@/actions/post/getPostByQuery";
import Posts from "./Posts";
import SeoMeta from "./SeoMeta";

const SearchResults = async ({ query }) => {
  if (!query || query.trim() === "") {
    return (
      <div className="py-24 text-center text-h3 shadow">
        Please enter a search query.
      </div>
    );
  }

  // Fetch posts by search query
  const { data: posts } = await getPostByQuery(query);

  return (
    <>
      <SeoMeta title={`Search results for ${query}`} />
      <h1 className="h2 mb-8 text-center">
        Search results for <span className="text-primary">{query}</span>
      </h1>
      {posts && posts.length > 0 ? (
        <Posts posts={posts} />
      ) : (
        <div className="py-24 text-center text-h3 shadow">No Search Found</div>
      )}
    </>
  );
};

export default SearchResults;
