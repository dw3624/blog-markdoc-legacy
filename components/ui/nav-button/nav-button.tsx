import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import styles from './nav-button.module.css'

export interface NavButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
	({ className, asChild = true, ...props }, ref) => {
		// biome-ignore lint/style/useNamingConvention: <explanation>
		const Comp = asChild ? Slot : 'button'
		const classNames = [styles.nav, className].join(' ')

		return <Comp className={classNames} ref={ref} {...props} />
	},
)
NavButton.displayName = 'NavButton'

export { NavButton }
