import fs from 'fs'
import path from 'path'
import React from 'react'

import { Badge } from '@/components/ui/badge/badge'
import { getAllPosts, getPost } from '@/lib/post'
import { MDXOptions } from '@/mdx.config'
import { MDXRemote } from 'next-mdx-remote/rsc'

import Link from 'next/link'
import { MDXComponents } from './_components/mdx-components'
import './mdx.css'
import styles from './page.module.css'

export const generateStaticParams = async () => {
	const postsDirectory = path.join(process.cwd(), 'posts')
	const filenames = fs.readdirSync(postsDirectory)
	return filenames.map((filename) => ({
		slug: filename.replace(/\.md$/, ''),
	}))
}

const PostSlugPage = async ({ params }) => {
	const posts = await getAllPosts()
	const currentPost = posts.find((post) => post.slug === params.slug)
	if (!currentPost) return console.log('not found')

	const currentIndex = posts.indexOf(currentPost)
	const prevPostSlug = currentIndex > 0 ? posts[currentIndex - 1] : null
	const nextPostSlug =
		currentIndex < posts.length ? posts[currentIndex + 1] : null

	console.log(nextPostSlug)

	const post = await getPost(params.slug)
	const { slug, frontMatter, body } = post

	return (
		<article>
			<header className={styles.header}>
				<h1 className={styles.title}>{frontMatter.title}</h1>
				<time className={styles.time}>{frontMatter.date}</time>
				<div className={styles.tags}>
					{frontMatter.tags.map((tag, i) => (
						<Badge key={i} href={tag}>
							{tag}
						</Badge>
					))}
				</div>
			</header>
			<div className={styles.prose}>
				<MDXRemote
					source={body}
					options={MDXOptions}
					components={MDXComponents}
				/>
			</div>
			<div>
				<Link
					href={prevPostSlug?.slug || '#'}
					aria-disabled={!prevPostSlug}
					className={!prevPostSlug && 'disabled'}
				>
					<div>이전</div>
					<div>{prevPostSlug?.frontMatter.title}</div>
				</Link>
				<Link
					href={nextPostSlug?.slug || '#'}
					aria-disabled={!nextPostSlug}
					className={!nextPostSlug && 'disabled'}
				>
					<div>다음</div>
					<div>{nextPostSlug?.frontMatter.title}</div>
				</Link>
			</div>
		</article>
	)
}

export default PostSlugPage
