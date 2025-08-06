import { getAuthors } from "@/actions/post/author/getAuthors";
import { getPost } from "@/actions/post/getPostBySlug";
import PostSingle from "@layouts/PostSingle";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export default async function Post({ params }) {
  const { slug } = await params;
  const { data: post } = await getPost(slug);
  if (!post) {
    notFound();
  }
  const { data: authors } = await getAuthors();
  return <PostSingle slug={slug} post={post} authors={authors} />;
}
