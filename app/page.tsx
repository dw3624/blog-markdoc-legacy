import { getAllPosts } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
	const posts = getAllPosts();
	return (
		<div>
			{posts.map((post, i) => (
				<Link key={i} href={`${post.slug}`}>
					{post.slug}
				</Link>
			))}
		</div>
	);
}
