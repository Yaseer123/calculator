"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";
import ChartSection from "@/components/ChartSection"; // Import the ChartSection component

const MortgageCalculator = () => {
    const [purchasePrice, setPurchasePrice] = useState<number>(11000);
    const [downPayment, setDownPayment] = useState<number>(2200);
    const [interestRate, setInterestRate] = useState<number>(6.25);
    const [loanLength, setLoanLength] = useState<number>(30);
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [totalInterestPaid, setTotalInterestPaid] = useState<number | null>(
        null
    );
    const [totalPaid, setTotalPaid] = useState<number | null>(null);
    const [balanceData, setBalanceData] = useState<number[]>([]); // Data for chart

    const calculateMortgage = () => {
        const principal = purchasePrice - downPayment;
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanLength * 12;
        let balance = principal;
        const balances = [];

        if (monthlyRate === 0) {
            // No interest case
            const monthly = principal / numberOfPayments;
            const total = monthly * numberOfPayments;
            const totalInterest = total - principal;

            setMonthlyPayment(monthly);
            setTotalPaid(total);
            setTotalInterestPaid(totalInterest);

            for (let i = 0; i <= loanLength; i++) {
                balances.push(balance - monthly * 12 * i);
            }
        } else {
            // With interest case
            const monthly =
                (principal *
                    (monthlyRate *
                        Math.pow(1 + monthlyRate, numberOfPayments))) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            const total = monthly * numberOfPayments;
            const totalInterest = total - principal;

            setMonthlyPayment(monthly);
            setTotalPaid(total);
            setTotalInterestPaid(totalInterest);

            // Calculate balance for each year
            for (let i = 0; i <= loanLength; i++) {
                balance = principal;
                for (let j = 0; j < i * 12; j++) {
                    balance = balance * (1 + monthlyRate) - monthly;
                }
                balances.push(Math.max(balance, 0));
            }
        }
        setBalanceData(balances);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Mortgage Calculator
            </h1>

            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Purchase Price ($)
                    </label>
                    <input
                        type="number"
                        value={purchasePrice}
                        onChange={(e) =>
                            setPurchasePrice(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Down Payment ($)
                    </label>
                    <input
                        type="number"
                        value={downPayment}
                        onChange={(e) =>
                            setDownPayment(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
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
                            setInterestRate(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Loan Length (years)
                    </label>
                    <input
                        type="number"
                        value={loanLength}
                        onChange={(e) =>
                            setLoanLength(
                                Math.max(0, parseInt(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                calculateMortgage();
                            }}
                            className="bg-blue-500 text-white"
                        >
                            Calculate
                        </ShinyButton>
                    </div>
                </div>

                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    <div className="flex justify-between text-lg mb-2">
                        <span>Monthly Payment:</span>
                        <span className="font-bold text-red-500">
                            $
                            {monthlyPayment !== null
                                ? monthlyPayment.toFixed(2)
                                : "---"}
                        </span>
                    </div>
                    <div className="flex justify-between text-lg mb-2">
                        <span>Total Interest Paid:</span>
                        <span className="font-bold text-red-500">
                            $
                            {totalInterestPaid !== null
                                ? totalInterestPaid.toFixed(2)
                                : "---"}
                        </span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Total Paid:</span>
                        <span className="font-bold text-red-500">
                            ${totalPaid !== null ? totalPaid.toFixed(2) : "---"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
