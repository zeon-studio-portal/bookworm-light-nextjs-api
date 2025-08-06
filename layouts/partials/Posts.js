import config from "@config/config.json";
import { getImageUrl } from "@lib/getImageUrl";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts, className }) => {
  const { summary_length } = config.settings;
  return (
    <div className={`row space-y-16 ${className}`}>
      {posts.map((post, i) => {
        const author = post.author;
        return (
          <div
            key={`key-${i}`}
            className={i === 0 ? "col-12" : "col-12 sm:col-6"}
          >
            {post.image !== "" && (
              <Image
                className="rounded-lg"
                src={getImageUrl(post.image)}
                alt={post.title}
                width={i === 0 ? "925" : "445"}
                height={i === 0 ? "475" : "230"}
                priority={i === 0 ? true : false}
              />
            )}
            <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-3 text-text">
              <li>
                <Link
                  href={`/authors/${slugify(author.name ?? "")}`}
                  key={`author-${i}`}
                  className="flex items-center hover:text-primary"
                >
                  {author.image && (
                    <Image
                      src={getImageUrl(author.image)}
                      alt={author.name}
                      height={50}
                      width={50}
                      className="mr-2 h-6 w-6 rounded-full"
                    />
                  )}
                  <span className="block">{author.name}</span>
                </Link>
              </li>
              <li>{dateFormat(post.date)}</li>
              <li>
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
            <h3 className="mb-2">
              <Link
                href={`/post/${post.slug}`}
                className="block hover:text-primary"
              >
                {post.title}
              </Link>
            </h3>
            <p className="text-text">
              {post.content && post.content.slice(0, Number(summary_length))}...
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
