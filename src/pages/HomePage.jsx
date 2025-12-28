// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Calculator, RefreshCw, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';
// import AdSpace from '../components/AdSpace';

// const HomePage = () => {
//     const calculators = [
//         { name: 'BMI Calculator', path: 'BMICalculator', description: 'Calculate your Body Mass Index' },
//         { name: 'Age Calculator', path: 'AgeCalculator', description: 'Find your exact age in years, months, and days' },
//         { name: 'Loan EMI Calculator', path: '/calculators/loan-emi', description: 'Calculate your loan EMI amount' },
//         { name: 'Percentage Calculator', path: '/calculators/percentage', description: 'Calculate percentages easily' },
//         { name: 'Date Difference Calculator', path: '/calculators/date-difference', description: 'Find difference between two dates' },
//         { name: 'Body Fat Calculator', path: '/calculators/body-fat', description: 'Calculate your body fat percentage' },
//         { name: 'Calorie Calculator', path: '/calculators/calorie', description: 'Calculate your daily calorie needs' }
//     ];

//     const converters = [
//         { name: 'PDF to Word', path: '/converters/pdf-to-word', description: 'Convert PDF files to Word documents' },
//         { name: 'Word to PDF', path: '/converters/word-to-pdf', description: 'Convert Word documents to PDF' },
//         { name: 'Image to PDF', path: '/converters/image-to-pdf', description: 'Convert images to PDF format' },
//         { name: 'PDF Compressor', path: '/converters/pdf-compressor', description: 'Compress PDF files to reduce size' },
//         { name: 'Image Converter', path: '/converters/image-converter', description: 'Convert between JPG, PNG, and other formats' },
//         { name: 'Units Converter', path: '/converters/units-converter', description: 'Convert between different units' }
//     ];

//     return (
//         <div className="min-h-screen">
//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center">
//                         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                             Your Ultimate <span className="text-yellow-400">Tool Hub</span>
//                         </h1>
//                         <p className="text-xl md:text-2xl mb-8 text-blue-100">
//                             Powerful calculators and converters at your fingertips
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Link
//                                 to="/BMICalculator"
//                                 className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
//                             >
//                                 <Calculator className="h-5 w-5 mr-2" />
//                                 Try BMI Calculator
//                             </Link>
//                             <Link
//                                 to="/converters/pdf-to-word"
//                                 className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
//                             >
//                                 <RefreshCw className="h-5 w-5 mr-2" />
//                                 Convert PDF to Word
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="text-center">
//                             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <TrendingUp className="h-8 w-8 text-blue-600" />
//                             </div>
//                             <h3 className="text-2xl font-bold text-gray-900 mb-2">1M+</h3>
//                             <p className="text-gray-600">Calculations performed</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Users className="h-8 w-8 text-green-600" />
//                             </div>
//                             <h3 className="text-2xl font-bold text-gray-900 mb-2">500K+</h3>
//                             <p className="text-gray-600">Happy users</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Star className="h-8 w-8 text-yellow-600" />
//                             </div>
//                             <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h3>
//                             <p className="text-gray-600">User rating</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Ad Space */}
//             <section className="py-8 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <AdSpace size="banner" />
//                 </div>
//             </section>

//             {/* Calculators Section */}
//             <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                             <Calculator className="h-8 w-8 inline mr-3 text-blue-600" />
//                             Calculators
//                         </h2>
//                         <p className="text-xl text-gray-600">Accurate calculations for all your needs</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {calculators.map((calc, index) => (
//                             <Link
//                                 key={index}
//                                 to={calc.path}
//                                 className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
//                             >
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
//                                     {calc.name}
//                                 </h3>
//                                 <p className="text-gray-600 mb-4">{calc.description}</p>
//                                 <div className="flex items-center text-blue-600 font-medium">
//                                     Calculate Now
//                                     <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Converters Section */}
//             <section className="py-16 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                             <RefreshCw className="h-8 w-8 inline mr-3 text-purple-600" />
//                             Converters
//                         </h2>
//                         <p className="text-xl text-gray-600">Transform your files with ease</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {converters.map((converter, index) => (
//                             <Link
//                                 key={index}
//                                 to={converter.path}
//                                 className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
//                             >
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
//                                     {converter.name}
//                                 </h3>
//                                 <p className="text-gray-600 mb-4">{converter.description}</p>
//                                 <div className="flex items-center text-purple-600 font-medium">
//                                     Convert Now
//                                     <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Ad Space */}
//             <section className="py-8 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <AdSpace size="banner" />
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default HomePage;








import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material"; // MUI used safely
import {
    Calculator,
    RefreshCw,
    TrendingUp,
    Users,
    Star,
    ArrowRight
} from "lucide-react";
import AdSpace from "../components/AdSpace";

const HomePage = () => {
    const calculators = [
        { name: "BMI Calculator", path: "/ToolsyHub/BMICalculator", description: "Calculate your Body Mass Index" },
        { name: "Age Calculator", path: "/ToolsyHub/AgeCalculator", description: "Find your exact age in years, months, and days" },
        { name: "Loan EMI Calculator", path: "/ToolsyHub/loan-emi", description: "Calculate your loan EMI amount" },
        { name: "Percentage Calculator", path: "/ToolsyHub/percentage", description: "Calculate percentages easily" },
        { name: "Date Difference Calculator", path: "/ToolsyHub/date-difference", description: "Find difference between two dates" },
        { name: "Body Fat Calculator", path: "/ToolsyHub/body-fat", description: "Calculate your body fat percentage" },
        { name: "Calorie Calculator", path: "/ToolsyHub/calorie", description: "Calculate your daily calorie needs" }
    ];

    const converters = [
        { name: "PDF to Word", path: "/ToolsyHub/pdf-to-word", description: "Convert PDF files to Word documents" },
        { name: "Word to PDF", path: "/ToolsyHub/word-to-pdf", description: "Convert Word documents to PDF" },
        { name: "Image to PDF", path: "/ToolsyHub/image-to-pdf", description: "Convert images to PDF format" },
        { name: "PDF Compressor", path: "/ToolsyHub/pdf-compressor", description: "Compress PDF files to reduce size" },
        { name: "Image Converter", path: "/ToolsyHub/image-converter", description: "Convert between JPG, PNG, and other formats" },
        { name: "Units Converter", path: "/ToolsyHub/units-converter", description: "Convert between different units" }
    ];

    return (
        <Box className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Your Ultimate <span className="text-yellow-400">Tool Hub</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Powerful calculators and converters at your fingertips
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/ToolsyHub/BMICalculator"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                            >
                                <Calculator className="h-5 w-5 mr-2" />
                                Try BMI Calculator
                            </Link>
                            <Link
                                to="/ToolsyHub/pdf-to-word"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                            >
                                <RefreshCw className="h-5 w-5 mr-2" />
                                Convert PDF to Word
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">1M+</h3>
                            <p className="text-gray-600">Calculations performed</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">500K+</h3>
                            <p className="text-gray-600">Happy users</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h3>
                            <p className="text-gray-600">User rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ad Space */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AdSpace size="banner" />
                </div>
            </section>

            {/* Calculators */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            <Calculator className="h-8 w-8 inline mr-3 text-blue-600" />
                            Calculators
                        </h2>
                        <p className="text-xl text-gray-600">Accurate calculations for all your needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {calculators.map((calc, index) => (
                            <Link
                                key={index}
                                to={calc.path}
                                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                    {calc.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{calc.description}</p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    Calculate Now
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Converters */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            <RefreshCw className="h-8 w-8 inline mr-3 text-purple-600" />
                            Converters
                        </h2>
                        <p className="text-xl text-gray-600">Transform your files with ease</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {converters.map((converter, index) => (
                            <Link
                                key={index}
                                to={converter.path}
                                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                                    {converter.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{converter.description}</p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    Convert Now
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ad Space */}
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AdSpace size="banner" />
                </div>
            </section>
        </Box>
    );
};

export default HomePage;
