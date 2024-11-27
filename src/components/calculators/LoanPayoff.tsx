// DebtPayoffCalculator.tsx

"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

const DebtPayoffCalculator = () => {
    const [debtAmount, setDebtAmount] = useState<number>(27000);
    const [interestRate, setInterestRate] = useState<number>(7.99);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(400);
    const [payoffMonths, setPayoffMonths] = useState<number | null>(null);
    const [totalInterest, setTotalInterest] = useState<number | null>(null);

    const calculatePayoff = () => {
        let remainingDebt = debtAmount;
        let months = 0;
        let totalInterestPaid = 0;
        const monthlyInterestRate = interestRate / 100 / 12;

        // If the monthly payment is not enough to cover interest
        if (monthlyPayment <= remainingDebt * monthlyInterestRate) {
            alert(
                "Monthly payment is too low to cover the interest. Please increase the monthly payment."
            );
            return;
        }

        // Calculate payoff time and total interest
        while (remainingDebt > 0) {
            const interest = remainingDebt * monthlyInterestRate;
            totalInterestPaid += interest;
            remainingDebt += interest - monthlyPayment;
            months += 1;
        }

        setPayoffMonths(months);
        setTotalInterest(totalInterestPaid);
    };

    return (
        <div className="min-h-screen p-6">
            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Debt Amount ($)
                    </label>
                    <input
                        type="number"
                        value={debtAmount}
                        onChange={(e) =>
                            setDebtAmount(
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
                        Monthly Payment ($)
                    </label>
                    <input
                        type="number"
                        value={monthlyPayment}
                        onChange={(e) =>
                            setMonthlyPayment(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                calculatePayoff();
                            }}
                            className="bg-blue-500 text-white"
                        >
                            Calculate
                        </ShinyButton>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    {payoffMonths !== null && totalInterest !== null ? (
                        <>
                            <p className="text-lg mb-2">
                                Time to Pay Off:{" "}
                                <span className="font-bold">
                                    {Math.floor(payoffMonths / 12)} years and{" "}
                                    {payoffMonths % 12} months
                                </span>
                            </p>
                            <p className="text-lg">
                                Total Interest Paid:{" "}
                                <span className="font-bold text-red-500">
                                    ${totalInterest.toFixed(2)}
                                </span>
                            </p>
                        </>
                    ) : (
                        <p className="text-lg text-gray-500">
                            Enter values and click &quot;Calculate&quot; to see
                            results.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DebtPayoffCalculator;
