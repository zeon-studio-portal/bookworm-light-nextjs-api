export function getImageUrl(image) {
  if (!image) {
    return "/images/placeholder.png";
  }
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (image.startsWith("/")) {
    return `${process.env.NEXT_PUBLIC_BASE_URL}${image}`;
  }

  return `${process.env.BUCKET_URL}/${image}`;
}
