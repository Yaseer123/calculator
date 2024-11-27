import CreditCardPaymentCalculator from "@/components/calculators/CreditCardPayment";

export const metadata = {
    title: "Credit Card Payment Calculator | Manage Your Debt",
    description:
        "Use our U.S.-focused Credit Card Payment Calculator to estimate monthly payments, total interest, and repayment amounts. Plan your finances efficiently.",
    keywords: [
        "credit card payment calculator USA",
        "manage credit card debt",
        "monthly payment calculator",
        "credit card interest calculator",
        "debt repayment tool USA",
    ],
    openGraph: {
        title: "Credit Card Payment Calculator | Manage Your Debt",
        description:
            "Easily calculate your credit card monthly payments, interest, and repayment amounts with our U.S.-focused calculator. Take control of your finances today.",
        url: "https://yourwebsite.com/credit-card-payment-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/credit-card-calculator.png",
                width: 1200,
                height: 630,
                alt: "Credit Card Payment Calculator USA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Credit Card Payment Calculator | Manage Your Debt",
        description:
            "Estimate monthly payments, total interest, and repayment amounts for your credit card debt with our U.S.-focused calculator.",
        images: ["https://yourwebsite.com/images/credit-card-calculator.png"],
    },
};

const CreditCardPaymentPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Credit Card Payment Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use our <strong>Credit Card Payment Calculator</strong> to
                    plan your repayment strategy. Estimate your monthly
                    payments, total interest, and repayment amount for credit
                    card debt. Tailored for U.S. users, this tool provides
                    accurate insights to help you manage and pay off your debt
                    efficiently.
                </p>
            </div>

            {/* Client-Side Component */}
            <CreditCardPaymentCalculator />
        </div>
    );
};

export default CreditCardPaymentPage;
