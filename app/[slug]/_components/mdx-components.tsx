import { Image } from "next/image";
import Link from "next/link";

export const MDXComponents = {
	a: ({ className, ...props }) => (
		<Link className={[className].join(" ")} {...props} />
	),
	img: ({ className, alt, ...props }) => (
		<img className={[className].join(" ")} alt={alt} {...props} />
	),
	Image,
};
