"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

interface AmortizationPayment {
    paymentNumber: number;
    principalPayment: number;
    interestPayment: number;
    balance: number;
}

const AmortizationCalculator = () => {
    const [homePrice, setHomePrice] = useState<number>(350000);
    const [downPayment, setDownPayment] = useState<number>(70000);
    const [interestRate, setInterestRate] = useState<number>(6.25);
    const [loanLength, setLoanLength] = useState<number>(30);
    const [scheduleType, setScheduleType] = useState<string>("Year");

    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [totalInterest, setTotalInterest] = useState<number | null>(null);
    const [totalPaid, setTotalPaid] = useState<number | null>(null);
    const [numberOfPayments, setNumberOfPayments] = useState<number | null>(
        null
    );
    const [amortizationSchedule, setAmortizationSchedule] = useState<
        AmortizationPayment[]
    >([]);

    const calculateAmortization = () => {
        const principal = homePrice - downPayment;
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanLength * 12;

        const monthlyPayment =
            (principal * monthlyRate) /
            (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        setMonthlyPayment(monthlyPayment);

        let balance = principal;
        let totalInterestPaid = 0;
        const schedule: AmortizationPayment[] = [];

        for (let i = 1; i <= numberOfPayments; i++) {
            const interestPayment = balance * monthlyRate;
            const principalPayment = monthlyPayment - interestPayment;
            balance -= principalPayment;
            totalInterestPaid += interestPayment;

            if (
                (scheduleType === "Year" && i % 12 === 0) ||
                scheduleType === "Month"
            ) {
                schedule.push({
                    paymentNumber: i,
                    interestPayment,
                    principalPayment,
                    balance: Math.max(0, balance),
                });
            }
        }

        setTotalInterest(totalInterestPaid);
        setTotalPaid(monthlyPayment * numberOfPayments);
        setNumberOfPayments(numberOfPayments);
        setAmortizationSchedule(schedule);
    };

    return (
        <div className="min-h-screen p-6">
            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Home Price ($)
                    </label>
                    <input
                        type="number"
                        value={homePrice}
                        onChange={(e) =>
                            setHomePrice(parseFloat(e.target.value))
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
                            setDownPayment(parseFloat(e.target.value))
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
                            setInterestRate(parseFloat(e.target.value))
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
                            setLoanLength(parseInt(e.target.value))
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Show Amortization Schedule By:
                    </label>
                    <select
                        value={scheduleType}
                        onChange={(e) => setScheduleType(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    >
                        <option value="Year">Year</option>
                        <option value="Month">Month</option>
                    </select>

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                calculateAmortization();
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
                    {monthlyPayment !== null &&
                    totalInterest !== null &&
                    totalPaid !== null ? (
                        <>
                            <p className="text-lg mb-2">
                                Monthly Payment:{" "}
                                <span className="font-bold text-green-600">
                                    ${monthlyPayment.toFixed(2)}
                                </span>
                            </p>
                            <p className="text-lg mb-2">
                                Total Interest Paid:{" "}
                                <span className="font-bold text-red-500">
                                    ${totalInterest.toFixed(2)}
                                </span>
                            </p>
                            <p className="text-lg mb-2">
                                Total Amount Paid:{" "}
                                <span className="font-bold text-red-500">
                                    ${totalPaid.toFixed(2)}
                                </span>
                            </p>
                            <p className="text-lg mb-2">
                                Number of Payments:{" "}
                                <span className="font-bold text-gray-700">
                                    {numberOfPayments}
                                </span>
                            </p>
                        </>
                    ) : (
                        <p className="text-lg text-gray-500">
                            Enter values and click &quot;Calculate&quot; to see
                            results.
                        </p>
                    )}
                </div>

                {/* Amortization Schedule Section */}
                {amortizationSchedule.length > 0 && (
                    <div className="w-full bg-white p-6 rounded shadow-lg mt-6 overflow-auto">
                        <h2 className="text-xl font-semibold mb-4">
                            Amortization Schedule
                        </h2>
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 border">Payment #</th>
                                    <th className="p-2 border">Principal</th>
                                    <th className="p-2 border">Interest</th>
                                    <th className="p-2 border">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {amortizationSchedule.map((payment, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-100"
                                    >
                                        <td className="p-2 border">
                                            {payment.paymentNumber}
                                        </td>
                                        <td className="p-2 border">
                                            $
                                            {payment.principalPayment.toFixed(
                                                2
                                            )}
                                        </td>
                                        <td className="p-2 border">
                                            $
                                            {payment.interestPayment.toFixed(2)}
                                        </td>
                                        <td className="p-2 border">
                                            ${payment.balance.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AmortizationCalculator;
