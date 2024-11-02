import Link from "next/link";
import React from "react";

const FooterSection = () => {
    return (
        <footer className="mt-12 border-t p-6 text-center text-gray-600">
            <ul className="flex flex-wrap justify-center space-x-4">
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>
                </li>
                <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="/loan-tables">Loan Tables</Link>
                </li>
                <li>
                    <Link href="/car-loan">Car Loan</Link>
                </li>
            </ul>
        </footer>
    );
};

export default FooterSection;
