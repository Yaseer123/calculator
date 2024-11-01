"use client";
import { useState } from "react";

const HomeAffordabilityCalculator = () => {
    const [annualIncome, setAnnualIncome] = useState<number>(75000);
    const [downPayment, setDownPayment] = useState<number>(50000);
    const [percentIncomeHousing, setPercentIncomeHousing] =
        useState<number>(28);
    const [mortgageInterestRate, setMortgageInterestRate] = useState<number>(6);
    const [loanLength, setLoanLength] = useState<number>(30);

    const [affordableMonthlyPayment, setAffordableMonthlyPayment] = useState<
        number | null
    >(null);
    const [mortgageAmount, setMortgageAmount] = useState<number | null>(null);
    const [totalHousePrice, setTotalHousePrice] = useState<number | null>(null);

    const calculateAffordability = () => {
        // Monthly income available for housing
        const monthlyIncome = annualIncome / 12;
        const monthlyHousingBudget =
            (monthlyIncome * percentIncomeHousing) / 100;

        // Convert annual interest rate to monthly and number of payments to months
        const monthlyRate = mortgageInterestRate / 100 / 12;
        const numberOfPayments = loanLength * 12;

        // Calculate the maximum affordable mortgage using the monthly payment formula
        let affordableMortgage = 0;
        if (monthlyRate === 0) {
            affordableMortgage = monthlyHousingBudget * numberOfPayments;
        } else {
            affordableMortgage =
                (monthlyHousingBudget *
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) /
                (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
        }

        // Calculate total house price by adding the down payment to the affordable mortgage
        const totalAffordableHousePrice = affordableMortgage + downPayment;

        // Set state for display
        setAffordableMonthlyPayment(monthlyHousingBudget);
        setMortgageAmount(affordableMortgage);
        setTotalHousePrice(totalAffordableHousePrice);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                How Much Home Can I Afford Calculator
            </h1>

            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Annual Income ($)
                    </label>
                    <input
                        type="number"
                        value={annualIncome}
                        onChange={(e) =>
                            setAnnualIncome(
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
                        Percent of Income on Housing (%)
                    </label>
                    <input
                        type="number"
                        value={percentIncomeHousing}
                        onChange={(e) =>
                            setPercentIncomeHousing(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Mortgage Interest Rate (%)
                    </label>
                    <input
                        type="number"
                        value={mortgageInterestRate}
                        onChange={(e) =>
                            setMortgageInterestRate(
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

                    <button
                        onClick={calculateAffordability}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Calculate
                    </button>
                </div>

                {/* Results Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    <p className="text-lg mb-2">
                        You can afford to pay{" "}
                        <span className="font-bold text-blue-500">
                            $
                            {affordableMonthlyPayment !== null
                                ? affordableMonthlyPayment.toFixed(2)
                                : "---"}
                        </span>{" "}
                        per month for a mortgage.
                    </p>
                    <p className="text-lg mb-2">
                        That would be a mortgage amount of{" "}
                        <span className="font-bold text-blue-500">
                            $
                            {mortgageAmount !== null
                                ? mortgageAmount.toFixed(2)
                                : "---"}
                        </span>
                        .
                    </p>
                    <p className="text-lg">
                        With a down payment of{" "}
                        <span className="font-bold text-blue-500">
                            ${downPayment}
                        </span>
                        , the total house price would be{" "}
                        <span className="font-bold text-blue-500">
                            $
                            {totalHousePrice !== null
                                ? totalHousePrice.toFixed(2)
                                : "---"}
                        </span>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeAffordabilityCalculator;
