import { Image } from 'next/image'
import Link from 'next/link'

// biome-ignore lint/style/useNamingConvention: <explanation>
export const MDXComponents = {
	a: ({ className, ...props }) => <Link className={className} {...props} />,
	table: ({ className, ...props }) => (
		<div className="table-wrap">
			<table className={className} {...props} />
		</div>
	),
	img: ({ className, alt, ...props }) => (
		<img className={className} alt={alt} {...props} />
	),
	Image,
}
