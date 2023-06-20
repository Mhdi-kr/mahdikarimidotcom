import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { IPost } from "../interfaces/IPost";
import { IFrontmatter } from "../interfaces/IFrontmatter";

export const parseAllPosts = (directory: string): IPost[] => {
    const files = fs.readdirSync(path.join(directory));
    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");
        const markdownWithMeta = fs.readFileSync(
            path.join(directory, filename),
            "utf-8"
        );
        const { data: rawFrontmatter, content } = matter(markdownWithMeta);
        const parsedFrontmatter: IFrontmatter = {
            title: rawFrontmatter.title as string,
            excerpt: rawFrontmatter.excerpt as string,
            date: rawFrontmatter.date as string,
            tags: rawFrontmatter.tags.split(",") as string[],
            show: rawFrontmatter.show as boolean,
        };
        const { text: timeToRead } = readingTime(content);
        return {
            frontmatter: parsedFrontmatter,
            slug,
            timeToRead,
            content,
        };
    });
    posts.sort(
        (a, b) =>
            Number(new Date(b.frontmatter.date)) -
            Number(new Date(a.frontmatter.date))
    );
    return posts.filter(post => post.frontmatter.show);
};
