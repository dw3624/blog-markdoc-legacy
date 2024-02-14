import PostCard from '@/components/ui/post-card/post-card'
import { getTagPosts } from '@/lib/tag'
import React from 'react'

import styles from './page.module.css'

const TagPostsPage = ({ params }: { params: { slug: string } }) => {
	const tagPosts = getTagPosts(params.slug)

	return (
		<section>
			<header className={styles.header}>
				<h1>Tag: {params.slug}</h1>
			</header>
			<div className={styles.content}>
				{tagPosts?.map((post, i) => (
					<PostCard key={i} post={post} />
				))}
			</div>
		</section>
	)
}

export default TagPostsPage
