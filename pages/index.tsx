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
            <article>
                <p className="md:text-2xl md:leading-9">
                    I am <a className="text-yellow-500 font-semibold" referrerPolicy={'no-referrer'} href="https://www.linkedin.com/in/mhdi-kr/">Mahdi Karimi</a>, an Iranian-born computer engineer and hardware hacker.
                </p>
                <p className="md:text-2xl md:leading-9">With nearly five years of experience in the software engineering industry, I have worked at prominent Iranian tech companies like Alibaba Travels Co. and Snapp! Group.</p>
                <p className="md:text-2xl md:leading-9">I consider myself a T-shaped software engineer, with extensive expertise in frontend technologies such as Vue.js and React.js, as well as frontend tooling. I am also well-versed in designing microservices and backend development. Additionally, I have a keen interest in internet of things, machine learning, and computer science.</p>
                <p className="md:text-2xl md:leading-9">Each person has a finite number of keystrokes in their lifetime. Eventually, both you and I will exhaust them. However, when you write things that people can read and learn from, you multiply the impact of your keystrokes, making them everlasting.</p>
                <p className="md:text-2xl md:leading-9">Writing and sharing my experiences through well-crafted and thoughtful blog posts brings me immense pleasure. During my free time, I enjoy reading books, writing technical articles, and contributing to the open-source community.</p>
                <p className="md:text-2xl md:leading-9">The sense of fulfillment I seek, alongside my professional career, is knowing that someone can read my work and find it genuinely useful.</p>
            </article>
        </>
    );
}

export const getStaticProps = async () => ({
    props: {
        posts: parseAllPosts("posts"),
    },
});
