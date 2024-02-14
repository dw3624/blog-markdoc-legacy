import PostCard from '@/components/ui/post-card/post-card'
import { getAllPosts } from '@/lib/post'

import { NavButton } from './_components/nav-button/nav-button'
import styles from './page.module.css'

export default function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string
		page?: string
	}
}) {
	const posts = getAllPosts()
	const query = searchParams?.query || ''
	const currentPage = Number(searchParams?.page) || 1
	const prevPage = currentPage - 1
	const nextPage = currentPage + 1

	console.log('query:', query)
	console.log('page:', currentPage)
	console.log(posts.length)

	return (
		<section>
			<header className={styles.header}>
				<h1>Posts ({posts.length})</h1>
			</header>
			<div className={styles.content}>
				{posts.map((post, i) => (
					<PostCard key={i} post={post} />
				))}
			</div>
			<nav className={styles.nav}>
				<NavButton
					variant="prev"
					slug={`?page=${currentPage - 1}`}
					text={`Page ${currentPage - 1}`}
				/>
				<NavButton
					variant="next"
					slug={`?page=${currentPage + 1}`}
					text={`Page ${currentPage + 1}`}
				/>
			</nav>
		</section>
	)
}
