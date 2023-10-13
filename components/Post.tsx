import Link from "next/link";
import { IPost } from "../interfaces/IPost";

export default function Post({ post }: { post: IPost }) {
    return (
        <>
            <article className="flex flex-col items-start">
                <Link passHref={true} href={`/blog/${post.slug}`}>
                    <h3 className="mb-1 font-actor">
                        <button className="text-left">
                            <span className="capitalize">
                                {post.frontmatter.title}
                            </span>
                        </button>
                    </h3>
                </Link>
                <small className="dark:text-gray-400 mb-2">
                    {[
                        new Date(Date.parse(post.frontmatter.date))
                            .toDateString()
                            .substring(3),
                        post.timeToRead,
                    ].join(" - ")}
                </small>
                {/* <p className="dark:text-gray-300 font-actor">{post.frontmatter.excerpt}</p> */}
            </article>
            <hr className="dark:opacity-5 opacity-4 mb-4 light:text-black" />
        </>
    );
}
