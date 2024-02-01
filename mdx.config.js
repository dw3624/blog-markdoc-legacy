import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

// biome-ignore lint/style/useNamingConvention: <explanation>
export const MDXOptions = {
	mdxOptions: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: 'github-dark',
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
				},
			],
		],
	},
}
