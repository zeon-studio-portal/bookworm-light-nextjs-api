import { getImageUrl } from "@lib/getImageUrl";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Authors = ({ authors }) => {
  return (
    <div className="row justify-center">
      {authors.map((author, i) => (
        <div className="col-12 mb-8 sm:col-6 md:col-4" key={`key-${i}`}>
          {author.image && (
            <div className="mb-4 flex items-center justify-center">
              <Image
                src={getImageUrl(author.image)}
                alt={author.name}
                height={150}
                width={150}
                className="rounded-lg"
              />
            </div>
          )}

          <h3 className="h4 mb-2">
            <Link
              href={`/authors/${author.author_id}`}
              className="block hover:text-primary"
            >
              {author.name}
            </Link>
          </h3>
          {markdownify(author.role, "span", "text-sm block")}
          {markdownify(author.email, "span", "text-sm font-semibold")}
          {markdownify(author.bio.slice(0, 120), "p")}
        </div>
      ))}
    </div>
  );
};

export default Authors;
