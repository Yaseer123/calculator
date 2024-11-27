"use client";

import { useState } from "react";
import inflationData from "@/data/inflationData";
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
import { Input } from "@/components/ui/input"; // Shadcn input component
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Registering required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const InflationCalculator = () => {
    const [amount, setAmount] = useState<number>(1.0);
    const [startYear, setStartYear] = useState<number>(1914);
    const [endYear, setEndYear] = useState<number>(2024);
    const [adjustedAmount, setAdjustedAmount] = useState<number | null>(null);
    const [chartData, setChartData] = useState<number[]>([0]); // Initial placeholder data
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const calculateInflation = () => {
        if (startYear in inflationData && endYear in inflationData) {
            const startValue = inflationData[startYear];
            const endValue = inflationData[endYear];
            const adjusted = (amount / startValue) * endValue;

            setAdjustedAmount(adjusted);

            // Generate chart data for yearly inflation change
            const years = Array.from(
                { length: endYear - startYear + 1 },
                (_, i) => startYear + i
            );
            const values = years.map(
                (year) => (amount / startValue) * inflationData[year]
            );
            setChartData(values);
            setErrorMessage(null);
        } else {
            setErrorMessage(
                "Please select valid years within the range of available data."
            );
        }
    };

    // Generate options for the dropdowns
    const yearOptions = Array.from(
        { length: 2024 - 1914 + 1 },
        (_, i) => 1914 + i
    );

    return (
        <div className="min-h-screen p-6">
            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700 mb-2">
                        Amount ($)
                    </label>
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) =>
                            setAmount(
                                Math.max(0, parseFloat(e.target.value) || 0)
                            )
                        }
                        className="mb-4"
                    />

                    <label className="block text-gray-700 mb-2">
                        From Year
                    </label>
                    <Select
                        value={startYear.toString()}
                        onValueChange={(value) => setStartYear(parseInt(value))}
                    >
                        <SelectTrigger className="mb-4">
                            <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                            {yearOptions.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <label className="block text-gray-700 mb-2">To Year</label>
                    <Select
                        value={endYear.toString()}
                        onValueChange={(value) => setEndYear(parseInt(value))}
                    >
                        <SelectTrigger className="mb-4">
                            <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                            {yearOptions
                                .filter((year) => year >= startYear)
                                .map((year) => (
                                    <SelectItem
                                        key={year}
                                        value={year.toString()}
                                    >
                                        {year}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                calculateInflation();
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
                    {errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <p className="text-lg mb-2">
                            ${amount} in {startYear} equals{" "}
                            <span className="font-bold text-red-500">
                                $
                                {adjustedAmount !== null
                                    ? adjustedAmount.toFixed(2)
                                    : "---"}
                            </span>{" "}
                            in {endYear}.
                        </p>
                    )}
                </div>
            </div>

            {/* Chart Section */}
            <ChartSection
                startYear={startYear}
                endYear={endYear}
                chartData={chartData}
                label="Inflation Adjusted Value"
            />
        </div>
    );
};

export default InflationCalculator;
