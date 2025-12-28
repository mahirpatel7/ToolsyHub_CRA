// import React, { useState, useEffect } from 'react';
// import { Calculator, Info } from 'lucide-react';
// import AdSpace from '../../components/AdSpace';

// const BMICalculator = () => {
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const [unit, setUnit] = useState('metric');
//     const [result, setResult] = useState(null);
//     const [category, setCategory] = useState('');

//     const calculateBMI = () => {
//         if (!height || !weight) return;

//         let heightInMeters;
//         let weightInKg;

//         if (unit === 'metric') {
//             heightInMeters = parseFloat(height) / 100;
//             weightInKg = parseFloat(weight);
//         } else {
//             heightInMeters = parseFloat(height) * 0.0254;
//             weightInKg = parseFloat(weight) * 0.453592;
//         }

//         const bmi = weightInKg / (heightInMeters * heightInMeters);
//         setResult(parseFloat(bmi.toFixed(1)));

//         if (bmi < 18.5) setCategory('Underweight');
//         else if (bmi < 25) setCategory('Normal weight');
//         else if (bmi < 30) setCategory('Overweight');
//         else setCategory('Obese');
//     };

//     useEffect(() => {
//         calculateBMI();
//     }, [height, weight, unit]);

//     const getBMIColor = () => {
//         if (!result) return 'text-gray-500';
//         if (result < 18.5) return 'text-blue-600';
//         if (result < 25) return 'text-green-600';
//         if (result < 30) return 'text-yellow-600';
//         return 'text-red-600';
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="text-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-4">
//                     <Calculator className="h-8 w-8 inline mr-3 text-blue-600" />
//                     BMI Calculator
//                 </h1>
//                 <p className="text-xl text-gray-600">
//                     Calculate your Body Mass Index
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <div className="mb-6">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Unit System
//                             </label>
//                             <div className="flex space-x-4">
//                                 <button
//                                     onClick={() => setUnit('metric')}
//                                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${unit === 'metric'
//                                             ? 'bg-blue-600 text-white'
//                                             : 'bg-gray-200 text-gray-700'
//                                         }`}
//                                 >
//                                     Metric
//                                 </button>
//                                 <button
//                                     onClick={() => setUnit('imperial')}
//                                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${unit === 'imperial'
//                                             ? 'bg-blue-600 text-white'
//                                             : 'bg-gray-200 text-gray-700'
//                                         }`}
//                                 >
//                                     Imperial
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Height {unit === 'metric' ? '(cm)' : '(inches)'}
//                                 </label>
//                                 <input
//                                     type="number"
//                                     value={height}
//                                     onChange={(e) => setHeight(e.target.value)}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     placeholder={unit === 'metric' ? '170' : '67'}
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
//                                 </label>
//                                 <input
//                                     type="number"
//                                     value={weight}
//                                     onChange={(e) => setWeight(e.target.value)}
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     placeholder={unit === 'metric' ? '70' : '154'}
//                                 />
//                             </div>
//                         </div>

//                         {result && (
//                             <div className="mt-8 p-6 bg-gray-50 rounded-lg">
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                                     Your BMI Result
//                                 </h3>
//                                 <div className="text-center">
//                                     <div className={`text-4xl font-bold ${getBMIColor()}`}>
//                                         {result}
//                                     </div>
//                                     <div className={`text-lg font-medium mt-2 ${getBMIColor()}`}>
//                                         {category}
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="space-y-6">
//                     <AdSpace size="square" />

//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                             <Info className="h-5 w-5 mr-2 text-blue-600" />
//                             BMI Categories
//                         </h3>

//                         <div className="space-y-2">
//                             <div className="flex justify-between">
//                                 <span className="text-blue-600">Underweight</span>
//                                 <span className="text-gray-600">Below 18.5</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-green-600">Normal weight</span>
//                                 <span className="text-gray-600">18.5–24.9</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-yellow-600">Overweight</span>
//                                 <span className="text-gray-600">25–29.9</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-red-600">Obese</span>
//                                 <span className="text-gray-600">30 or greater</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BMICalculator;






import React, { useState, useEffect } from "react";
import { Box } from "@mui/material"; // MUI used safely (no UI change)
import { Calculator, Info } from "lucide-react";
import AdSpace from "../../components/AdSpace";

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [unit, setUnit] = useState("metric");
    const [result, setResult] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (!height || !weight) return;

        let heightInMeters;
        let weightInKg;

        if (unit === "metric") {
            heightInMeters = parseFloat(height) / 100;
            weightInKg = parseFloat(weight);
        } else {
            heightInMeters = parseFloat(height) * 0.0254;
            weightInKg = parseFloat(weight) * 0.453592;
        }

        const bmi = weightInKg / (heightInMeters * heightInMeters);
        setResult(parseFloat(bmi.toFixed(1)));

        if (bmi < 18.5) setCategory("Underweight");
        else if (bmi < 25) setCategory("Normal weight");
        else if (bmi < 30) setCategory("Overweight");
        else setCategory("Obese");
    };

    useEffect(() => {
        calculateBMI();
    }, [height, weight, unit]);

    const getBMIColor = () => {
        if (!result) return "text-gray-500";
        if (result < 18.5) return "text-blue-600";
        if (result < 25) return "text-green-600";
        if (result < 30) return "text-yellow-600";
        return "text-red-600";
    };

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Calculator className="h-8 w-8 inline mr-3 text-blue-600" />
                    BMI Calculator
                </h1>
                <p className="text-xl text-gray-600">
                    Calculate your Body Mass Index
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Unit System
                            </label>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => setUnit("metric")}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${unit === "metric"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    Metric
                                </button>
                                <button
                                    onClick={() => setUnit("imperial")}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${unit === "imperial"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    Imperial
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                        {result && (
                            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Your BMI Result
                                </h3>
                                <div className="text-center">
                                    <div className={`text-4xl font-bold ${getBMIColor()}`}>
                                        {result}
                                    </div>
                                    <div className={`text-lg font-medium mt-2 ${getBMIColor()}`}>
                                        {category}
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
                            BMI Categories
                        </h3>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-blue-600">Underweight</span>
                                <span className="text-gray-600">Below 18.5</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-green-600">Normal weight</span>
                                <span className="text-gray-600">18.5–24.9</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-yellow-600">Overweight</span>
                                <span className="text-gray-600">25–29.9</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-red-600">Obese</span>
                                <span className="text-gray-600">30 or greater</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default BMICalculator;
