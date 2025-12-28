import React, { useState, useEffect } from "react";
import { Box } from "@mui/material"; // MUI used safely without UI change
import { Zap, User, Activity } from "lucide-react";
import AdSpace from "../../components/AdSpace";

const CalorieCalculator = () => {
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [activityLevel, setActivityLevel] = useState("1.2");
    const [unit, setUnit] = useState("metric");
    const [result, setResult] = useState(null);

    const activityLevels = [
        { value: "1.2", label: "Sedentary (little/no exercise)" },
        { value: "1.375", label: "Light activity (light exercise 1-3 days/week)" },
        { value: "1.55", label: "Moderate activity (moderate exercise 3-5 days/week)" },
        { value: "1.725", label: "Very active (hard exercise 6-7 days/week)" },
        { value: "1.9", label: "Extremely active (very hard exercise, physical job)" }
    ];

    const calculateCalories = () => {
        if (!age || !height || !weight) return;

        const heightCm =
            unit === "metric" ? parseFloat(height) : parseFloat(height) * 2.54;
        const weightKg =
            unit === "metric" ? parseFloat(weight) : parseFloat(weight) * 0.453592;

        let bmr;
        if (gender === "male") {
            bmr = 10 * weightKg + 6.25 * heightCm - 5 * parseFloat(age) + 5;
        } else {
            bmr = 10 * weightKg + 6.25 * heightCm - 5 * parseFloat(age) - 161;
        }

        const tdee = bmr * parseFloat(activityLevel);
        const weightLoss = tdee - 500;
        const weightGain = tdee + 500;

        setResult({
            bmr: Math.round(bmr),
            tdee: Math.round(tdee),
            weightLoss: Math.round(weightLoss),
            weightGain: Math.round(weightGain)
        });
    };

    useEffect(() => {
        calculateCalories();
    }, [gender, age, height, weight, activityLevel, unit]);

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Zap className="h-8 w-8 inline mr-3 text-orange-600" />
                    Calorie Calculator
                </h1>
                <p className="text-xl text-gray-600">
                    Calculate your daily calorie needs
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
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    >
                                        <option value="metric">Metric</option>
                                        <option value="imperial">Imperial</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Age (years)
                                    </label>
                                    <input
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="30"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Height {unit === "metric" ? "(cm)" : "(inches)"}
                                    </label>
                                    <input
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder={unit === "metric" ? "70" : "154"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Activity Level
                                </label>
                                <select
                                    value={activityLevel}
                                    onChange={(e) => setActivityLevel(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    {activityLevels.map((level) => (
                                        <option key={level.value} value={level.value}>
                                            {level.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {result && (
                            <div className="mt-8 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                                            <User className="h-4 w-4 mr-2" />
                                            BMR (Basal Metabolic Rate)
                                        </h4>
                                        <div className="text-2xl font-bold text-blue-600">
                                            {result.bmr}
                                        </div>
                                        <div className="text-sm text-blue-700">
                                            calories/day at rest
                                        </div>
                                    </div>

                                    <div className="p-4 bg-green-50 rounded-lg">
                                        <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                                            <Activity className="h-4 w-4 mr-2" />
                                            TDEE (Total Daily Energy Expenditure)
                                        </h4>
                                        <div className="text-2xl font-bold text-green-600">
                                            {result.tdee}
                                        </div>
                                        <div className="text-sm text-green-700">
                                            calories/day to maintain weight
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-red-50 rounded-lg">
                                        <h4 className="font-semibold text-red-900 mb-2">
                                            Weight Loss
                                        </h4>
                                        <div className="text-2xl font-bold text-red-600">
                                            {result.weightLoss}
                                        </div>
                                        <div className="text-sm text-red-700">
                                            calories/day to lose 1 lb/week
                                        </div>
                                    </div>

                                    <div className="p-4 bg-purple-50 rounded-lg">
                                        <h4 className="font-semibold text-purple-900 mb-2">
                                            Weight Gain
                                        </h4>
                                        <div className="text-2xl font-bold text-purple-600">
                                            {result.weightGain}
                                        </div>
                                        <div className="text-sm text-purple-700">
                                            calories/day to gain 1 lb/week
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <AdSpace size="square" />

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            About the Calculator
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p><strong>BMR:</strong> Calories needed for basic body functions</p>
                            <p><strong>TDEE:</strong> Total calories needed including daily activities</p>
                            <p><strong>Weight Loss:</strong> 500 calorie deficit for 1 lb/week loss</p>
                            <p><strong>Weight Gain:</strong> 500 calorie surplus for 1 lb/week gain</p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default CalorieCalculator;
