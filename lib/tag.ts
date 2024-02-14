import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getAllTags = () => {
	const postsDirectory = path.join(process.cwd(), 'posts')
	const filenames = fs.readdirSync(postsDirectory)

	const tagMap: { [key: string]: number } = {}
	for (const filename of filenames) {
		const filePath = path.join(postsDirectory, filename)
		const fileContent = fs.readFileSync(filePath, 'utf8')
		if (fileContent) {
			const { data } = matter(fileContent)
			const { published, tags } = data
			if (published) {
				for (const tag of tags) {
					tagMap[tag] = (tagMap[tag] || 0) + 1
				}
			}
		}
	}

	const tagList = Object.entries(tagMap)
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count)

	return tagList
}

export const getTagPosts = (tag: string) => {
	const postsDirectory = path.join(process.cwd(), 'posts')
	const filenames = fs.readdirSync(postsDirectory)

	let posts = []
	for (const filename of filenames) {
		const filePath = path.join(postsDirectory, filename)
		const fileContent = fs.readFileSync(filePath, 'utf8')
		if (fileContent) {
			const { data } = matter(fileContent)
			const post = { slug: filename.replace(/\.md$/, ''), frontMatter: data }
			if (post.frontMatter.published && post.frontMatter.tags.includes(tag)) {
				posts.push(post)
			}
		}
	}

	posts = posts.sort(
		(a, b) =>
			new Date(b.frontMatter.date).getTime() -
			new Date(a.frontMatter.date).getTime(),
	)

	return posts
}
