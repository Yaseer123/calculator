"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

type InflationData = { year: number; value: number };

const InflationCalculator = () => {
    const [amount, setAmount] = useState<number>(1.0);
    const [fromYear, setFromYear] = useState<number>(1914);
    const [toYear, setToYear] = useState<number>(2024);
    const [calculatedAmount, setCalculatedAmount] = useState<number | null>(
        null
    );
    const [inflationData, setInflationData] = useState<InflationData[]>([]);

    const calculateInflation = async () => {
        const inflationAdjustedAmount = amount * 30.67; // Example multiplier
        setCalculatedAmount(inflationAdjustedAmount);

        setInflationData([
            { year: 1914, value: 1 },
            { year: 2024, value: inflationAdjustedAmount },
        ]);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Inflation Calculator
            </h1>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-lg">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-gray-700">Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) =>
                                setAmount(parseFloat(e.target.value) || 0)
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">From</label>
                        <select
                            value={fromYear}
                            onChange={(e) =>
                                setFromYear(parseInt(e.target.value, 10) || 0)
                            }
                            className="w-full p-2 border rounded"
                        >
                            {Array.from(
                                { length: 111 },
                                (_, i) => 1914 + i
                            ).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">To</label>
                        <select
                            value={toYear}
                            onChange={(e) =>
                                setToYear(parseInt(e.target.value, 10) || 0)
                            }
                            className="w-full p-2 border rounded"
                        >
                            {Array.from(
                                { length: 111 },
                                (_, i) => 1914 + i
                            ).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={calculateInflation}
                        className="col-span-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Calculate
                    </button>
                </div>

                {calculatedAmount !== null && (
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl">
                            ${amount} in {fromYear} equals{" "}
                            <span className="text-red-500">
                                ${calculatedAmount.toFixed(2)}
                            </span>{" "}
                            in {toYear}.
                        </h2>
                    </div>
                )}
            </div>

            {inflationData.length > 0 && (
                <div className="mt-8 max-w-4xl mx-auto">
                    <Bar
                        data={{
                            labels: inflationData.map((data) => data.year),
                            datasets: [
                                {
                                    label: "Inflation Value",
                                    data: inflationData.map(
                                        (data) => data.value
                                    ),
                                    backgroundColor: "rgba(54, 162, 235, 0.6)",
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
    );
};

export default InflationCalculator;
