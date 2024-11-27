import RetirementCalculator from "@/components/calculators/RetirementCalculator";

export const metadata = {
    title: "Retirement Calculator | Plan Your Financial Future",
    description:
        "Use our U.S.-focused Retirement Calculator to estimate how long your savings will last. Calculate savings growth, withdrawals, and inflation impact.",
    keywords: [
        "retirement calculator USA",
        "financial planning tool",
        "savings calculator",
        "retirement savings growth",
        "U.S. retirement planning",
    ],
    openGraph: {
        title: "Retirement Calculator | Plan Your Financial Future",
        description:
            "Estimate how long your savings will last with our U.S.-focused Retirement Calculator. Analyze savings, withdrawals, and inflation-adjusted returns.",
        url: "https://yourwebsite.com/retirement-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/retirement-calculator.png",
                width: 1200,
                height: 630,
                alt: "Retirement Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Retirement Calculator | Plan Your Financial Future",
        description:
            "Use our U.S.-focused Retirement Calculator to estimate savings growth, withdrawals, and inflation-adjusted returns.",
        images: ["https://yourwebsite.com/images/retirement-calculator.png"],
    },
};

const RetirementCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Retirement Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Retirement Calculator</strong> to plan your
                    financial future. Estimate how long your savings will last
                    based on your current age, savings, annual contributions,
                    and expected withdrawals. This U.S.-focused tool takes into
                    account inflation and investment returns to help you
                    strategize your retirement planning effectively.
                </p>
            </div>

            {/* Client-Side Component */}
            <RetirementCalculator />
        </div>
    );
};

export default RetirementCalculatorPage;
