"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";
import ChartSection from "@/components/ChartSection";
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

const SavingsCalculator = () => {
    const [initialDeposit, setInitialDeposit] = useState<number>(15000);
    const [contribution, setContribution] = useState<number>(2200);
    const [investmentReturn, setInvestmentReturn] = useState<number>(6.2);
    const [years, setYears] = useState<number>(32);
    const [contributionFrequency, setContributionFrequency] =
        useState<string>("yearly");
    const [futureValueCompound, setFutureValueCompound] = useState<
        number | null
    >(null);
    const [totalInvested, setTotalInvested] = useState<number | null>(null);
    const [chartData, setChartData] = useState<number[]>([]);

    const calculateSavings = () => {
        const r = investmentReturn / 100; // Convert percentage to decimal
        const P = initialDeposit;
        const n = years;

        // Determine the number of compounding periods and adjust contribution based on frequency
        const adjustedContribution = contribution;
        let compoundingPeriodsPerYear = 1;

        switch (contributionFrequency) {
            case "monthly":
                compoundingPeriodsPerYear = 12;
                break;
            case "weekly":
                compoundingPeriodsPerYear = 52;
                break;
            case "daily":
                compoundingPeriodsPerYear = 365;
                break;
        }

        const totalCompoundingPeriods = compoundingPeriodsPerYear * n;

        // Calculate future value and total invested based on compounding
        const futureValue =
            P *
                Math.pow(
                    1 + r / compoundingPeriodsPerYear,
                    totalCompoundingPeriods
                ) +
            adjustedContribution *
                ((Math.pow(
                    1 + r / compoundingPeriodsPerYear,
                    totalCompoundingPeriods
                ) -
                    1) /
                    (r / compoundingPeriodsPerYear));

        const totalInvestedAmount =
            P + adjustedContribution * compoundingPeriodsPerYear * n;

        // Generate chart data for each year
        const yearlyData = [];
        for (let i = 0; i <= n; i++) {
            const fvYear =
                P *
                    Math.pow(
                        1 + r / compoundingPeriodsPerYear,
                        compoundingPeriodsPerYear * i
                    ) +
                adjustedContribution *
                    ((Math.pow(
                        1 + r / compoundingPeriodsPerYear,
                        compoundingPeriodsPerYear * i
                    ) -
                        1) /
                        (r / compoundingPeriodsPerYear));
            yearlyData.push(fvYear);
        }

        setFutureValueCompound(futureValue);
        setTotalInvested(totalInvestedAmount);
        setChartData(yearlyData);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Compound Interest Savings Calculator
            </h1>

            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Initial Deposit ($)
                    </label>
                    <input
                        type="number"
                        value={initialDeposit}
                        onChange={(e) =>
                            setInitialDeposit(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Contribution Amount ($)
                    </label>
                    <input
                        type="number"
                        value={contribution}
                        onChange={(e) =>
                            setContribution(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Contribution Frequency
                    </label>
                    <select
                        value={contributionFrequency}
                        onChange={(e) =>
                            setContributionFrequency(e.target.value)
                        }
                        className="w-full p-2 border rounded mb-4"
                    >
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                    </select>

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
                                calculateSavings();
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
                    <div className="flex justify-between text-lg mb-2">
                        <span>Future Value (Compound Interest):</span>
                        <span className="text-green-500">
                            $
                            {futureValueCompound !== null
                                ? futureValueCompound.toFixed(2)
                                : "---"}
                        </span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Total Invested:</span>
                        <span>
                            $
                            {totalInvested !== null
                                ? totalInvested.toFixed(2)
                                : "---"}
                        </span>
                    </div>
                </div>

                {/* Chart Section */}
                {chartData.length > 0 && (
                    <ChartSection
                        startYear={0}
                        endYear={years}
                        chartData={chartData}
                        label="Compound Interest Growth"
                    />
                )}
            </div>
        </div>
    );
};

export default SavingsCalculator;
