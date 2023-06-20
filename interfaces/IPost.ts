import { IFrontmatter } from "./IFrontmatter";

export interface IPost {
    frontmatter: IFrontmatter;
    slug: string;
    timeToRead: string;
    content: string;
}