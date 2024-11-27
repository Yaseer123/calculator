"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

// Calculate the loan amount based on monthly payment, rate, and years
const calculateLoanAmount = (
    monthlyPayment: number,
    annualRate: number,
    years: number
) => {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    const loanAmount =
        (monthlyPayment * (1 - Math.pow(1 + monthlyRate, -numberOfPayments))) /
        monthlyRate;
    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterestPaid = totalPaid - loanAmount;
    return { loanAmount, totalInterestPaid, totalPaid };
};

const LoanAmountCalculator = () => {
    const [monthlyPayment, setMonthlyPayment] = useState<number>(925);
    const [interestRate, setInterestRate] = useState<number>(5.75);
    const [years, setYears] = useState<number>(30);

    const [loanAmount, setLoanAmount] = useState<number | null>(null);
    const [totalInterestPaid, setTotalInterestPaid] = useState<number | null>(
        null
    );
    const [totalPaid, setTotalPaid] = useState<number | null>(null);

    const handleCalculate = () => {
        const { loanAmount, totalInterestPaid, totalPaid } =
            calculateLoanAmount(monthlyPayment, interestRate, years);
        setLoanAmount(loanAmount);
        setTotalInterestPaid(totalInterestPaid);
        setTotalPaid(totalPaid);
    };

    return (
        <div className="min-h-screen p-6">
            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Monthly Payment ($)
                    </label>
                    <input
                        type="number"
                        value={monthlyPayment}
                        onChange={(e) =>
                            setMonthlyPayment(parseFloat(e.target.value) || 0)
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

                    <label className="block text-gray-700">Years</label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) =>
                            setYears(parseInt(e.target.value) || 0)
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
                        Loan Amount:{" "}
                        <span className="font-bold text-green-600">
                            $
                            {loanAmount !== null
                                ? loanAmount.toFixed(2)
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

export default LoanAmountCalculator;
