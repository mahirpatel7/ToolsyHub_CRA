import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { User, Calculator, Info } from "lucide-react";
import AdSpace from "../../components/AdSpace";

const BodyFatCalculator = () => {
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [neck, setNeck] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [unit, setUnit] = useState("metric");
    const [result, setResult] = useState(null);

    const calculateBodyFat = () => {
        if (!height || !weight || !neck || !waist || (gender === "female" && !hip)) return;

        const heightCm = unit === "metric" ? parseFloat(height) : parseFloat(height) * 2.54;
        const neckCm = unit === "metric" ? parseFloat(neck) : parseFloat(neck) * 2.54;
        const waistCm = unit === "metric" ? parseFloat(waist) : parseFloat(waist) * 2.54;
        const hipCm =
            gender === "female"
                ? unit === "metric"
                    ? parseFloat(hip)
                    : parseFloat(hip) * 2.54
                : 0;

        let bodyFat;

        if (gender === "male") {
            bodyFat =
                495 /
                (1.0324 -
                    0.19077 * Math.log10(waistCm - neckCm) +
                    0.15456 * Math.log10(heightCm)) -
                450;
        } else {
            bodyFat =
                495 /
                (1.29579 -
                    0.35004 * Math.log10(waistCm + hipCm - neckCm) +
                    0.221 * Math.log10(heightCm)) -
                450;
        }

        const roundedBodyFat = Math.max(0, parseFloat(bodyFat.toFixed(1)));

        let category = "";
        let description = "";

        if (gender === "male") {
            if (roundedBodyFat < 6) {
                category = "Essential Fat";
                description = "Dangerously low body fat";
            } else if (roundedBodyFat < 14) {
                category = "Athletes";
                description = "Very low body fat, typical for athletes";
            } else if (roundedBodyFat < 18) {
                category = "Fitness";
                description = "Low body fat, fit and healthy";
            } else if (roundedBodyFat < 25) {
                category = "Average";
                description = "Normal body fat range";
            } else {
                category = "Obese";
                description = "High body fat, health risks";
            }
        } else {
            if (roundedBodyFat < 16) {
                category = "Essential Fat";
                description = "Dangerously low body fat";
            } else if (roundedBodyFat < 21) {
                category = "Athletes";
                description = "Very low body fat, typical for athletes";
            } else if (roundedBodyFat < 25) {
                category = "Fitness";
                description = "Low body fat, fit and healthy";
            } else if (roundedBodyFat < 32) {
                category = "Average";
                description = "Normal body fat range";
            } else {
                category = "Obese";
                description = "High body fat, health risks";
            }
        }

        setResult({ bodyFat: roundedBodyFat, category, description });
    };

    useEffect(() => {
        calculateBodyFat();
    }, [gender, height, weight, neck, waist, hip, unit]);

    const getCategoryColor = () => {
        if (!result) return "text-gray-500";
        switch (result.category) {
            case "Essential Fat":
                return "text-red-600";
            case "Athletes":
                return "text-blue-600";
            case "Fitness":
                return "text-green-600";
            case "Average":
                return "text-yellow-600";
            case "Obese":
                return "text-red-600";
            default:
                return "text-gray-500";
        }
    };

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <User className="h-8 w-8 inline mr-3 text-blue-600" />
                    Body Fat Calculator
                </h1>
                <p className="text-xl text-gray-600">
                    Calculate your body fat percentage using the U.S. Navy method
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Gender
                                    </label>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Unit System
                                    </label>
                                    <select
                                        value={unit}
                                        onChange={(e) => setUnit(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="metric">Metric (cm)</option>
                                        <option value="imperial">Imperial (inches)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Height {unit === "metric" ? "(cm)" : "(inches)"}
                                    </label>
                                    <input
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={unit === "metric" ? "170" : "67"}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Weight {unit === "metric" ? "(kg)" : "(lbs)"}
                                    </label>
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={unit === "metric" ? "70" : "154"}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Neck {unit === "metric" ? "(cm)" : "(inches)"}
                                    </label>
                                    <input
                                        type="number"
                                        value={neck}
                                        onChange={(e) => setNeck(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={unit === "metric" ? "38" : "15"}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Waist {unit === "metric" ? "(cm)" : "(inches)"}
                                    </label>
                                    <input
                                        type="number"
                                        value={waist}
                                        onChange={(e) => setWaist(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={unit === "metric" ? "85" : "33"}
                                    />
                                </div>
                            </div>

                            {gender === "female" && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Hip {unit === "metric" ? "(cm)" : "(inches)"}
                                    </label>
                                    <input
                                        type="number"
                                        value={hip}
                                        onChange={(e) => setHip(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={unit === "metric" ? "95" : "37"}
                                    />
                                </div>
                            )}
                        </div>

                        {result && (
                            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                                    Body Fat Result
                                </h3>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">
                                        {result.bodyFat}%
                                    </div>
                                    <div className={`text-lg font-medium ${getCategoryColor()}`}>
                                        {result.category}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2">
                                        {result.description}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <AdSpace size="square" />

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Info className="h-5 w-5 mr-2 text-blue-600" />
                            Body Fat Categories
                        </h3>

                        <div className="space-y-3 text-sm">
                            <div className="font-medium text-gray-900">Men:</div>
                            <div className="space-y-1 text-gray-600">
                                <div>Essential Fat: 2–5%</div>
                                <div>Athletes: 6–13%</div>
                                <div>Fitness: 14–17%</div>
                                <div>Average: 18–24%</div>
                                <div>Obese: 25%+</div>
                            </div>

                            <div className="font-medium text-gray-900 mt-4">Women:</div>
                            <div className="space-y-1 text-gray-600">
                                <div>Essential Fat: 10–13%</div>
                                <div>Athletes: 14–20%</div>
                                <div>Fitness: 21–24%</div>
                                <div>Average: 25–31%</div>
                                <div>Obese: 32%+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default BodyFatCalculator;
