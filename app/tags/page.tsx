import { Badge } from '@/components/ui/badge/badge'
import { getAllTags } from '@/lib/tag'
import React from 'react'

import styles from './page.module.css'

const TagsPage = () => {
	const tags = getAllTags()

	return (
		<section>
			<header className={styles.header}>
				<h1>Tags ({tags.length})</h1>
			</header>
			<div className={styles.content}>
				{tags.map((tag, i) => (
					<Badge key={i} href={`/tags/${tag.name}`} size="lg">
						{tag.name} ({tag.count})
					</Badge>
				))}
			</div>
		</section>
	)
}

export default TagsPage
