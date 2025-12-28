// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Calculator, RefreshCw, Home } from 'lucide-react';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const location = useLocation();

//     // ✅ Removed TypeScript annotation (: string)
//     const isActive = (path) => {
//         return location.pathname === path
//             ? 'text-blue-600 bg-blue-50'
//             : 'text-gray-700 hover:text-blue-600';
//     };

//     return (
//         <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center space-x-2">
//                         <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
//                             <Calculator className="h-6 w-6 text-white" />
//                         </div>
//                         <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                             ToolsyHub
//                         </span>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center space-x-8">
//                         <Link
//                             to="/"
//                             className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')}`}
//                         >
//                             <Home className="h-4 w-4 inline mr-2" />
//                             Home
//                         </Link>

//                         <div className="relative group">
//                             <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
//                                 <Calculator className="h-4 w-4 mr-2" />
//                                 Calculators
//                             </button>
//                             <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                                 <Link to="/BMICalculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">BMI Calculator</Link>
//                                 <Link to="AgeCalculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Age Calculator</Link>
//                                 <Link to="/calculators/loan-emi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Loan EMI</Link>
//                                 <Link to="/calculators/percentage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Percentage</Link>
//                                 <Link to="/calculators/date-difference" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Date Difference</Link>
//                                 <Link to="/calculators/body-fat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Body Fat</Link>
//                                 <Link to="/calculators/calorie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Calorie Calculator</Link>
//                             </div>
//                         </div>

//                         <div className="relative group">
//                             <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
//                                 <RefreshCw className="h-4 w-4 mr-2" />
//                                 Converters
//                             </button>
//                             <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                                 <Link to="/converters/pdf-to-word" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">PDF to Word</Link>
//                                 <Link to="/converters/word-to-pdf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Word to PDF</Link>
//                                 <Link to="/converters/image-to-pdf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Image to PDF</Link>
//                                 <Link to="/converters/pdf-compressor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">PDF Compressor</Link>
//                                 <Link to="/converters/image-converter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Image Converter</Link>
//                                 <Link to="/converters/units-converter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Units Converter</Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="text-gray-700 hover:text-blue-600 focus:outline-none"
//                         >
//                             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {isMenuOpen && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//                             <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">
//                                 Home
//                             </Link>

//                             <div className="px-3 py-2 text-base font-medium text-gray-900">Calculators</div>
//                             <Link to="/BMICalculator" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">BMI Calculator</Link>
//                             <Link to="/AgeCalculator" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Age Calculator</Link>
//                             <Link to="/calculators/loan-emi" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Loan EMI</Link>
//                             <Link to="/calculators/percentage" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Percentage</Link>
//                             <Link to="/calculators/date-difference" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Date Difference</Link>
//                             <Link to="/calculators/body-fat" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Body Fat</Link>
//                             <Link to="/calculators/calorie" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Calorie Calculator</Link>

//                             <div className="px-3 py-2 text-base font-medium text-gray-900">Converters</div>
//                             <Link to="/converters/pdf-to-word" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">PDF to Word</Link>
//                             <Link to="/converters/word-to-pdf" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Word to PDF</Link>
//                             <Link to="/converters/image-to-pdf" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Image to PDF</Link>
//                             <Link to="/converters/pdf-compressor" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">PDF Compressor</Link>
//                             <Link to="/converters/image-converter" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Image Converter</Link>
//                             <Link to="/converters/units-converter" className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600">Units Converter</Link>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;






import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Button,
    Menu,
    MenuItem,
    Drawer,
    Typography,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Calculator, RefreshCw, Home } from "lucide-react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [calcAnchor, setCalcAnchor] = useState(null);
    const [convAnchor, setConvAnchor] = useState(null);
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path
            ? { color: "#2563eb", backgroundColor: "#eff6ff" }
            : { color: "#374151" };

    return (
        <>
            <AppBar position="fixed" sx={{ background: "#fff", boxShadow: 3 }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            sx={{
                                background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                                p: 1,
                                borderRadius: 1,
                            }}
                        >
                            <Calculator size={22} color="#fff" />
                        </Box>
                        <Typography
                            fontWeight={700}
                            sx={{
                                background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            ToolsyHub
                        </Typography>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        <Button
                            component={Link}
                            to="/"
                            startIcon={<Home size={16} />}
                            sx={isActive("/")}
                        >
                            Home
                        </Button>

                        {/* Calculators */}
                        <Button
                            startIcon={<Calculator size={16} />}
                            onMouseEnter={(e) => setCalcAnchor(e.currentTarget)}
                            sx={{ color: "#374151" }}
                        >
                            Calculators
                        </Button>
                        <Menu
                            anchorEl={calcAnchor}
                            open={Boolean(calcAnchor)}
                            onClose={() => setCalcAnchor(null)}
                            MenuListProps={{ onMouseLeave: () => setCalcAnchor(null) }}
                        >
                            <MenuItem component={Link} to="/ToolsyHub/BMICalculator">BMI Calculator</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/AgeCalculator">Age Calculator</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/loan-emi">Loan EMI</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/percentage">Percentage</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/date-difference">Date Difference</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/body-fat">Body Fat</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/calorie">Calorie Calculator</MenuItem>
                        </Menu>

                        {/* Converters */}
                        <Button
                            startIcon={<RefreshCw size={16} />}
                            onMouseEnter={(e) => setConvAnchor(e.currentTarget)}
                            sx={{ color: "#374151" }}
                        >
                            Converters
                        </Button>
                        <Menu
                            anchorEl={convAnchor}
                            open={Boolean(convAnchor)}
                            onClose={() => setConvAnchor(null)}
                            MenuListProps={{ onMouseLeave: () => setConvAnchor(null) }}
                        >
                            <MenuItem component={Link} to="/ToolsyHub/pdf-to-word">PDF to Word</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/word-to-pdf">Word to PDF</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/image-to-pdf">Image to PDF</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/pdf-compressor">PDF Compressor</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/image-converter">Image Converter</MenuItem>
                            <MenuItem component={Link} to="/ToolsyHub/units-converter">Units Converter</MenuItem>
                        </Menu>
                    </Box>

                    {/* Mobile Toggle */}
                    <IconButton
                        sx={{ display: { md: "none" } }}
                        onClick={() => setMobileOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            >
                <Box sx={{ width: 260, p: 2 }}>
                    <IconButton onClick={() => setMobileOpen(false)}>
                        <CloseIcon />
                    </IconButton>

                    <Button fullWidth component={Link} to="/" sx={{ justifyContent: "flex-start" }}>
                        Home
                    </Button>

                    <Typography sx={{ mt: 2, fontWeight: 600 }}>Calculators</Typography>
                    <Button fullWidth component={Link} to="/BMICalculator">BMI Calculator</Button>
                    <Button fullWidth component={Link} to="AgeCalculator">Age Calculator</Button>
                    <Button fullWidth component={Link} to="/calculators/loan-emi">Loan EMI</Button>
                    <Button fullWidth component={Link} to="/calculators/percentage">Percentage</Button>
                    <Button fullWidth component={Link} to="/calculators/date-difference">Date Difference</Button>
                    <Button fullWidth component={Link} to="/calculators/body-fat">Body Fat</Button>
                    <Button fullWidth component={Link} to="/calculators/calorie">Calorie Calculator</Button>

                    <Typography sx={{ mt: 2, fontWeight: 600 }}>Converters</Typography>
                    <Button fullWidth component={Link} to="/converters/pdf-to-word">PDF to Word</Button>
                    <Button fullWidth component={Link} to="/converters/word-to-pdf">Word to PDF</Button>
                    <Button fullWidth component={Link} to="/converters/image-to-pdf">Image to PDF</Button>
                    <Button fullWidth component={Link} to="/converters/pdf-compressor">PDF Compressor</Button>
                    <Button fullWidth component={Link} to="/converters/image-converter">Image Converter</Button>
                    <Button fullWidth component={Link} to="/converters/units-converter">Units Converter</Button>
                </Box>
            </Drawer>

            {/* Spacer */}
            <Toolbar />
        </>
    );
};

export default Navbar;
