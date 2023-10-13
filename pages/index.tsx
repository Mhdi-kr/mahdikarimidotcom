import Head from "next/head";
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
                    My name is Mahdi, I&apos;m a software engineer and an indie hacker based in Iran. With half a decade of experience in the software engineering field, I&apos;ve worked in prominent Iranian tech companies like Alibaba Travels Co. and Snapp! Group.
                </p>
                <p className="md:text-2xl md:leading-9">
                    My expertise spans various domains, including travel, internet of things and e-commerce. My technical journey is diverse, ranging from software engineering to hardware hacking, game development and platform engineering.
                </p>
                <p className="md:text-2xl md:leading-9">
                    I enjoy knowledge and self-expression, reading and writing articles on software engineering, philosophy, and psychology. When I&apos;m offline, I find solace in playing the guitar listening to heavy metal and alternative rock music.
                </p>
            </article>
        </>
    );
}

export const getStaticProps = async () => ({
    props: {
        posts: parseAllPosts("posts"),
    },
});
