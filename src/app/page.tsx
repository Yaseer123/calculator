// HomePage.tsx

"use client";
import Link from "next/link";
import { FaCalculator, FaChartLine } from "react-icons/fa"; // Import icons

const HomePage = () => {
    return (
        <div className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">
                    Financial Calculators
                </h1>

                {/* Main Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Section 1 */}
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-lg font-semibold mb-4 flex items-center">
                            <FaCalculator className="mr-2" /> Popular
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/inflation-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Inflation Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/savings-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Savings Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/retirement-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Retirement Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/amortization-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Amortization Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mortgage-loan-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Loan Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/loan-payoff-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Loan Payoff Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/salary-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Salary Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-lg font-semibold mb-4 flex items-center">
                            <FaChartLine className="mr-2" /> Other Loan
                            Calculators
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/loan-value-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Loan Amount based on Payment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/home-loan-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Home Loan Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/credit-card-payment-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Credit Card Payment Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/student-loan-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Student Loan Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/compare-loan-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Compare Loan Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/student-loan-payoff-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Student Loan Payoff Calculator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tip-calculator"
                                    className="text-black hover:text-yellow-500"
                                >
                                    Tip Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
