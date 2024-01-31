import { Image } from "next/image";
import Link from "next/link";

export const MDXComponents = {
	a: ({ className, ...props }) => <Link className={className} {...props} />,
	img: ({ className, alt, ...props }) => (
		<img className={className} alt={alt} {...props} />
	),
	Image,
};
