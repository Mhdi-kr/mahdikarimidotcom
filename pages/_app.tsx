import "../styles/globals.css";
import "../styles/dracula.css";
import "../styles/fonts.css";
import "../styles/typography.css";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function ApplicationRoot({ Component, pageProps }: AppProps) {
    const navigationItems = [
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Talks",
            href: "/talks",
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
                src="https://plausible.robio.ir/js/script.tagged-events.js"
            />
            <section className="container px-4 md:px-4 lg:px-60 mx-auto flex flex-col w-full items-start">
                <header className="container w-full flex justify-between items-center p-8 font-lobster">
                    <Link passHref={true} href="/">
                        <section className="flex items-center md:flex-row flex-col gap-2 md:gap-4 cursor-pointer">
                            <section className="text-center md:text-left">
                                <h1 className="md:text-4xl text-gray-300 hover:text-white transition-colors">
                                    Mahdi&apos;s Engineering
                                </h1>
                            </section>
                        </section>
                    </Link>
                    <section className="flex items-center">
                        <nav className="hidden md:block" role="navigation">
                            <ul className="flex gap-3">
                                {navigationItems.map((link) => (
                                    <Link
                                        key={link.title}
                                        passHref={true}
                                        href={`${link.href}`}
                                    >
                                        <li
                                            tabIndex={1}
                                            className="cursor-pointer text-gray-400 hover:text-white transition text-xl"
                                        >
                                            {link.title}
                                        </li>
                                    </Link>
                                ))}
                                <span>|</span>
                                <li className="cursor-pointer text-gray-400 hover:text-white transition plausible-event-name=Github+click">
                                    <a
                                        href="https://github.com/Mhdi-kr"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <FaGithub size={'24px'} />
                                    </a>
                                </li>
                                <li className="cursor-pointer text-gray-400 hover:text-white transition plausible-event-name=Linkedin+click">
                                    <a
                                        href="https://www.linkedin.com/in/mhdi-kr/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <FaLinkedin size={'24px'} />
                                    </a>
                                </li>
                                <li className="cursor-pointer text-gray-400 hover:text-white transition plausible-event-name=Twitter+click">
                                    <a
                                        href="https://twitter.com/mhdi_kr"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <FaTwitter size={'24px'} />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </header>

                <main className="w-full container p-8">
                    <Component {...pageProps} />
                </main>

                <nav
                    className="flex md:hidden w-full items-center justify-center mb-3"
                    role="navigation"
                >
                    <ul className="flex flex-col gap-3 w-full">
                        {navigationItems.map((link) => (
                            <Link
                                key={link.title}
                                passHref={true}
                                href={`${link.href}`}
                            >
                                <li
                                    tabIndex={1}
                                    className="dark:bg-gray-800 text-center p-2 w-full bg-gray-50 transition-all dark:hover:bg-gray-700 hover:shadow-md rounded cursor-pointer"
                                >
                                    {link.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </section>
        </>
    );
}

export default ApplicationRoot;
