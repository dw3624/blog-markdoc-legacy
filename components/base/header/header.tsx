"use client";

import { MoonStar } from "lucide-react";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
	const toggle = () => {
		document.documentElement.classList.toggle("dark");
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.content}>
					<Link href="/" className={styles.logo}>
						<MoonStar size={24} />
						<span className={styles.title}>title</span>
					</Link>
					<nav className={styles.menu}>
						<Link href="/tags">tags</Link>
					</nav>
				</div>

				<nav>
					<div>
						<MoonStar size={16} />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
