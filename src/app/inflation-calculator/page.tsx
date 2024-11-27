import InflationCalculator from "@/components/calculators/Inflation";
import React from "react";

export const metadata = {
    title: "Inflation Calculator | U.S. Dollar Value Over Time",
    description:
        "Use our U.S.-focused Inflation Calculator to compare the value of the dollar over time. Understand how inflation impacts purchasing power with accurate historical data.",
    keywords: [
        "U.S. inflation calculator",
        "dollar value over time",
        "U.S. purchasing power",
        "inflation trends USA",
        "calculate inflation USA",
    ],
    openGraph: {
        title: "Inflation Calculator | U.S. Dollar Value Over Time",
        description:
            "Calculate the historical value of the U.S. dollar and see how inflation changes its purchasing power over time.",
        url: "https://yourwebsite.com/inflation-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/inflation-calculator.png",
                width: 1200,
                height: 630,
                alt: "Inflation Calculator for U.S. Dollar Value",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Inflation Calculator | U.S. Dollar Value Over Time",
        description:
            "Quickly calculate the effects of inflation on the U.S. dollar's value over time with our accurate Inflation Calculator.",
        images: ["https://yourwebsite.com/images/inflation-calculator.png"],
    },
};

const InflationCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Inflation Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    The <strong>U.S. Inflation Calculator</strong> helps you
                    understand how inflation affects the value of money over
                    time. Compare the purchasing power of the dollar between
                    different years and visualize historical U.S. inflation
                    trends. This tool uses accurate data to assist financial
                    planners, researchers, and individuals in making informed
                    decisions about the impact of inflation on their finances.
                </p>
            </div>

            {/* Client-Side Component */}
            <InflationCalculator />
        </div>
    );
};

export default InflationCalculatorPage;
