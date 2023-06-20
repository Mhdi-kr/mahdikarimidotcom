import Link from "next/link";

export default function Header() {
    return (
        <footer className="bg-dark-blog text-center p-2">
            <time className="text-white text-xs">2018 - {new Date().getFullYear()}</time>
        </footer>
    );
}
