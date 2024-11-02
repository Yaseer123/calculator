import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Financial Calculators - Save, Invest, Plan",
    description:
        "Your go-to app for calculating savings goals, retirement plans, mortgage affordability, and investment growth. Empower your financial decisions with our interactive tools and visual insights.",
    keywords: [
        "financial calculator",
        "savings calculator",
        "investment growth",
        "retirement planning",
        "mortgage affordability",
        "financial goals",
        "budgeting",
        "financial planning",
        "money management",
    ],
    openGraph: {
        title: "Financial Calculators - Save, Invest, Plan",
        description:
            "Easily calculate your savings, retirement, mortgage, and investment goals. Take control of your finances with user-friendly tools and detailed charts.",
        url: "https://yourapp.com", // replace with your actual app URL
        type: "website",
        images: [
            {
                url: "https://yourapp.com/og-image.jpg", // replace with an actual image URL
                width: 1200,
                height: 630,
                alt: "Financial Calculators - Save, Invest, Plan",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Financial Calculators - Save, Invest, Plan",
        description:
            "Plan and achieve your financial goals with our savings, investment, and mortgage calculators.",
        images: ["https://yourapp.com/og-image.jpg"], // replace with actual image URL
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
