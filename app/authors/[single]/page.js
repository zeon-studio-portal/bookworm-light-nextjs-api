import { getAuthorById } from "@/actions/author/getAuthorbyId";
import AuthorSingle from "@layouts/AuthorSingle";
import { notFound } from "next/navigation";

const Article = async ({ params }) => {
  const { single } = await params;
  // Fetch the author data by ID
  const { data: author, message } = await getAuthorById(single);

  // If no author is found, return a 404 page
  if (!author) {
    notFound();
  }

  return <AuthorSingle author={author} />;
};

export default Article;
