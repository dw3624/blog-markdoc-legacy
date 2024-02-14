import { Badge } from '@/components/ui/badge/badge'
import { formatDate } from '@/lib/format-date'
import Link from 'next/link'
import React from 'react'

import styles from './post-card.module.css'

const PostCard = ({ post }) => {
	const date = formatDate(post.frontMatter.date)

	return (
		<article className={styles.container}>
			<h3 className={styles.title}>
				<Link href={`/${post.slug}`}>{post.frontMatter.title}</Link>
			</h3>
			<p className={styles.description}>{post.frontMatter.description || ''}</p>
			<div className={styles.content}>
				<div className={styles.tags}>
					{post.frontMatter.tags.map((tag: string, i: number) => (
						<Badge key={i} href={`/tags/${tag}`}>
							{tag}
						</Badge>
					))}
				</div>
				<time className={styles.time}>{date}</time>
			</div>
		</article>
	)
}

export default PostCard
