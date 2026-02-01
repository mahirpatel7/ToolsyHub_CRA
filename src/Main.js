import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';

// // Calculator Pages
import BMICalculator from './pages/calculators/BMICalculator';
import AgeCalculator from './pages/calculators/AgeCalculator';
import LoanEMICalculator from './pages/calculators/LoanEMICallculator';
import PercentageCalculator from './pages/calculators/PercentageCalculator';
import DateDifferenceCalculator from './pages/calculators/DateDifferenceCalculator';
import BodyFatCalculator from './pages/calculators/BodyFatCalculator';
import CalorieCalculator from './pages/calculators/CalorieCalculator';

// // Converter Pages
import PDFToWord from './pages/converters/PDFToWord';
import WordToPDF from './pages/converters/WordToPDF';
import ImageToPDF from './pages/converters/ImageToPDF';
import PDFCompressor from './pages/converters/PDFCompressor';
import ImageConverter from './pages/converters/ImageConverter';
import UnitsConverter from './pages/converters/UnitsConverter';

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";
import Disclaimer from "./pages/legal/Disclaimer";
import About from "./pages/legal/About";

function Main({ connectionString }) {
    console.log("Connection String:", connectionString);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <main className="pt-20">
                <Routes>
                    {/* DEFAULT PAGE UNDER /ToolsyHub */}
                    <Route index element={<HomePage />} />

                    {/* Calculator Routes */}
                    <Route path="BMICalculator" element={<BMICalculator connectionString={connectionString} />} />
                    <Route path="AgeCalculator" element={<AgeCalculator connectionString={connectionString} />} />
                    <Route path="loan-emi" element={<LoanEMICalculator connectionString={connectionString} />} />
                    <Route path="percentage" element={<PercentageCalculator connectionString={connectionString} />} />
                    <Route path="date-difference" element={<DateDifferenceCalculator connectionString={connectionString} />} />
                    <Route path="body-fat" element={<BodyFatCalculator connectionString={connectionString} />} />
                    <Route path="calorie" element={<CalorieCalculator connectionString={connectionString} />} />

                    {/* Converter Routes */}
                    <Route path="pdf-to-word" element={<PDFToWord connectionString={connectionString} />} />
                    <Route path="word-to-pdf" element={<WordToPDF connectionString={connectionString} />} />
                    <Route path="image-to-pdf" element={<ImageToPDF connectionString={connectionString} />} />
                    <Route path="pdf-compressor" element={<PDFCompressor connectionString={connectionString} />} />
                    <Route path="image-converter" element={<ImageConverter connectionString={connectionString} />} />
                    <Route path="units-converter" element={<UnitsConverter connectionString={connectionString} />} />

                    {/* Legal Pages */}
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="disclaimer" element={<Disclaimer />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </main>
        </div>
    );
}

export default Main;
