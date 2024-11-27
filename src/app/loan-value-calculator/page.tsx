import LoanAmountCalculator from "@/components/calculators/LoanValue";

export const metadata = {
    title: "Loan Amount Calculator | Estimate Your Borrowing Potential",
    description:
        "Use our U.S.-focused Loan Amount Calculator to estimate how much you can borrow based on your monthly payment, interest rate, and loan term. Plan smarter.",
    keywords: [
        "loan amount calculator USA",
        "borrow amount calculator",
        "monthly payment loan calculator",
        "loan term estimator USA",
        "loan interest calculator",
    ],
    openGraph: {
        title: "Loan Amount Calculator | Estimate Your Borrowing Potential",
        description:
            "Calculate the loan amount you can borrow based on monthly payments, interest rates, and loan terms with our U.S.-focused calculator.",
        url: "https://yourwebsite.com/loan-amount-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/loan-amount-calculator.png",
                width: 1200,
                height: 630,
                alt: "Loan Amount Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Loan Amount Calculator | Estimate Your Borrowing Potential",
        description:
            "Easily calculate how much you can borrow with our U.S.-focused Loan Amount Calculator. Input monthly payments, interest rates, and loan terms.",
        images: ["https://yourwebsite.com/images/loan-amount-calculator.png"],
    },
};

const LoanAmountCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Loan Amount Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Loan Amount Calculator</strong> to estimate
                    how much you can borrow based on your desired monthly
                    payment, interest rate, and loan term. Tailored for U.S.
                    users, this tool helps you plan your borrowing potential and
                    understand your total repayment and interest costs.
                </p>
            </div>

            {/* Client-Side Component */}
            <LoanAmountCalculator />
        </div>
    );
};

export default LoanAmountCalculatorPage;
