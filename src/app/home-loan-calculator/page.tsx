"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

// Function to calculate monthly payment, total interest, and total payment
const calculateLoanDetails = (
    principal: number,
    annualRate: number,
    years: number
) => {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment =
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterestPaid = totalPaid - principal;
    return { monthlyPayment, totalInterestPaid, totalPaid };
};

const HomeLoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState<number>(300000);
    const [interestRate, setInterestRate] = useState<number>(6.25);
    const [loanYears, setLoanYears] = useState<number>(30);

    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [totalInterestPaid, setTotalInterestPaid] = useState<number | null>(
        null
    );
    const [totalPaid, setTotalPaid] = useState<number | null>(null);

    const handleCalculate = () => {
        const { monthlyPayment, totalInterestPaid, totalPaid } =
            calculateLoanDetails(loanAmount, interestRate, loanYears);
        setMonthlyPayment(monthlyPayment);
        setTotalInterestPaid(totalInterestPaid);
        setTotalPaid(totalPaid);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Home Loan Calculator
            </h1>

            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Loan Amount ($)
                    </label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) =>
                            setLoanAmount(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Interest Rate (%)
                    </label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) =>
                            setInterestRate(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Loan Length (years)
                    </label>
                    <input
                        type="number"
                        value={loanYears}
                        onChange={(e) =>
                            setLoanYears(parseInt(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleCalculate();
                            }}
                            className="bg-blue-500 text-white w-32"
                        >
                            Calculate
                        </ShinyButton>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    <p className="text-lg mb-2">
                        Monthly Payment:{" "}
                        <span className="font-bold text-green-600">
                            $
                            {monthlyPayment !== null
                                ? monthlyPayment.toFixed(2)
                                : "---"}
                        </span>
                    </p>
                    <p className="text-lg mb-2">
                        Total Interest Paid:{" "}
                        <span className="font-bold text-red-600">
                            $
                            {totalInterestPaid !== null
                                ? totalInterestPaid.toFixed(2)
                                : "---"}
                        </span>
                    </p>
                    <p className="text-lg">
                        Total Paid:{" "}
                        <span className="font-bold text-blue-600">
                            ${totalPaid !== null ? totalPaid.toFixed(2) : "---"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeLoanCalculator;
