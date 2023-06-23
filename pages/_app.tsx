import "../styles/globals.css";
import "../styles/dracula.css";
import "../styles/fonts.css";
import "../styles/typography.css"

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Link from "next/link";
import Script from "next/script";

function ApplicationRoot({ Component, pageProps }: AppProps) {
    const navigationItems = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Blog',
            href: '/blog'
        },
        {
            title: 'Talks',
            href: '/talks'
        },
        {
            title: 'Contact',
            href: '/contact'
        },
        // TODO: add RSS feature
        // {
        //     title: 'RSS',
        //     href: '/rss'
        // },
    ]
    return (
        <>
            <Script
                defer
                data-domain="mahdikarimi.com"
                src="https://plausible.robio.ir/js/script.js"
            />
            <section className="container px-4 md:px-4 lg:px-28 mx-auto flex flex-col w-full md:flex-row items-start">
                <aside className="order-last md:order-first w-full md:w-1/5 md:h-screen py-8 px-4 relative md:sticky md:top-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="rounded-lg shadow-lg mb-4 w-full" src="https://github.com/mhdi-kr.png" alt="" />
                    <h1 className="text-center text-xl font-bold mb-4">Mahdi Karimi</h1>
                    <nav>
                        <ul className="text-center block w-full">
                            {
                                navigationItems.map((link) =>
                                    <Link key={link.title} passHref={true} href={`${link.href}`}>
                                        <li className="dark:bg-zinc-800 bg-zinc-50 transition-all dark:hover:bg-zinc-700 hover:shadow-md rounded mb-2 py-2 cursor-pointer">
                                            {link.title}
                                        </li>
                                    </Link>
                                )
                            }
                        </ul>
                    </nav>
                    <Footer />
                </aside>
                <main className="order-first md:order-last w-full md:w-4/5 py-8 px-4">
                    <Component {...pageProps} />
                </main>
            </section></>
    );
}

export default ApplicationRoot;
