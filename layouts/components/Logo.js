import { LOGO, LOGO_HEIGHT, LOGO_WIDTH, SITE_NAME } from "@lib/constant";
import Image from "next/image";
import Link from "next/link";

const LOGO_ASPECT_RATIO = 16 / 9;
const Logo = ({ src }) => {
  const config = {
    logo: LOGO,
    logo_text: SITE_NAME,
    logo_width: LOGO_WIDTH,
    logo_height: LOGO_HEIGHT,
    title: SITE_NAME,
  };

  if (!config.logo_height) {
    config.logo_height = `${Math.min(+config.logo_width.replace("px", "") * LOGO_ASPECT_RATIO, 35)}px`;
  }

  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config;

  return (
    <Link href="/" className="navbar-brand block">
      {src || logo ? (
        <Image
          className="h-auto"
          src={src ? src : logo}
          width={logo_width.replace("px", "")}
          height={logo_height.replace("px", "")}
          alt={title}
          priority
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
