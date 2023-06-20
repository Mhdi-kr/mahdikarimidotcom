import Link from "next/link";
import { IPost } from "../interfaces/IPost";

export const Aside = (props: { className: string; posts: IPost[] }) => {
    return (
        <>
            <aside className={props.className}>
                <div className="mb-4">
                    <p className="font-medium mb-1 text-gray-600">
                        recently posted
                    </p>
                    <ul className="text-gray-500">
                        {props?.posts?.slice(0,5).map((post, index) => (
                            <li key={index}>
                                <Link
                                    passHref={true}
                                    href={`/blog/${post.slug}`}
                                >
                                    <a className="text-xs">{post.frontmatter.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="font-medium mb-2 text-gray-600">Tags</p>
                    <ul className="text-gray-500 flex flex-wrap">
                        {Object.values(Tags)
                            .map((tag) => tag)
                            .sort((a, b) => b.length - a.length)
                            .map((tag, index) => (
                                <li
                                    className="mr-1 mb-1 text-xs bg-gray-100 p-1 rounded cursor-pointer"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

enum Tags {
    TUTORIAL = "tutorial",
    EMBEDED = "embeded",
    FRONTEND = "frontend",
    BACKEND = "backend",
    DEVOPS = "devops",
    TEST = "test",
    LIFE = "life",
}
