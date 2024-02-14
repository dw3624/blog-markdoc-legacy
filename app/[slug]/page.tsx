import fs from 'fs'
import path from 'path'
import React from 'react'

import { Badge } from '@/components/ui/badge/badge'
import { getAllPosts, getPost } from '@/lib/post'
import { MDXOptions } from '@/mdx.config'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { formatDate } from '@/lib/format-date'
import Link from 'next/link'
import { MDXComponents } from './_components/mdx-components'
import { NavButton } from './_components/nav-button/nav-button'
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

	const date = formatDate(frontMatter.date)

	return (
		<article>
			<header className={styles.header}>
				<h1 className={styles.title}>{frontMatter.title}</h1>
				<time className={styles.time}>{date}</time>
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
			<nav className={styles.nav}>
				<NavButton
					variant="prev"
					slug={prevPostSlug?.slug}
					text={prevPostSlug?.frontMatter.title}
				/>
				<NavButton
					variant="next"
					slug={nextPostSlug?.slug}
					text={nextPostSlug?.frontMatter.title}
				/>
			</nav>
		</article>
	)
}

export default PostSlugPage
