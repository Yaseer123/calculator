// HomePage.tsx

"use client";
import Link from "next/link";
import {
    FaCalculator,
    FaChartLine,
    FaGraduationCap,
    FaTools,
} from "react-icons/fa"; // Import icons

const HomePage = () => {
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center mb-12">
                Financial Calculators
            </h1>

            {/* Main Sections */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Section 1 */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4 flex items-center">
                        <FaCalculator className="mr-2" />{" "}
                        {/* Icon for Popular */}
                        Popular
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
                        <FaChartLine className="mr-2" />{" "}
                        {/* Icon for Loan Calculators */}
                        Other Loan Calculators
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/loan-based-on-payment"
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
                                Compare Loan calculator
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/interest-only-loan-calculator"
                                className="text-black hover:text-yellow-500"
                            >
                                Interest Only Loan Calculator
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

                {/* Section 3 */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4 flex items-center">
                        <FaGraduationCap className="mr-2" />{" "}
                        {/* Icon for Simulations */}
                        Simulations
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/savings-simulator"
                                className="text-black hover:text-yellow-500"
                            >
                                Savings Calculator Simulator
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/retirement-simulation"
                                className="text-black hover:text-yellow-500"
                            >
                                Retirement Simulation
                            </Link>
                        </li>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6 mb-4 flex items-center">
                        <FaGraduationCap className="mr-2" />
                        Other Financial Topics
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/student-loan-education"
                                className="text-black hover:text-yellow-500"
                            >
                                Student Loan Education
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/value-of-gold"
                                className="text-black hover:text-yellow-500"
                            >
                                Value of Gold by Weight
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4 flex items-center">
                        <FaTools className="mr-2" />{" "}
                        {/* Icon for Useful Sites */}
                        Other Useful Sites
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/financial-tools"
                                className="text-black hover:text-yellow-500"
                            >
                                Financial Calculators and Tools
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/real-estate-calculations"
                                className="text-black hover:text-yellow-500"
                            >
                                Real Estate Calculations
                            </Link>
                        </li>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6 mb-4 flex items-center">
                        <FaTools className="mr-2" />
                        Other Calculators
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/height-calculator"
                                className="text-black hover:text-yellow-500"
                            >
                                Height
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/weight-calculator"
                                className="text-black hover:text-yellow-500"
                            >
                                Weight
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/volume-calculator"
                                className="text-black hover:text-yellow-500"
                            >
                                Volume
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/area-calculator"
                                className="text-black hover:text-yellow-500"
                            >
                                Area
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
