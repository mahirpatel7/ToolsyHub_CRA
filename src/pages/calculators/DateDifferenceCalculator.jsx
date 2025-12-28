import React, { useState, useEffect } from "react";
import { Box } from "@mui/material"; // MUI used safely without UI change
import { Calendar, Clock } from "lucide-react";
import AdSpace from "../../components/AdSpace";

const DateDifferenceCalculator = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [result, setResult] = useState(null);

    const calculateDifference = () => {
        if (!startDate || !endDate) return;

        const start = new Date(startDate);
        const end = new Date(endDate);

        if (start > end) {
            setResult(null);
            return;
        }

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const totalDays = Math.floor(
            (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
        );
        const totalWeeks = Math.floor(totalDays / 7);
        const totalHours = totalDays * 24;
        const totalMinutes = totalHours * 60;
        const totalSeconds = totalMinutes * 60;

        setResult({
            years,
            months,
            days,
            totalDays,
            totalWeeks,
            totalHours,
            totalMinutes,
            totalSeconds
        });
    };

    useEffect(() => {
        calculateDifference();
    }, [startDate, endDate]);

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Calendar className="h-8 w-8 inline mr-3 text-blue-600" />
                    Date Difference Calculator
                </h1>
                <p className="text-xl text-gray-600">
                    Calculate the difference between two dates
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {result && (
                            <div className="mt-8 space-y-6">
                                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                                        Date Difference
                                    </h3>

                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-3xl font-bold text-blue-600">
                                                {result.years}
                                            </div>
                                            <div className="text-sm text-gray-600">Years</div>
                                        </div>

                                        <div>
                                            <div className="text-3xl font-bold text-purple-600">
                                                {result.months}
                                            </div>
                                            <div className="text-sm text-gray-600">Months</div>
                                        </div>

                                        <div>
                                            <div className="text-3xl font-bold text-indigo-600">
                                                {result.days}
                                            </div>
                                            <div className="text-sm text-gray-600">Days</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">
                                            {result.totalDays.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Total Days</div>
                                    </div>

                                    <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">
                                            {result.totalWeeks.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Total Weeks</div>
                                    </div>

                                    <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">
                                            {result.totalHours.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Total Hours</div>
                                    </div>

                                    <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">
                                            {result.totalMinutes.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Total Minutes</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                                        <div className="text-xl font-bold text-gray-900">
                                            {result.totalSeconds.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Total Seconds</div>
                                    </div>

                                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-center">
                                        <div className="text-lg font-bold text-gray-900">
                                            {result.years > 0 &&
                                                `${result.years} year${result.years > 1 ? "s" : ""} `}
                                            {result.months > 0 &&
                                                `${result.months} month${result.months > 1 ? "s" : ""} `}
                                            {result.days > 0 &&
                                                `${result.days} day${result.days > 1 ? "s" : ""}`}
                                        </div>
                                        <div className="text-sm text-gray-600">Duration</div>
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
                            Use Cases
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p>• Calculate age in exact years, months, and days</p>
                            <p>• Find project duration or timeline</p>
                            <p>• Calculate time between events</p>
                            <p>• Determine working days between dates</p>
                            <p>• Plan anniversaries and milestones</p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default DateDifferenceCalculator;
