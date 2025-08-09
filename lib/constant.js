export const API_URL = process.env.API_URL || "http://localhost:4008/api/v1";

export const TOKEN = process.env.TOKEN || "your_api_token_here";
export const BUCKET_URL = process.env.BUCKET_URL || "";
export const SITE_DOMAIN = process.env.SITE_DOMAIN || "example.com";
export const SITE_NAME = process.env.SITE_NAME || "Bookworm Light";
export const LOGO =
  process.env.NEXT_PUBLIC_LOGO || "https://example.com/logo.png";
export const LOGO_WIDTH = process.env.NEXT_PUBLIC_LOGO_WIDTH || "200px";
export const LOGO_HEIGHT = process.env.LOGO_HEIGHT;
export const FAVICON = process.env.FAVICON || "https://example.com/favicon.ico";
export const PRIMARY_COLOR = process.env.PRIMARY_COLOR;

export const TAGS = {
  POSTS: "posts",
  CATEGORIES: "categories",
  AUTHORS: "authors",
  PAGES: "pages",
  TAGS: "tags",
};
