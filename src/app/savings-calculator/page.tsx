import SavingsCalculator from "@/components/calculators/SavingsCalculator";

export const metadata = {
    title: "Compound Interest Savings Calculator | Plan Your Investments",
    description:
        "Use our U.S.-focused Compound Interest Savings Calculator to estimate your future savings growth with contributions and investment returns.",
    keywords: [
        "savings calculator USA",
        "compound interest calculator",
        "investment growth tool",
        "financial planning calculator",
        "future value calculator",
    ],
    openGraph: {
        title: "Compound Interest Savings Calculator | Plan Your Investments",
        description:
            "Estimate the growth of your savings with our U.S.-focused Compound Interest Calculator. Analyze contributions, returns, and future value.",
        url: "https://yourwebsite.com/savings-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/savings-calculator.png",
                width: 1200,
                height: 630,
                alt: "Savings Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Compound Interest Savings Calculator | Plan Your Investments",
        description:
            "Plan your financial future with our U.S.-focused Compound Interest Savings Calculator. Analyze contributions, returns, and savings growth.",
        images: ["https://yourwebsite.com/images/savings-calculator.png"],
    },
};

const SavingsCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Compound Interest Savings Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our{" "}
                    <strong>Compound Interest Savings Calculator</strong> to
                    plan your financial future. Estimate how your initial
                    deposit, regular contributions, and investment returns can
                    grow your savings over time. Tailored for U.S. users, this
                    tool helps you visualize the impact of compound interest on
                    your investments.
                </p>
            </div>

            {/* Client-Side Component */}
            <SavingsCalculator />
        </div>
    );
};

export default SavingsCalculatorPage;
