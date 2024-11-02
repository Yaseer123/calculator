"use client";
import { useState } from "react";
import { ShinyButton } from "@/components/ShinyButton";

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState<number>(100);
    const [tipPercent, setTipPercent] = useState<number>(18);
    const [splitWays, setSplitWays] = useState<number>(1);

    const [totalTip, setTotalTip] = useState<number | null>(null);
    const [totalBill, setTotalBill] = useState<number | null>(null);
    const [perPerson, setPerPerson] = useState<number | null>(null);

    const calculateTip = () => {
        const tipAmount = (billAmount * tipPercent) / 100;
        const billWithTip = billAmount + tipAmount;
        const perPersonAmount = billWithTip / splitWays;

        setTotalTip(tipAmount);
        setTotalBill(billWithTip);
        setPerPerson(perPersonAmount);
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Tip Calculator
            </h1>

            <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                {/* Input Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <label className="block text-gray-700">
                        Bill Amount ($)
                    </label>
                    <input
                        type="number"
                        value={billAmount}
                        onChange={(e) =>
                            setBillAmount(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Percent Tip (%)
                    </label>
                    <input
                        type="number"
                        value={tipPercent}
                        onChange={(e) =>
                            setTipPercent(parseFloat(e.target.value) || 0)
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block text-gray-700">
                        Split Bill (ways)
                    </label>
                    <input
                        type="number"
                        value={splitWays}
                        onChange={(e) =>
                            setSplitWays(
                                Math.max(1, parseInt(e.target.value) || 1)
                            )
                        }
                        className="w-full p-2 border rounded mb-4"
                    />

                    <div className="text-center mt-4">
                        <ShinyButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                calculateTip();
                            }}
                            className="bg-blue-500 text-white w-32"
                        >
                            Calculate
                        </ShinyButton>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    <p className="text-lg mb-2">
                        Total Tip:{" "}
                        <span className="font-bold text-green-600">
                            ${totalTip !== null ? totalTip.toFixed(2) : "---"}
                        </span>
                    </p>
                    <p className="text-lg mb-2">
                        Total Bill with Tip:{" "}
                        <span className="font-bold text-green-600">
                            ${totalBill !== null ? totalBill.toFixed(2) : "---"}
                        </span>
                    </p>
                    <p className="text-lg">
                        Per Person:{" "}
                        <span className="font-bold text-green-600">
                            ${perPerson !== null ? perPerson.toFixed(2) : "---"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TipCalculator;
