import StudentLoanPaymentCalculator from "@/components/calculators/StudentLoanCalculator";

export const metadata = {
    title: "Student Loan Payment Calculator | Plan Your Finances",
    description:
        "Use our Student Loan Payment Calculator to plan your monthly payments and understand your total costs. Designed for U.S. students and graduates, make informed decisions about your loan repayment schedule.",
    keywords: [
        "student loan payment calculator",
        "student loan repayment USA",
        "loan payment calculator",
        "student debt management",
        "loan interest calculator",
    ],
    openGraph: {
        title: "Student Loan Payment Calculator | Plan Your Finances",
        description:
            "Calculate your student loan monthly payments, total interest paid, and repayment timeline. A must-have tool for U.S. students managing their finances.",
        url: "https://yourwebsite.com/student-loan-payment",
        images: [
            {
                url: "https://yourwebsite.com/images/student-loan-payment.png",
                width: 1200,
                height: 630,
                alt: "Student Loan Payment Calculator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Payment Calculator | Plan Your Finances",
        description:
            "Manage your student loan repayment effectively with our comprehensive payment calculator tailored for U.S. users.",
        images: ["https://yourwebsite.com/images/student-loan-payment.png"],
    },
};

const StudentLoanPaymentCalculatorPage = () => (
    <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
            Student Loan Payment Calculator
        </h1>
        {/* Server-Side Description */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-gray-700">
                Take control of your finances with our{" "}
                <strong>Student Loan Payment Calculator</strong>. Calculate your
                monthly payments, total interest, and repayment schedule to plan
                your financial future. Tailored for U.S. students and graduates,
                this tool is perfect for managing your student debt and
                understanding the true cost of borrowing.
            </p>
        </div>
        {/* Client-Side Component */}
        <StudentLoanPaymentCalculator />
    </div>
);

export default StudentLoanPaymentCalculatorPage;
