import Share from "@components/Share";
import { getImageUrl } from "@lib/getImageUrl";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import MDXContent from "./partials/MDXContent";
import SimilarPosts from "./partials/SimilarPosts";

const PostSingle = ({ post, authors, slug }) => {
  let { description, title, date, image, categories, tags, content } = post;
  description = description ? description : content.slice(0, 120);

  return (
    <>
      <section className="section">
        <div className="container">
          <article className="text-center">
            {markdownify(title, "h1", "h2")}
            <ul className="mb-8 mt-4 flex flex-wrap items-center justify-center space-x-3 text-text">
              <li>
                {authors
                  .filter((author) =>
                    authors
                      .map((author) => slugify(author))
                      .includes(slugify(author.title)),
                  )
                  .map((author, i) => (
                    <Link
                      href={`/authors/${slugify(author.title)}`}
                      key={`author-${i}`}
                      className="flex items-center hover:text-primary"
                    >
                      {author.frontmatter.image && (
                        <Image
                          src={getImageUrl(author.image)}
                          alt={author.title}
                          height={50}
                          width={50}
                          className="mr-2 h-6 w-6 rounded-full"
                        />
                      )}
                      <span>{author.title}</span>
                    </Link>
                  ))}
              </li>
              <li>{dateFormat(date)}</li>
              <li>
                <ul>
                  {categories.map((category, i) => (
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
            {image && (
              <Image
                src={getImageUrl(image)}
                height={500}
                width={1000}
                alt={title}
                className="rounded-lg"
              />
            )}
            <div className="content mb-16 text-left">
              <MDXContent content={content} />
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <ul className="mb-4 mr-4 space-x-3">
                {tags.map((tag, i) => (
                  <li className="inline-block" key={`tag-${i}`}>
                    <Link
                      href={`/tags/${slugify(tag)}`}
                      className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark hover:text-primary"
                    >
                      #{humanize(tag)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Share
                className="social-share mb-4"
                title={title}
                description={description}
                slug={slug}
              />
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-8 text-center">Similar Posts</h2>
          <SimilarPosts postId={post.post_id} />
        </div>
      </section>
    </>
  );
};

export default PostSingle;
