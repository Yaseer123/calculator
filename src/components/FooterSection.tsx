import Link from "next/link";
import React from "react";

const FooterSection = () => {
    return (
        <footer className="mt-12 border-t p-6 text-center text-white">
            <ul className="flex flex-wrap justify-center space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>
                </li>
                <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="/inflation-calculator">Inflation</Link>
                </li>
                <li>
                    <Link href="/buy_home">How much can i afford for home</Link>
                </li>
            </ul>
        </footer>
    );
};

export default FooterSection;
