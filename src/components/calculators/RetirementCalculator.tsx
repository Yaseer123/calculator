"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";
import ChartSection from "@/components/ChartSection";

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState<number>(30);
    const [retirementAge, setRetirementAge] = useState<number>(65);
    const [currentSavings, setCurrentSavings] = useState<number>(100000);
    const [annualSavings, setAnnualSavings] = useState<number>(12000);
    const [annualWithdrawal, setAnnualWithdrawal] = useState<number>(40000);
    const [inflationRate, setInflationRate] = useState<number>(2);
    const [investmentReturn, setInvestmentReturn] = useState<number>(5);
    const [endAge, setEndAge] = useState<number | null>(null);
    const [chartData, setChartData] = useState<number[]>([]);
    const [willLastForever, setWillLastForever] = useState<boolean>(false);

    const calculateRetirementSavings = () => {
        let age = currentAge;
        let savings = currentSavings;
        const adjustedInflationRate = 1 + inflationRate / 100;
        const adjustedInvestmentReturn = 1 + investmentReturn / 100;
        const netGrowthRate = adjustedInvestmentReturn / adjustedInflationRate;

        if (netGrowthRate * currentSavings >= annualWithdrawal) {
            setWillLastForever(true);
            setEndAge(null);
            setChartData([]);
            return;
        } else {
            setWillLastForever(false);
        }

        const savingsData = [{ age, savings }];
        while (age < retirementAge) {
            savings = (savings + annualSavings) * adjustedInvestmentReturn;
            age++;
            savingsData.push({ age, savings });
        }

        while (savings > 0) {
            savings = (savings - annualWithdrawal) / adjustedInflationRate;
            savings *= adjustedInvestmentReturn;
            age++;
            if (savings > 0) savingsData.push({ age, savings });
            if (savings <= 0) break;
        }

        setEndAge(age);
        setChartData(savingsData.map((data) => data.savings));
    };

    return (
        <div className="min-h-screen p-6">
            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">Current Age</label>
                    <input
                        type="number"
                        value={currentAge}
                        onChange={(e) =>
                            setCurrentAge(
                                Math.max(0, parseInt(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Retirement Age
                    </label>
                    <input
                        type="number"
                        value={retirementAge}
                        onChange={(e) =>
                            setRetirementAge(
                                Math.max(
                                    currentAge,
                                    parseInt(e.target.value) || 0
                                )
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Current Total Savings ($)
                    </label>
                    <input
                        type="number"
                        value={currentSavings}
                        onChange={(e) =>
                            setCurrentSavings(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Annual Savings ($)
                    </label>
                    <input
                        type="number"
                        value={annualSavings}
                        onChange={(e) =>
                            setAnnualSavings(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Annual Retirement Withdrawals ($)
                    </label>
                    <input
                        type="number"
                        value={annualWithdrawal}
                        onChange={(e) =>
                            setAnnualWithdrawal(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Inflation Rate (%)
                    </label>
                    <input
                        type="number"
                        value={inflationRate}
                        onChange={(e) =>
                            setInflationRate(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Investment Return (%)
                    </label>
                    <input
                        type="number"
                        value={investmentReturn}
                        onChange={(e) =>
                            setInvestmentReturn(
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
                                calculateRetirementSavings();
                            }}
                            className="bg-blue-500 text-white"
                        >
                            Calculate
                        </ShinyButton>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">
                        Retirement Results
                    </h2>
                    {willLastForever ? (
                        <p className="text-lg text-green-600">
                            Your savings will last indefinitely.
                        </p>
                    ) : (
                        <p className="text-lg mb-2">
                            Your savings will last until age:{" "}
                            <span className="font-bold">
                                {endAge !== null ? endAge : "---"}
                            </span>
                        </p>
                    )}
                </div>

                {/* Chart Section */}
                {chartData.length > 0 && (
                    <ChartSection
                        startYear={currentAge}
                        endYear={endAge || retirementAge}
                        chartData={chartData}
                        label="Savings Over Time"
                    />
                )}
            </div>
        </div>
    );
};

export default RetirementCalculator;
