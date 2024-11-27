import SalaryCalculator from "@/components/calculators/SalaryCalculator";

export const metadata = {
    title: "Salary Calculator | Hourly to Annual Conversion",
    description:
        "Use our U.S.-focused Salary Calculator to convert hourly wages to annual salaries. Plan your income and understand your yearly earnings with ease.",
    keywords: [
        "salary calculator USA",
        "hourly to annual salary",
        "wage calculator",
        "salary conversion tool",
        "income calculator USA",
    ],
    openGraph: {
        title: "Salary Calculator | Hourly to Annual Conversion",
        description:
            "Convert your hourly wage to an annual salary with our U.S.-focused Salary Calculator. Plan your income and understand your yearly earnings.",
        url: "https://yourwebsite.com/salary-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/salary-calculator.png",
                width: 1200,
                height: 630,
                alt: "Salary Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Salary Calculator | Hourly to Annual Conversion",
        description:
            "Easily convert your hourly wage to annual income using our U.S.-focused Salary Calculator. Plan your finances efficiently.",
        images: ["https://yourwebsite.com/images/salary-calculator.png"],
    },
};

const SalaryCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Salary Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Salary Calculator</strong> to convert your
                    hourly wages to annual salaries or input your annual income
                    for quick analysis. Tailored for U.S. users, this tool helps
                    you understand your yearly earnings and plan your finances
                    effectively.
                </p>
            </div>

            {/* Client-Side Component */}
            <SalaryCalculator />
        </div>
    );
};

export default SalaryCalculatorPage;
