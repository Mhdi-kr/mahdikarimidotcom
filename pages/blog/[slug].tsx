import markdownit from "markdown-it";
import Link from "next/link";
import Prism from "prismjs";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

import dayjs from "dayjs";

import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";

import { parseAllPosts } from "../../utils";
import { IPost } from "../../interfaces/IPost";

const generateMeta = (post: IPost) => {
    const addProductJsonLd = () => ({
        __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BlogPosting",
            headline: post.frontmatter.title,
            author: {
                "@type": "Person",
                name: "Mahdi Karimi",
            },
            datePublished: post.frontmatter.date,
            description: post.frontmatter.excerpt,
            articleBody: post.content,
        }),
    });
    return (
        <>
            <title>Mahdi Karimi - {post.frontmatter.title}</title>
            <meta
                name="description"
                content={`Mahdi Karimi - ${post.frontmatter.title}`}
            />
            <meta name="description" content={post.frontmatter.excerpt} />
            {/* twitter tags */}
            <meta name="twitter:card" content="" />
            <meta name="twitter:image" content="" />
            <meta name="twitter:title" content={post.frontmatter.title} />
            <meta
                name="twitter:description"
                content={post.frontmatter.excerpt}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={addProductJsonLd()}
                key="product-jsonld"
            />
        </>
    );
};

export default function PostPage({
    posts,
    post,
}: {
    posts: IPost[];
    post: IPost;
}) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <Head>{generateMeta(post)}</Head>
            <article>
                <div className="mb-4">
                    <h2 className="capitalize mb-2 font-actor">
                        {post.frontmatter.title}
                    </h2>
                    <span className="text-neutral-400 flex items-center text-sm gap-1">
                        <time>
                            Posted on{" "}
                            {dayjs(post.frontmatter.date).format(
                                "MMMM D, YYYY"
                            )}
                        </time>
                        <span className="mx-1">&bull;</span>
                        <span>{post.timeToRead}</span>
                    </span>
                </div>
                <div
                    className="subpixel-antialiased tracking-normal font-actor"
                    dangerouslySetInnerHTML={{
                        __html: markdownit().render(post.content),
                    }}
                />
                <hr className="opacity-4 mb-4 light:text-black" />
                <button>
                    <Link passHref={true} href="/blog">
                        <div className="text-gray-400">
                            <span className="mr-4">&#8592;</span>
                            <span>Back to the blogs</span>
                        </div>
                    </Link>
                </button>
            </article>
        </>
    );
}

export const getStaticPaths = async () => {
    const posts = parseAllPosts("posts");
    const paths = posts.map((post) => ({ params: { slug: post.slug } }));
    return {
        paths,
        fallback: false,
    };
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    const { slug } = context.params as IParams;
    const posts = parseAllPosts("posts");
    const post = posts.find((post) => post.slug === slug);
    return {
        props: {
            posts,
            post,
        },
    };
};
