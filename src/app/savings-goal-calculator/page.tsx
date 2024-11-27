import SavingsGoalCalculator from "@/components/calculators/SavingsGoalCalculator";

export const metadata = {
    title: "Savings Goal Calculator | Plan Your Financial Goals",
    description:
        "Use our U.S.-focused Savings Goal Calculator to estimate the time needed to reach your savings target. Visualize growth with investment returns.",
    keywords: [
        "savings goal calculator USA",
        "financial goal planner",
        "investment growth calculator",
        "savings growth tool",
        "financial planning calculator",
    ],
    openGraph: {
        title: "Savings Goal Calculator | Plan Your Financial Goals",
        description:
            "Estimate how long it will take to reach your savings goal with our U.S.-focused Savings Goal Calculator. Analyze contributions and investment growth.",
        url: "https://yourwebsite.com/savings-goal-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/savings-goal-calculator.png",
                width: 1200,
                height: 630,
                alt: "Savings Goal Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Savings Goal Calculator | Plan Your Financial Goals",
        description:
            "Use our U.S.-focused Savings Goal Calculator to estimate the time needed to achieve your financial targets. Includes investment growth analysis.",
        images: ["https://yourwebsite.com/images/savings-goal-calculator.png"],
    },
};

const SavingsGoalCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Savings Goal Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Plan your financial journey with our{" "}
                    <strong>Savings Goal Calculator</strong>. Estimate how long
                    it will take to reach your savings target by accounting for
                    monthly contributions and investment returns. This
                    U.S.-focused tool helps you visualize your savings growth
                    and make informed decisions about achieving your financial
                    goals.
                </p>
            </div>

            {/* Client-Side Component */}
            <SavingsGoalCalculator />
        </div>
    );
};

export default SavingsGoalCalculatorPage;
