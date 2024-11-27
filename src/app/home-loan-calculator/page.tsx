import HomeLoanCalculator from "@/components/calculators/HomeLoanCalculator";

export const metadata = {
    title: "Home Loan Calculator | U.S. Mortgage Payment Estimator",
    description:
        "Use our U.S.-focused Home Loan Calculator to estimate your monthly mortgage payments, total interest, and repayment costs. Plan your home buying journey with ease.",
    keywords: [
        "home loan calculator USA",
        "mortgage payment estimator",
        "monthly mortgage calculator",
        "home buying USA",
        "loan repayment calculator",
    ],
    openGraph: {
        title: "Home Loan Calculator | U.S. Mortgage Payment Estimator",
        description:
            "Calculate monthly mortgage payments, total interest, and repayment costs with our U.S.-focused Home Loan Calculator. Ideal for home buyers in the U.S.",
        url: "https://yourwebsite.com/home-loan-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/home-loan-calculator.png",
                width: 1200,
                height: 630,
                alt: "Home Loan Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Home Loan Calculator | U.S. Mortgage Payment Estimator",
        description:
            "Estimate your monthly mortgage payments, total interest, and repayment costs with our U.S. Home Loan Calculator.",
        images: ["https://yourwebsite.com/images/home-loan-calculator.png"],
    },
};

const HomeLoanCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Home Loan Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Home Loan Calculator</strong> to plan your
                    mortgage payments effectively. Estimate your monthly
                    payments, total interest, and total repayment costs. This
                    tool is designed for U.S. home buyers looking to make
                    informed financial decisions when purchasing a property.
                </p>
            </div>

            {/* Client-Side Component */}
            <HomeLoanCalculator />
        </div>
    );
};

export default HomeLoanCalculatorPage;
