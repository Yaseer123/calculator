import React from "react";
import { Bar } from "react-chartjs-2";

interface ChartSectionProps {
    startYear: number;
    endYear: number;
    chartData: number[];
    label: string; // New label prop
}

const ChartSection: React.FC<ChartSectionProps> = ({
    startYear,
    endYear,
    chartData,
    label,
}) => {
    return (
        <div className="w-full max-w-3xl mx-auto mt-8">
            <Bar
                data={{
                    labels: Array.from(
                        { length: endYear - startYear + 1 },
                        (_, i) => startYear + i
                    ),
                    datasets: [
                        {
                            label: label, // Use the label prop here
                            data: chartData,
                            backgroundColor: "rgba(255, 99, 71, 0.8)",
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
    );
};

export default ChartSection;
