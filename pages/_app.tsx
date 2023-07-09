import "../styles/globals.css";
import "../styles/dracula.css";
import "../styles/fonts.css";
import "../styles/typography.css";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function ApplicationRoot({ Component, pageProps }: AppProps) {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Talks",
            href: "/talks",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        // TODO: add RSS feature
        // {
        //     title: 'RSS',
        //     href: '/rss'
        // },
    ];
    return (
        <>
            <Script
                defer
                data-domain="mahdikarimi.com"
                src="https://plausible.robio.ir/js/script.js"
            />
            <section className="container px-4 md:px-4 lg:px-28 mx-auto flex flex-col w-full items-start">
                <header className="w-full container py-8 px-4 flex items-center justify-center md:justify-between">
                    <section className="flex items-center md:flex-row flex-col gap-2 md:gap-4">
                        <Image
                            role="img"
                            src="https://github.com/mhdi-kr.png"
                            height={128}
                            width={128}
                            alt="Mahdi Karimi - Software engineer"
                            className="rounded-full"
                        />
                        <section className="text-center md:text-left">
                            <h1 className="md:text-5xl font-bold">Mahdi Karimi</h1>
                            <span className="md:text-3xl font-thin">Software Engineer</span>
                        </section>
                    </section>
                    <nav className="hidden md:block" role="navigation">
                        <ul className="flex gap-3">
                            {
                                navigationItems.map((link) =>
                                    <Link key={link.title} passHref={true} href={`${link.href}`}>
                                        <li tabIndex={1} className="dark:bg-zinc-900 px-2 bg-zinc-50 transition-all dark:hover:bg-zinc-700 hover:shadow-md rounded mb-2 py-2 cursor-pointer">
                                            {link.title}
                                        </li>
                                    </Link>
                                )
                            }
                        </ul>
                    </nav>
                </header>

                <main className="w-full container py-8 px-4">
                    <Component {...pageProps} />
                </main>

                <nav className="flex md:hidden w-full items-center justify-center mb-3" role="navigation">
                        <ul className="flex flex-col gap-3 w-full">
                            {
                                navigationItems.map((link) =>
                                    <Link key={link.title} passHref={true} href={`${link.href}`}>
                                        <li tabIndex={1} className="dark:bg-zinc-800 text-center p-2 w-full bg-zinc-50 transition-all dark:hover:bg-zinc-700 hover:shadow-md rounded cursor-pointer">
                                            {link.title}
                                        </li>
                                    </Link>
                                )
                            }
                        </ul>
                    </nav>
            </section>
        </>
    );
}

export default ApplicationRoot;