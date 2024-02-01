import { Badge } from '@/components/ui/badge/badge'
import React from 'react'

import Link from 'next/link'
import styles from './post-card.module.css'

const PostCard = ({ post }) => {
	return (
		<article className={styles.container}>
			<h3 className={styles.title}>
				<Link href={`/${post.slug}`}>{post.frontMatter.title}</Link>
			</h3>
			<p className={styles.description}>{post.frontMatter.description || ''}</p>
			<div className={styles.content}>
				<div className={styles.tags}>
					{post.frontMatter.tags.map((tag, i) => (
						<Badge key={i} href={`/tags/${tag}`}>
							{tag}
						</Badge>
					))}
				</div>
				<time className={styles.time}>{post.frontMatter.date}</time>
			</div>
		</article>
	)
}

export default PostCard
