import HomeAffordabilityCalculator from "@/components/calculators/Home";

export const metadata = {
    title: "Home Affordability Calculator | Plan Your Dream Home Budget",
    description:
        "Use our Home Affordability Calculator to determine how much house you can afford. Calculate mortgage payments, down payment, and housing budget accurately.",
    keywords: [
        "home affordability calculator",
        "house budget",
        "mortgage calculator",
        "home buying",
        "housing affordability",
    ],
    openGraph: {
        title: "Home Affordability Calculator | Plan Your Dream Home Budget",
        description:
            "Accurately calculate how much house you can afford with our Home Affordability Calculator. Determine monthly payments, mortgage limits, and more.",
        url: "https://yourwebsite.com/home-affordability-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/home-affordability-calculator.png",
                width: 1200,
                height: 630,
                alt: "Home Affordability Calculator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Home Affordability Calculator | Plan Your Dream Home Budget",
        description:
            "Quickly determine how much house you can afford. Use our Home Affordability Calculator for accurate calculations tailored to your finances.",
        images: [
            "https://yourwebsite.com/images/home-affordability-calculator.png",
        ],
    },
};

const HomeAffordabilityPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Home Affordability Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Home Affordability Calculator</strong> to
                    estimate how much house you can afford based on your income,
                    down payment, and mortgage terms. This tool helps you plan
                    for your dream home by providing accurate insights into your
                    housing budget, mortgage amount, and monthly payments.
                </p>
            </div>

            {/* Client-Side Component */}
            <HomeAffordabilityCalculator />
        </div>
    );
};

export default HomeAffordabilityPage;
