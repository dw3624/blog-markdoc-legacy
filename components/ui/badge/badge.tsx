import Link from 'next/link'
import React from 'react'
import styles from './badge.module.css'

type BadgeType = {
	href?: string
	children: React.ReactNode
}

export const Badge = ({ href, children }: BadgeType) => {
	return (
		<Link href={href || '#'} className={styles.badge}>
			{children}
		</Link>
	)
}
