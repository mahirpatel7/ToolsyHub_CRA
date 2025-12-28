// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock } from 'lucide-react';
// import AdSpace from '../../components/AdSpace';

// const AgeCalculator = () => {
//     const [birthDate, setBirthDate] = useState('');
//     const [targetDate, setTargetDate] = useState(
//         new Date().toISOString().split('T')[0]
//     );
//     const [result, setResult] = useState(null);

//     const calculateAge = () => {
//         if (!birthDate) return;

//         const birth = new Date(birthDate);
//         const target = new Date(targetDate);

//         if (birth > target) return;

//         let years = target.getFullYear() - birth.getFullYear();
//         let months = target.getMonth() - birth.getMonth();
//         let days = target.getDate() - birth.getDate();

//         if (days < 0) {
//             months--;
//             const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
//             days += lastMonth.getDate();
//         }

//         if (months < 0) {
//             years--;
//             months += 12;
//         }

//         const totalDays = Math.floor(
//             (target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
//         );
//         const totalMonths = years * 12 + months;
//         const totalWeeks = Math.floor(totalDays / 7);
//         const totalHours = totalDays * 24;
//         const totalMinutes = totalHours * 60;

//         setResult({
//             years,
//             months,
//             days,
//             totalDays,
//             totalMonths,
//             totalWeeks,
//             totalHours,
//             totalMinutes
//         });
//     };

//     useEffect(() => {
//         calculateAge();
//     }, [birthDate, targetDate]);

//     return (
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="text-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-4">
//                     <Calendar className="h-8 w-8 inline mr-3 text-blue-600" />
//                     Age Calculator
//                 </h1>
//                 <p className="text-xl text-gray-600">
//                     Calculate your exact age in years, months, and days
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Birth Date
//                                 </label>
//                                 <input
//                                     type="date"
//                                     value={birthDate}
//                                     onChange={(e) => setBirthDate(e.target.value)}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Calculate Age On
//                                 </label>
//                                 <input
//                                     type="date"
//                                     value={targetDate}
//                                     onChange={(e) => setTargetDate(e.target.value)}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 />
//                             </div>
//                         </div>

//                         {result && (
//                             <div className="mt-8 space-y-6">
//                                 <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
//                                     <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                                         <Clock className="h-5 w-5 mr-2 text-blue-600" />
//                                         Your Age
//                                     </h3>

//                                     <div className="grid grid-cols-3 gap-4 text-center">
//                                         <div>
//                                             <div className="text-3xl font-bold text-blue-600">
//                                                 {result.years}
//                                             </div>
//                                             <div className="text-sm text-gray-600">Years</div>
//                                         </div>

//                                         <div>
//                                             <div className="text-3xl font-bold text-purple-600">
//                                                 {result.months}
//                                             </div>
//                                             <div className="text-sm text-gray-600">Months</div>
//                                         </div>

//                                         <div>
//                                             <div className="text-3xl font-bold text-indigo-600">
//                                                 {result.days}
//                                             </div>
//                                             <div className="text-sm text-gray-600">Days</div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                     <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
//                                         <div className="text-2xl font-bold text-gray-900">
//                                             {result.totalDays.toLocaleString()}
//                                         </div>
//                                         <div className="text-sm text-gray-600">Total Days</div>
//                                     </div>

//                                     <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
//                                         <div className="text-2xl font-bold text-gray-900">
//                                             {result.totalWeeks.toLocaleString()}
//                                         </div>
//                                         <div className="text-sm text-gray-600">Total Weeks</div>
//                                     </div>

//                                     <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
//                                         <div className="text-2xl font-bold text-gray-900">
//                                             {result.totalMonths.toLocaleString()}
//                                         </div>
//                                         <div className="text-sm text-gray-600">Total Months</div>
//                                     </div>

//                                     <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
//                                         <div className="text-2xl font-bold text-gray-900">
//                                             {result.totalHours.toLocaleString()}
//                                         </div>
//                                         <div className="text-sm text-gray-600">Total Hours</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="space-y-6">
//                     <AdSpace size="square" />

//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                             How to Use
//                         </h3>
//                         <div className="space-y-3 text-sm text-gray-600">
//                             <p>1. Enter your birth date</p>
//                             <p>
//                                 2. Select the date you want to calculate your age on (default is
//                                 today)
//                             </p>
//                             <p>3. Your exact age will be calculated automatically</p>
//                             <p>
//                                 4. View your age in different units - years, months, days, weeks,
//                                 and hours
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AgeCalculator;





import React, { useState, useEffect } from "react";
import { Box } from "@mui/material"; // MUI used safely
import { Calendar, Clock } from "lucide-react";
import AdSpace from "../../components/AdSpace";

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState("");
    const [targetDate, setTargetDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [result, setResult] = useState(null);

    const calculateAge = () => {
        if (!birthDate) return;

        const birth = new Date(birthDate);
        const target = new Date(targetDate);

        if (birth > target) return;

        let years = target.getFullYear() - birth.getFullYear();
        let months = target.getMonth() - birth.getMonth();
        let days = target.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const totalDays = Math.floor(
            (target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
        );
        const totalMonths = years * 12 + months;
        const totalWeeks = Math.floor(totalDays / 7);
        const totalHours = totalDays * 24;
        const totalMinutes = totalHours * 60;

        setResult({
            years,
            months,
            days,
            totalDays,
            totalMonths,
            totalWeeks,
            totalHours,
            totalMinutes,
        });
    };

    useEffect(() => {
        calculateAge();
    }, [birthDate, targetDate]);

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Calendar className="h-8 w-8 inline mr-3 text-blue-600" />
                    Age Calculator
                </h1>
                <p className="text-xl text-gray-600">
                    Calculate your exact age in years, months, and days
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Birth Date
                                </label>
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Calculate Age On
                                </label>
                                <input
                                    type="date"
                                    value={targetDate}
                                    onChange={(e) => setTargetDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {result && (
                            <div className="mt-8 space-y-6">
                                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                                        Your Age
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
                                            {result.totalMonths.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Total Months</div>
                                    </div>

                                    <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-gray-900">
                                            {result.totalHours.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Total Hours</div>
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
                            How to Use
                        </h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p>1. Enter your birth date</p>
                            <p>
                                2. Select the date you want to calculate your age on (default is
                                today)
                            </p>
                            <p>3. Your exact age will be calculated automatically</p>
                            <p>
                                4. View your age in different units - years, months, days, weeks,
                                and hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default AgeCalculator;
