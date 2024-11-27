import AmortizationCalculator from "@/components/calculators/Amortization";

export const metadata = {
    title: "Amortization Calculator | Plan Your Mortgage Payments",
    description:
        "Use our Amortization Calculator to create a detailed mortgage schedule. Understand monthly payments, interest costs, and total loan repayment for better financial planning.",
    keywords: [
        "Amortization calculator",
        "mortgage schedule",
        "loan repayment",
        "monthly payments",
        "interest costs",
    ],
    openGraph: {
        title: "Amortization Calculator | Plan Your Mortgage Payments",
        description:
            "Create a detailed amortization schedule with our calculator. Analyze monthly payments, total interest, and principal over time.",
        url: "https://yourwebsite.com/amortization-calculator",
        images: [
            {
                url: "https://yourwebsite.com/images/amortization-calculator.png",
                width: 1200,
                height: 630,
                alt: "Amortization Calculator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Amortization Calculator | Plan Your Mortgage Payments",
        description:
            "Quickly calculate monthly mortgage payments, interest costs, and a detailed loan repayment schedule.",
        images: ["https://yourwebsite.com/images/amortization-calculator.png"],
    },
};

const AmortizationCalculatorPage = () => {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
                Amortization Calculator
            </h1>

            {/* Server-Side Description */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
                <p className="text-gray-700">
                    Use the <strong>Amortization Calculator</strong> to create a
                    printable mortgage amortization schedule. Understand your
                    monthly payments, total interest, and loan repayment over
                    time. Plan better with accurate results tailored for your
                    financial needs.
                </p>
            </div>

            {/* Client-Side Component */}
            <AmortizationCalculator />
        </div>
    );
};

export default AmortizationCalculatorPage;
