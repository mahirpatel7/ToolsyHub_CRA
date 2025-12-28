import React, { useState } from "react";
import { Box } from "@mui/material"; // MUI used safely (no UI change)
import { Percent, Calculator } from "lucide-react";
import AdSpace from "../../components/AdSpace";

const PercentageCalculator = () => {
    const [activeTab, setActiveTab] = useState("basic");

    // Basic percentage
    const [value, setValue] = useState("");
    const [percentage, setPercentage] = useState("");
    const [basicResult, setBasicResult] = useState(null);

    // Percentage increase/decrease
    const [originalValue, setOriginalValue] = useState("");
    const [newValue, setNewValue] = useState("");
    const [changeResult, setChangeResult] = useState(null);

    // What percentage is X of Y
    const [partValue, setPartValue] = useState("");
    const [totalValue, setTotalValue] = useState("");
    const [ratioResult, setRatioResult] = useState(null);

    const calculateBasicPercentage = () => {
        if (!value || !percentage) return;
        const result = (parseFloat(value) * parseFloat(percentage)) / 100;
        setBasicResult(parseFloat(result.toFixed(2)));
    };

    const calculatePercentageChange = () => {
        if (!originalValue || !newValue) return;
        const original = parseFloat(originalValue);
        const newVal = parseFloat(newValue);
        const change = ((newVal - original) / original) * 100;
        setChangeResult(parseFloat(change.toFixed(2)));
    };

    const calculateRatio = () => {
        if (!partValue || !totalValue) return;
        const result = (parseFloat(partValue) / parseFloat(totalValue)) * 100;
        setRatioResult(parseFloat(result.toFixed(2)));
    };

    const tabs = [
        { id: "basic", label: "Basic Percentage", icon: Percent },
        { id: "increase", label: "Percentage Change", icon: Calculator },
        { id: "decrease", label: "What % is X of Y", icon: Percent }
    ];

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Percent className="h-8 w-8 inline mr-3 text-blue-600" />
                    Percentage Calculator
                </h1>
                <p className="text-xl text-gray-600">
                    Calculate percentages with ease
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            <button
                                onClick={() => setActiveTab("basic")}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "basic"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                Basic %
                            </button>

                            <button
                                onClick={() => setActiveTab("increase")}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "increase"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                % Change
                            </button>

                            <button
                                onClick={() => setActiveTab("decrease")}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "decrease"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                X of Y
                            </button>
                        </div>

                        {/* Basic Percentage */}
                        {activeTab === "basic" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    What is X% of Y?
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Percentage (%)
                                        </label>
                                        <input
                                            type="number"
                                            value={percentage}
                                            onChange={(e) => setPercentage(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="25"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Value
                                        </label>
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="200"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateBasicPercentage}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Calculate
                                </button>

                                {basicResult !== null && (
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">
                                                {basicResult}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {percentage}% of {value} = {basicResult}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Percentage Change */}
                        {activeTab === "increase" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Percentage Change
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Original Value
                                        </label>
                                        <input
                                            type="number"
                                            value={originalValue}
                                            onChange={(e) => setOriginalValue(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="100"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            New Value
                                        </label>
                                        <input
                                            type="number"
                                            value={newValue}
                                            onChange={(e) => setNewValue(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="150"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculatePercentageChange}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Calculate
                                </button>

                                {changeResult !== null && (
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <div className="text-center">
                                            <div
                                                className={`text-2xl font-bold ${changeResult >= 0
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                    }`}
                                            >
                                                {changeResult >= 0 ? "+" : ""}
                                                {changeResult}%
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {changeResult >= 0 ? "Increase" : "Decrease"} from{" "}
                                                {originalValue} to {newValue}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* What percentage is X of Y */}
                        {activeTab === "decrease" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    What percentage is X of Y?
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Part Value (X)
                                        </label>
                                        <input
                                            type="number"
                                            value={partValue}
                                            onChange={(e) => setPartValue(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Total Value (Y)
                                        </label>
                                        <input
                                            type="number"
                                            value={totalValue}
                                            onChange={(e) => setTotalValue(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="200"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateRatio}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Calculate
                                </button>

                                {ratioResult !== null && (
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">
                                                {ratioResult}%
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {partValue} is {ratioResult}% of {totalValue}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <AdSpace size="square" />

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Quick Tips
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p>• To find X% of Y: multiply Y by X/100</p>
                            <p>• To find what % X is of Y: divide X by Y and multiply by 100</p>
                            <p>• Percentage change: ((New - Old) / Old) × 100</p>
                            <p>• Positive result = increase, negative = decrease</p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default PercentageCalculator;
