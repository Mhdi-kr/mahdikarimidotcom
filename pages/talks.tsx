import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Mahdi Karimi - Talks</title>
                <meta name="description" content="Mahdi Karimi - Talks" />
            </Head>
            <section className="flex flex-col gap-4">
                <iframe className="w-full md:h-64 dark:bg-gray-700 bg-gray-100 rounded" src="https://www.youtube.com/embed/1qrB2hSOKSo" title="GraphQL Introduction" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <iframe className="w-full md:h-64 dark:bg-gray-700 bg-gray-100 rounded" src="https://www.youtube.com/embed/NAndZzYfkSg" title="Web Assembly" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <iframe className="w-full md:h-64 dark:bg-gray-700 bg-gray-100 rounded" src="https://www.youtube.com/embed/BSE_G8AOUMs" title="Model Based Testing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </section></>
    )
}