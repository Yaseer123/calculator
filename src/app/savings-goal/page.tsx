"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { ShinyButton } from "@/components/ShinyButton"; // Import ShinyButton
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SavingsGoalCalculator = () => {
    const [goal, setGoal] = useState<number>(3000000);
    const [currentSavings, setCurrentSavings] = useState<number>(120000);
    const [monthlySavings, setMonthlySavings] = useState<number>(720);
    const [investmentReturn, setInvestmentReturn] = useState<number>(6);
    const [yearsToGoal, setYearsToGoal] = useState<number | null>(null);
    const [monthsToGoal, setMonthsToGoal] = useState<number | null>(null);
    const [chartData, setChartData] = useState<number[]>([]);

    const calculateSavingsGoal = () => {
        let totalSavings = currentSavings;
        const monthlyRate = investmentReturn / 100 / 12;
        let months = 0;
        const growthData = [totalSavings];

        while (totalSavings < goal) {
            totalSavings *= 1 + monthlyRate;
            totalSavings += monthlySavings;
            months += 1;

            if (months % 12 === 0) {
                growthData.push(totalSavings);
            }
        }

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        setYearsToGoal(years);
        setMonthsToGoal(remainingMonths);
        setChartData(growthData);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Savings Goal Calculator
            </h1>

            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">Goal ($)</label>
                    <input
                        type="number"
                        value={goal}
                        onChange={(e) =>
                            setGoal(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Current Savings ($)
                    </label>
                    <input
                        type="number"
                        value={currentSavings}
                        onChange={(e) =>
                            setCurrentSavings(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Monthly Savings ($)
                    </label>
                    <input
                        type="number"
                        value={monthlySavings}
                        onChange={(e) =>
                            setMonthlySavings(parseFloat(e.target.value) || 0)
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
                            setInvestmentReturn(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                calculateSavingsGoal();
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
                    <p className="text-lg mb-2">You will reach your goal in:</p>
                    <div className="text-2xl font-bold">
                        {yearsToGoal !== null && monthsToGoal !== null
                            ? `${yearsToGoal} years and ${monthsToGoal} months`
                            : "---"}
                    </div>
                </div>

                {/* Chart Section */}
                {chartData.length > 0 && (
                    <div className="w-full max-w-3xl mx-auto mt-8">
                        <Bar
                            data={{
                                labels: Array.from(
                                    { length: chartData.length },
                                    (_, i) => i
                                ),
                                datasets: [
                                    {
                                        label: "Savings Growth",
                                        data: chartData,
                                        backgroundColor:
                                            "rgba(255, 99, 71, 0.8)", // Updated color
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

export default SavingsGoalCalculator;
