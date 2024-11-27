import DebtPayoffCalculator from "@/components/calculators/LoanPayoff";

export const metadata = {
    title: "Debt Payoff Calculator | Plan Your Loan Repayment",
    description:
        "Use our U.S.-focused Debt Payoff Calculator to estimate the time and total interest needed to pay off your loan. Plan smarter for financial freedom.",
    keywords: [
        "debt payoff calculator USA",
        "loan repayment calculator",
        "monthly payment debt calculator",
        "interest payment calculator",
        "loan payoff schedule USA",
    ],
    openGraph: {
        title: "Debt Payoff Calculator | Plan Your Loan Repayment",
        description:
            "Easily calculate your loan payoff time and total interest paid with our U.S.-focused Debt Payoff Calculator. Plan your repayments for financial success.",
        url: "https://yourwebsite.com/debt-payoff-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/debt-payoff-calculator.png",
                width: 1200,
                height: 630,
                alt: "Debt Payoff Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Debt Payoff Calculator | Plan Your Loan Repayment",
        description:
            "Estimate your loan payoff time and total interest with our U.S.-focused Debt Payoff Calculator. Plan effectively for financial freedom.",
        images: ["https://yourwebsite.com/images/debt-payoff-calculator.png"],
    },
};

const DebtPayoffCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Debt Payoff Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Debt Payoff Calculator</strong> to plan your
                    loan repayment strategy. Estimate the time it will take to
                    pay off your debt, along with the total interest you'll pay.
                    Tailored for U.S. users, this tool provides accurate
                    insights to help you take control of your financial future.
                </p>
            </div>

            {/* Client-Side Component */}
            <DebtPayoffCalculator />
        </div>
    );
};

export default DebtPayoffCalculatorPage;
