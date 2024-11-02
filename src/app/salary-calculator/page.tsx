"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

const SalaryCalculator = () => {
    const [salary, setSalary] = useState<number>(12.55);
    const [salaryType, setSalaryType] = useState<string>("hourly");
    const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
    const [weeksPerYear, setWeeksPerYear] = useState<number>(50);
    const [annualSalary, setAnnualSalary] = useState<number | null>(null);

    const calculateSalary = () => {
        let calculatedAnnualSalary;

        if (salaryType === "hourly") {
            // Convert hourly salary to annual
            calculatedAnnualSalary = salary * hoursPerWeek * weeksPerYear;
        } else {
            // Assume the entered salary is already annual
            calculatedAnnualSalary = salary;
        }

        setAnnualSalary(calculatedAnnualSalary);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Salary Calculator
            </h1>

            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">Salary ($)</label>
                    <input
                        type="number"
                        value={salary}
                        onChange={(e) =>
                            setSalary(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">Type</label>
                    <select
                        value={salaryType}
                        onChange={(e) => setSalaryType(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    >
                        <option value="hourly">Per Hour</option>
                        <option value="annual">Per Year</option>
                    </select>

                    {salaryType === "hourly" && (
                        <>
                            <label className="block text-gray-700">
                                Hours Worked Per Week
                            </label>
                            <input
                                type="number"
                                value={hoursPerWeek}
                                onChange={(e) =>
                                    setHoursPerWeek(
                                        parseFloat(e.target.value) || 0
                                    )
                                }
                                className="w-full p-2 border rounded mb-4"
                            />

                            <label className="block text-gray-700">
                                Weeks Worked Per Year
                            </label>
                            <input
                                type="number"
                                value={weeksPerYear}
                                onChange={(e) =>
                                    setWeeksPerYear(
                                        parseFloat(e.target.value) || 0
                                    )
                                }
                                className="w-full p-2 border rounded mb-4"
                            />
                        </>
                    )}

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                calculateSalary();
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
                    {annualSalary !== null ? (
                        <p className="text-lg">
                            ${salary.toFixed(2)}/
                            {salaryType === "hourly" ? "hour" : "year"} ={" "}
                            <span className="font-bold text-green-600">
                                ${annualSalary.toFixed(2)}/year
                            </span>
                        </p>
                    ) : (
                        <p className="text-gray-500">
                            Enter values and click "Calculate" to see results.
                        </p>
                    )}
                    {salaryType === "hourly" && (
                        <p className="text-sm text-gray-600 mt-4">
                            With a {hoursPerWeek} hour work week and{" "}
                            {weeksPerYear} weeks per year.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalaryCalculator;
