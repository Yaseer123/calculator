"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const RetirementCalculator = () => {
    // State variables for inputs
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

        // Check if net growth rate is enough to sustain withdrawals indefinitely
        if (netGrowthRate * currentSavings >= annualWithdrawal) {
            setWillLastForever(true);
            setEndAge(null);
            setChartData([]);
            return;
        } else {
            setWillLastForever(false);
        }

        const savingsData = [{ age, savings }];

        // Growth phase (until retirement)
        while (age < retirementAge) {
            savings = (savings + annualSavings) * adjustedInvestmentReturn;
            age++;
            savingsData.push({ age, savings });
        }

        // Retirement phase (withdrawals start)
        while (savings > 0) {
            // Apply withdrawal before inflation adjustment
            savings = (savings - annualWithdrawal) / adjustedInflationRate;
            savings *= adjustedInvestmentReturn; // Apply annual return after adjusting for inflation
            age++;
            if (savings > 0) savingsData.push({ age, savings });
            if (savings <= 0) break; // Stop if savings run out
        }

        setEndAge(age); // Exact age when savings run out
        setChartData(savingsData.map((data) => data.savings));
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Retirement Calculator
            </h1>

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

                    <button
                        onClick={calculateRetirementSavings}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Calculate
                    </button>
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
                    <div className="w-full max-w-3xl mx-auto mt-8">
                        <Bar
                            data={{
                                labels: Array.from(
                                    { length: chartData.length },
                                    (_, i) => i + currentAge
                                ),
                                datasets: [
                                    {
                                        label: "Savings Over Time",
                                        data: chartData,
                                        backgroundColor:
                                            "rgba(75, 192, 192, 0.6)",
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                    },
                                },
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RetirementCalculator;
