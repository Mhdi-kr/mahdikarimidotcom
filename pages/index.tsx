import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

import Post from "../components/Post";
import { parseAllPosts } from "../utils";
import { IPost } from "../interfaces/IPost";

export default function Home({ posts }: { posts: IPost[] }) {
    return (
        <>
            <Head>
                <title>Mahdi Karimi - Home</title>
                <meta name="description" content="Mahdi Karimi - Home" />
            </Head>

            <p>Everyone has been blessed to have certain limited number of keystrokes in their lifetime. sooner or later you and I will run out of them, but when you write things people can read and learn from, that&apos;s when you multiply your keystrokes and make them eternal.</p>
            <p>I am <a className="text-secondary-blog" referrerPolicy={'no-referrer'} href="https://resume.io/r/kCFLoVvw3">Mahdi Karimi</a>, computer engineer and hardware hacker born in Iran.</p>
            <p>Writing, sharing my experiences through well-written and thought-out blog posts gives me a great sense of pleasure.</p>
            <p>Knowing that someone can read them and actually find it useful is the feeling I am looking for alongside my professional career.</p>
        </>
    );
}

export const getStaticProps = async () => ({
    props: {
        posts: parseAllPosts("posts"),
    },
});
