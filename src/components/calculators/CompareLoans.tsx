"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

const calculateMonthlyPayment = (
    principal: number,
    annualRate: number,
    years: number
) => {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    return (
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
    );
};

const CompareLoansCalculator = () => {
    // Loan 1
    const [loan1Amount, setLoan1Amount] = useState<number>(180000);
    const [loan1Rate, setLoan1Rate] = useState<number>(4.85);
    const [loan1Years, setLoan1Years] = useState<number>(30);

    // Loan 2
    const [loan2Amount, setLoan2Amount] = useState<number>(180000);
    const [loan2Rate, setLoan2Rate] = useState<number>(4.95);
    const [loan2Years, setLoan2Years] = useState<number>(30);

    const [loan1Payment, setLoan1Payment] = useState<number | null>(null);
    const [loan2Payment, setLoan2Payment] = useState<number | null>(null);

    const calculateLoans = () => {
        const payment1 = calculateMonthlyPayment(
            loan1Amount,
            loan1Rate,
            loan1Years
        );
        const payment2 = calculateMonthlyPayment(
            loan2Amount,
            loan2Rate,
            loan2Years
        );

        setLoan1Payment(payment1);
        setLoan2Payment(payment2);
    };

    return (
        <div className="min-h-screen p-6">
            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Loan 1 Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-lg font-semibold mb-4">Loan 1</h2>
                    <label className="block text-gray-700">
                        Loan Amount ($)
                    </label>
                    <input
                        type="number"
                        value={loan1Amount}
                        onChange={(e) =>
                            setLoan1Amount(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Interest Rate (%)
                    </label>
                    <input
                        type="number"
                        value={loan1Rate}
                        onChange={(e) =>
                            setLoan1Rate(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Loan Length (years)
                    </label>
                    <input
                        type="number"
                        value={loan1Years}
                        onChange={(e) =>
                            setLoan1Years(parseInt(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />
                </div>

                {/* Loan 2 Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-lg font-semibold mb-4">Loan 2</h2>
                    <label className="block text-gray-700">
                        Loan Amount ($)
                    </label>
                    <input
                        type="number"
                        value={loan2Amount}
                        onChange={(e) =>
                            setLoan2Amount(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Interest Rate (%)
                    </label>
                    <input
                        type="number"
                        value={loan2Rate}
                        onChange={(e) =>
                            setLoan2Rate(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Loan Length (years)
                    </label>
                    <input
                        type="number"
                        value={loan2Years}
                        onChange={(e) =>
                            setLoan2Years(parseInt(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />
                </div>

                {/* Calculate Button */}
                <div className="w-full text-center mt-4">
                    <ShinyButton
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            calculateLoans();
                        }}
                        className="bg-blue-500 text-white"
                    >
                        Calculate
                    </ShinyButton>
                </div>

                {/* Results Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3 mt-6">
                    <h2 className="text-xl font-semibold mb-4">Summary</h2>
                    <p className="text-lg mb-2">
                        Loan #1 Payment:{" "}
                        <span className="font-bold text-green-600">
                            $
                            {loan1Payment !== null
                                ? loan1Payment.toFixed(2)
                                : "---"}
                        </span>
                    </p>
                    <p className="text-lg">
                        Loan #2 Payment:{" "}
                        <span className="font-bold text-green-600">
                            $
                            {loan2Payment !== null
                                ? loan2Payment.toFixed(2)
                                : "---"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompareLoansCalculator;
