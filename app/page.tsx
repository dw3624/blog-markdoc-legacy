import PostCard from '@/components/ui/post-card/post-card'
import { getAllPosts } from '@/lib/post'

import styles from './page.module.css'

export default function Home() {
	const posts = getAllPosts()

	return (
		<section>
			<header className={styles.header}>
				<h1>Posts</h1>
			</header>
			<div className={styles.content}>
				{posts.map((post, i) => (
					<PostCard key={i} href={`${post.slug}`} post={post} />
				))}
			</div>
		</section>
	)
}
