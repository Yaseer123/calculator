"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

// Function to calculate loan payoff duration
const calculateLoanPayoff = (
    debtAmount: number,
    annualRate: number,
    monthlyPayment: number
) => {
    const monthlyRate = annualRate / 100 / 12;
    let remainingBalance = debtAmount;
    let months = 0;

    // Loop to calculate number of months needed to pay off the debt
    while (remainingBalance > 0) {
        remainingBalance =
            remainingBalance * (1 + monthlyRate) - monthlyPayment;
        months++;

        // Check if the monthly payment is too low to cover the interest
        if (remainingBalance > debtAmount && months > 1) {
            return { years: Infinity, months: Infinity };
        }
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return { years, months: remainingMonths };
};

const StudentLoanDebtPayOffCalculator = () => {
    const [debtAmount, setDebtAmount] = useState<number>(35000);
    const [interestRate, setInterestRate] = useState<number>(5.25);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(430);

    const [payoffYears, setPayoffYears] = useState<number | null>(null);
    const [payoffMonths, setPayoffMonths] = useState<number | null>(null);

    const handleCalculate = () => {
        const { years, months } = calculateLoanPayoff(
            debtAmount,
            interestRate,
            monthlyPayment
        );

        if (years === Infinity) {
            alert(
                "Your monthly payment is too low to cover the interest, and the debt will never be paid off."
            );
            setPayoffYears(null);
            setPayoffMonths(null);
        } else {
            setPayoffYears(years);
            setPayoffMonths(months);
        }
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
                            setDebtAmount(parseFloat(e.target.value) || 0)
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
                    {payoffYears !== null && payoffMonths !== null ? (
                        <p className="text-lg">
                            You will pay off your debt in{" "}
                            <span className="font-bold text-green-600">
                                {payoffYears} years and {payoffMonths} months.
                            </span>
                        </p>
                    ) : (
                        <p className="text-lg text-red-600">
                            Adjust the payment to cover at least the monthly
                            interest.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentLoanDebtPayOffCalculator;
