import { getImageUrl } from "@lib/getImageUrl";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import MDXContent from "./partials/MDXContent";
import SeoMeta from "./partials/SeoMeta";

const AuthorSingle = ({ author }) => {
  const { description, bio, name, image, email } = author;

  return (
    <>
      <SeoMeta title={name} description={bio ? bio : description} />
      <section className="section">
        <div className="container">
          <div className="mb-4 text-center md:px-24">
            {image && (
              <div className="mb-8">
                <Image
                  src={getImageUrl(image)}
                  className="mx-auto rounded-lg"
                  height={150}
                  width={150}
                  alt={name}
                />
              </div>
            )}

            {/* Contact */}
            <div className="mb-6 flex flex-col items-center justify-center">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">{name}</h1>
              <p className="text-gray-600">Developer</p>

              <div className="flex items-center justify-center gap-2 text-gray-600">
                <IoMail className="h-4 w-4" />
                {markdownify(email, "span", "text-lg")}
              </div>

              {/* Expert Badge */}
              <div className="mb-4">
                <div className="badge">Expert</div>
              </div>

              {/* Skills Section */}
              <div className="mb-6 flex items-start justify-start space-x-2 text-left">
                <h3 className="mb-2 text-sm font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="badge">js</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                About
              </h2>
              {markdownify(bio, "p")}
            </div>
            <div className="content">
              <MDXContent content={description ?? ""} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorSingle;
