import MortgageCalculator from "@/components/calculators/MortgageLoan";

export const metadata = {
    title: "Mortgage Calculator | Estimate Monthly Payments in the U.S.",
    description:
        "Use our U.S.-focused Mortgage Calculator to estimate your monthly mortgage payments, total interest, and repayment costs. Plan your home buying journey effectively.",
    keywords: [
        "mortgage calculator USA",
        "home loan payment calculator",
        "monthly mortgage estimator",
        "mortgage interest calculator",
        "loan repayment tool USA",
    ],
    openGraph: {
        title: "Mortgage Calculator | Estimate Monthly Payments in the U.S.",
        description:
            "Easily calculate your monthly mortgage payments, total interest, and total repayment costs with our U.S.-focused Mortgage Calculator.",
        url: "https://yourwebsite.com/mortgage-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/mortgage-calculator.png",
                width: 1200,
                height: 630,
                alt: "Mortgage Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mortgage Calculator | Estimate Monthly Payments in the U.S.",
        description:
            "Plan your home buying journey with our U.S.-focused Mortgage Calculator. Estimate monthly payments, interest costs, and total repayments.",
        images: ["https://yourwebsite.com/images/mortgage-calculator.png"],
    },
};

const MortgageCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Mortgage Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Mortgage Calculator</strong> to estimate
                    your monthly mortgage payments, total interest, and total
                    repayment costs. Designed for U.S. homebuyers, this tool
                    helps you plan your home financing with accurate and
                    personalized estimates.
                </p>
            </div>

            {/* Client-Side Component */}
            <MortgageCalculator />
        </div>
    );
};

export default MortgageCalculatorPage;
