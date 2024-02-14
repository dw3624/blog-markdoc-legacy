import Link from 'next/link'
import React from 'react'

import styles from './badge.module.css'

export type BadgeType = {
	href?: string
	children: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
}

export const Badge = ({ href, children, size = 'md' }: BadgeType) => {
	return (
		<Link href={href || '#'} className={[styles.badge, styles[size]].join(' ')}>
			{children}
		</Link>
	)
}
