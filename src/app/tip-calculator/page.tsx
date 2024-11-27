import TipCalculator from "@/components/calculators/TipCalculator";

export const metadata = {
    title: "Tip Calculator | Split Bills Effortlessly",
    description:
        "Calculate tips, total bills, and per-person costs with our U.S.-focused Tip Calculator. Perfect for dining out or group expenses.",
    keywords: [
        "tip calculator USA",
        "split bill calculator",
        "dining bill planner",
        "restaurant tip calculator",
        "group expense management",
    ],
};

const TipCalculatorPage = () => (
    <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Tip Calculator</h1>
        <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-gray-700">
                Effortlessly calculate tips, total bills, and per-person costs
                with our <strong>Tip Calculator</strong>. Tailored for U.S.
                users, it’s perfect for dining out or managing group expenses.
            </p>
        </div>
        <TipCalculator />
    </div>
);

export default TipCalculatorPage;
