import { getRelatedPosts } from "@/actions/post/getRelatedPost";
import { getImageUrl } from "@lib/getImageUrl";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const SimilarPosts = async ({ postId }) => {
  const { data: posts } = await getRelatedPosts(postId);

  if (!posts || posts.length === 0) {
    return <p className="text-center">No related posts found.</p>;
  }

  return (
    <div className="row justify-center">
      {posts.map((post, i) => (
        <div key={`key-${i}`} className={"col-12 mb-4 sm:col-4"}>
          {post.image && (
            <Image
              className="rounded-lg"
              src={getImageUrl(post.image)}
              alt={post.title}
              width={445}
              height={230}
            />
          )}
          <ul className="mt-4 text-text">
            <li className="mb-2 mr-4 inline-block">{dateFormat(post.date)}</li>
            <li className="mb-2 mr-4 inline-block">
              <ul>
                {post.categories?.map((category, i) => (
                  <li className="inline-block" key={`category-${i}`}>
                    <Link
                      href={`/categories/${slugify(category)}`}
                      className="mr-3 hover:text-primary"
                    >
                      &#9635; {humanize(category)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <h3 className="h4">
            <Link
              href={`/post/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.title}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SimilarPosts;
