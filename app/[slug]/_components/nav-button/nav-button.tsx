import Link from 'next/link'
import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './nav-button.module.css'

export type NavButtonType = {
	variant: 'prev' | 'next'
	slug?: string
	text: string
}

export const NavButton = ({ variant, slug, text }: NavButtonType) => {
	if (slug) {
		return (
			<Link href={slug || '#'} className={styles.container}>
				{variant === 'prev' && <ChevronLeft size={20} />}
				<div
					className={styles.content}
					style={{ textAlign: variant === 'prev' ? 'right' : 'left' }}
				>
					<span className={styles.variant}>
						{variant === 'prev' ? 'Previous' : 'Next'}
					</span>
					<span className={styles.text}>{text}</span>
				</div>
				{variant === 'next' && <ChevronRight size={20} />}
			</Link>
		)
	}
}
