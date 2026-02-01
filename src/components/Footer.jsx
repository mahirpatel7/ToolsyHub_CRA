// import React from 'react';
// import { Calculator, Mail, Phone, MapPin } from 'lucide-react';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                     {/* Brand */}
//                     <div>
//                         <div className="flex items-center space-x-2 mb-4">
//                             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
//                                 <Calculator className="h-6 w-6 text-white" />
//                             </div>
//                             <span className="text-xl font-bold">ToolHub</span>
//                         </div>
//                         <p className="text-gray-400 mb-4">
//                             Your one-stop destination for all essential calculators and converters.
//                         </p>
//                         <div className="text-sm text-gray-400">
//                             © 2025 ToolsyHub. All rights reserved.
//                         </div>
//                     </div>

//                     {/* Calculators */}
//                     <div>
//                         <h3 className="font-semibold mb-4">Calculators</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <a href="BMICalculator" className="text-gray-400 hover:text-white transition-colors">
//                                     BMI Calculator
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="AgeCalculator" className="text-gray-400 hover:text-white transition-colors">
//                                     Age Calculator
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="/calculators/loan-emi" className="text-gray-400 hover:text-white transition-colors">
//                                     Loan EMI
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="/calculators/percentage" className="text-gray-400 hover:text-white transition-colors">
//                                     Percentage
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="/calculators/calorie" className="text-gray-400 hover:text-white transition-colors">
//                                     Calorie Calculator
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Converters */}
//                     <div>
//                         <h3 className="font-semibold mb-4">Converters</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <a href="/converters/pdf-to-word" className="text-gray-400 hover:text-white transition-colors">
//                                     PDF to Word
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="/converters/word-to-pdf" className="text-gray-400 hover:text-white transition-colors">
//                                     Word to PDF
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="/converters/image-to-pdf" className="text-gray-400 hover:text-white transition-colors">
//                                     Image to PDF
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="/converters/pdf-compressor" className="text-gray-400 hover:text-white transition-colors">
//                                     PDF Compressor
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="/converters/units-converter" className="text-gray-400 hover:text-white transition-colors">
//                                     Units Converter
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact */}
//                     <div>
//                         <h3 className="font-semibold mb-4">Contact</h3>
//                         <div className="space-y-2">
//                             <div className="flex items-center space-x-2">
//                                 <Mail className="h-4 w-4 text-gray-400" />
//                                 <span className="text-gray-400">info@toolsyhub.com</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Phone className="h-4 w-4 text-gray-400" />
//                                 <span className="text-gray-400">+91 9876543210</span>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <MapPin className="h-4 w-4 text-gray-400" />
//                                 <span className="text-gray-400">Ahmedabad, Gujarat, India</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;







import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Calculator, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <Box component="footer" className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* MAIN FOOTER GRID (UNCHANGED) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                                <Calculator className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">ToolHub</span>
                        </div>

                        <p className="text-gray-400 mb-4">
                            Your one-stop destination for all essential calculators and converters.
                        </p>

                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()} ToolsyHub. All rights reserved.
                        </div>
                    </div>

                    {/* Calculators */}
                    <div>
                        <h3 className="font-semibold mb-4">Calculators</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/ToolsyHub/BMICalculator" className="text-gray-400 hover:text-white transition-colors">
                                    BMI Calculator
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/AgeCalculator" className="text-gray-400 hover:text-white transition-colors">
                                    Age Calculator
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/loan-emi" className="text-gray-400 hover:text-white transition-colors">
                                    Loan EMI
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/percentage" className="text-gray-400 hover:text-white transition-colors">
                                    Percentage
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/calorie" className="text-gray-400 hover:text-white transition-colors">
                                    Calorie Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Converters */}
                    <div>
                        <h3 className="font-semibold mb-4">Converters</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/ToolsyHub/pdf-to-word" className="text-gray-400 hover:text-white transition-colors">
                                    PDF to Word
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/word-to-pdf" className="text-gray-400 hover:text-white transition-colors">
                                    Word to PDF
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/image-to-pdf" className="text-gray-400 hover:text-white transition-colors">
                                    Image to PDF
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/pdf-compressor" className="text-gray-400 hover:text-white transition-colors">
                                    PDF Compressor
                                </Link>
                            </li>
                            <li>
                                <Link to="/ToolsyHub/units-converter" className="text-gray-400 hover:text-white transition-colors">
                                    Units Converter
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-400">info@toolsyhub.com</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-400">+91 9876543210</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-400">Ahmedabad, Gujarat, India</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* LEGAL LINKS SECTION (NEW — ADSENSE REQUIRED) */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <Link to="/ToolsyHub/privacy-policy" className="hover:text-white">
                            Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link to="/ToolsyHub/terms" className="hover:text-white">
                            Terms & Conditions
                        </Link>
                        <span>|</span>
                        <Link to="/ToolsyHub/disclaimer" className="hover:text-white">
                            Disclaimer
                        </Link>
                        <span>|</span>
                        <Link to="/ToolsyHub/about" className="hover:text-white">
                            About
                        </Link>
                    </div>
                </div>

            </div>
        </Box>
    );
};

export default Footer;
