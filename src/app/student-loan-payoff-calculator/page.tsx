import StudentLoanDebtPayOffCalculator from "@/components/calculators/StudentLoanPayoffCalculator";

export const metadata = {
    title: "Student Loan Debt Payoff Calculator | Plan Your Financial Future",
    description:
        "Use our U.S.-focused Student Loan Debt Payoff Calculator to determine how long it will take to pay off your student loans and plan for financial freedom.",
    keywords: [
        "student loan payoff calculator",
        "student debt calculator",
        "loan repayment planner",
        "student loan financial planning",
        "USA loan payoff calculator",
    ],
    openGraph: {
        title: "Student Loan Debt Payoff Calculator | Plan Your Financial Future",
        description:
            "Calculate the time required to pay off your student loans with our detailed payoff calculator. Ideal for students and graduates in the U.S.",
        url: "https://yourwebsite.com/student-loan-debt-payoff",
        images: [
            {
                url: "https://yourwebsite.com/images/student-loan-debt-payoff.png",
                width: 1200,
                height: 630,
                alt: "Student Loan Debt Payoff Calculator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Debt Payoff Calculator | Plan Your Financial Future",
        description:
            "Plan your student loan repayment journey with our easy-to-use payoff calculator designed for U.S. graduates.",
        images: ["https://yourwebsite.com/images/student-loan-debt-payoff.png"],
    },
};

const StudentLoanDebtPayoffCalculatorPage = () => (
    <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
            Student Loan Debt Payoff Calculator
        </h1>
        {/* Server-Side Description */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-gray-700">
                Struggling with student loans? Our{" "}
                <strong>Student Loan Debt Payoff Calculator</strong> helps you
                calculate how long it will take to clear your debt. By entering
                your loan details, interest rate, and monthly payments, you can
                create a customized plan to achieve financial freedom.
            </p>
        </div>
        {/* Client-Side Component */}
        <StudentLoanDebtPayOffCalculator />
    </div>
);

export default StudentLoanDebtPayoffCalculatorPage;
