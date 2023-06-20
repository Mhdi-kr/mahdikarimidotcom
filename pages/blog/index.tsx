import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

import Post from "../../components/Post";
import { parseAllPosts } from "../../utils";
import { IPost } from "../../interfaces/IPost";

export default function Home({ posts }: { posts: IPost[] }) {
    return (
        <>
            <Head>
                <title>Mahdi Karimi - Blog</title>
                <meta name="description" content="Mahdi Karimi - Blog" />
            </Head>

            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </>
    );
}

export const getStaticProps = async () => ({
    props: {
        posts: parseAllPosts("posts"),
    },
});
