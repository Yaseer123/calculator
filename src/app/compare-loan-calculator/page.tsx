import CompareLoansCalculator from "@/components/calculators/CompareLoans";

export const metadata = {
    title: "Compare Loans Calculator | U.S. Loan Options Made Simple",
    description:
        "Use our U.S.-focused Compare Loans Calculator to evaluate monthly payments, interest rates, and loan terms. Choose the best loan option for your needs.",
    keywords: [
        "compare loans calculator USA",
        "U.S. loan comparison",
        "monthly payment calculator USA",
        "interest rate analysis USA",
        "loan terms USA",
    ],
    openGraph: {
        title: "Compare Loans Calculator | U.S. Loan Options Made Simple",
        description:
            "Easily compare U.S.-based loan options with our calculator. Analyze monthly payments, interest rates, and loan lengths to make informed decisions.",
        url: "https://yourwebsite.com/compare-loans-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/compare-loans-calculator.png",
                width: 1200,
                height: 630,
                alt: "Compare Loans Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Compare Loans Calculator | U.S. Loan Options Made Simple",
        description:
            "Compare U.S. loan options with our calculator. Analyze monthly payments, interest rates, and loan lengths for smarter decisions.",
        images: ["https://yourwebsite.com/images/compare-loans-calculator.png"],
    },
};

const CompareLoansPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Compare Loans Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Compare Loans Calculator</strong> to compare
                    U.S. loan options side-by-side. Evaluate monthly payments,
                    interest rates, and loan terms for mortgages, personal
                    loans, or auto loans in the U.S. Simplify your financial
                    decisions with a clear breakdown tailored to your needs.
                </p>
            </div>

            {/* Client-Side Component */}
            <CompareLoansCalculator />
        </div>
    );
};

export default CompareLoansPage;
