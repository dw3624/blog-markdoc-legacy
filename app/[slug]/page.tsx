import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

import "./mdx.css";

import { getAllPosts, getPost } from "@/lib/post";
import { MDXOptions } from "@/mdx.config";

export const generateStaticParams = async () => {
	const postsDirectory = path.join(process.cwd(), "posts");
	const filenames = fs.readdirSync(postsDirectory);
	return filenames.map((filename) => ({
		slug: filename.replace(/\.md$/, ""),
	}));
};

const PostSlugPage = async ({ params }) => {
	const posts = await getAllPosts();
	const currentPost = posts.find((post) => post.slug === params.slug);
	if (!currentPost) return notFound();

	const currentIndex = posts.indexOf(currentPost);
	const prevPostSlug = currentIndex > 0 ? posts[currentIndex - 1] : null;
	const nextPostSlut =
		currentIndex < posts.length ? posts[currentIndex] + 1 : null;

	const post = await getPost(params.slug);
	const { slug, frontMatter, body } = post;

	return (
		<div>
			<MDXRemote source={body} options={MDXOptions} />
		</div>
	);
};

export default PostSlugPage;
