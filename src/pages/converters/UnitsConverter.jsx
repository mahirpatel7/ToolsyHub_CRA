import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material'; // MUI used safely (no UI change)
import { Ruler, Calculator, ArrowRightLeft } from 'lucide-react';
import AdSpace from '../../components/AdSpace';

const UnitsConverter = () => {
    const [category, setCategory] = useState('length');
    const [fromUnit, setFromUnit] = useState('');
    const [toUnit, setToUnit] = useState('');
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    const units = {
        length: {
            meter: { name: 'Meter', factor: 1 },
            kilometer: { name: 'Kilometer', factor: 1000 },
            centimeter: { name: 'Centimeter', factor: 0.01 },
            millimeter: { name: 'Millimeter', factor: 0.001 },
            inch: { name: 'Inch', factor: 0.0254 },
            foot: { name: 'Foot', factor: 0.3048 },
            yard: { name: 'Yard', factor: 0.9144 },
            mile: { name: 'Mile', factor: 1609.344 }
        },
        weight: {
            kilogram: { name: 'Kilogram', factor: 1 },
            gram: { name: 'Gram', factor: 0.001 },
            pound: { name: 'Pound', factor: 0.453592 },
            ounce: { name: 'Ounce', factor: 0.0283495 },
            ton: { name: 'Ton', factor: 1000 },
            stone: { name: 'Stone', factor: 6.35029 }
        },
        temperature: {
            celsius: { name: 'Celsius', factor: 1 },
            fahrenheit: { name: 'Fahrenheit', factor: 1 },
            kelvin: { name: 'Kelvin', factor: 1 }
        },
        area: {
            square_meter: { name: 'Square Meter', factor: 1 },
            square_kilometer: { name: 'Square Kilometer', factor: 1000000 },
            square_centimeter: { name: 'Square Centimeter', factor: 0.0001 },
            square_inch: { name: 'Square Inch', factor: 0.00064516 },
            square_foot: { name: 'Square Foot', factor: 0.092903 },
            square_yard: { name: 'Square Yard', factor: 0.836127 },
            acre: { name: 'Acre', factor: 4046.86 },
            hectare: { name: 'Hectare', factor: 10000 }
        },
        volume: {
            liter: { name: 'Liter', factor: 1 },
            milliliter: { name: 'Milliliter', factor: 0.001 },
            gallon: { name: 'Gallon (US)', factor: 3.78541 },
            quart: { name: 'Quart (US)', factor: 0.946353 },
            pint: { name: 'Pint (US)', factor: 0.473176 },
            cup: { name: 'Cup (US)', factor: 0.236588 },
            fluid_ounce: { name: 'Fluid Ounce (US)', factor: 0.0295735 },
            cubic_meter: { name: 'Cubic Meter', factor: 1000 }
        },
        time: {
            second: { name: 'Second', factor: 1 },
            minute: { name: 'Minute', factor: 60 },
            hour: { name: 'Hour', factor: 3600 },
            day: { name: 'Day', factor: 86400 },
            week: { name: 'Week', factor: 604800 },
            month: { name: 'Month', factor: 2629746 },
            year: { name: 'Year', factor: 31556952 }
        }
    };

    const convertUnits = (value, from, to, category) => {
        if (category === 'temperature') {
            return convertTemperature(value, from, to);
        }

        const categoryUnits = units[category];
        const fromFactor = categoryUnits[from]?.factor || 1;
        const toFactor = categoryUnits[to]?.factor || 1;

        const baseValue = value * fromFactor;
        return baseValue / toFactor;
    };

    const convertTemperature = (value, from, to) => {
        let celsius = value;

        if (from === 'fahrenheit') {
            celsius = (value - 32) * 5 / 9;
        } else if (from === 'kelvin') {
            celsius = value - 273.15;
        }

        if (to === 'celsius') return celsius;
        if (to === 'fahrenheit') return celsius * 9 / 5 + 32;
        if (to === 'kelvin') return celsius + 273.15;

        return celsius;
    };

    const handleConvert = () => {
        if (!fromValue || !fromUnit || !toUnit) return;

        const value = parseFloat(fromValue);
        if (isNaN(value)) return;

        const result = convertUnits(value, fromUnit, toUnit, category);
        setToValue(result.toFixed(6).replace(/\.?0+$/, ''));
    };

    const swapUnits = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
        setFromValue(toValue);
        setToValue(fromValue);
    };

    useEffect(() => {
        const categoryUnits = units[category];
        const unitKeys = Object.keys(categoryUnits);
        setFromUnit(unitKeys[0]);
        setToUnit(unitKeys[1]);
        setFromValue('');
        setToValue('');
    }, [category]);

    useEffect(() => {
        handleConvert();
    }, [fromValue, fromUnit, toUnit, category]);

    return (
        <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    <Ruler className="h-8 w-8 inline mr-3 text-teal-600" />
                    Units Converter
                </h1>
                <p className="text-xl text-gray-600">
                    Convert between different units of measurement
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Category
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {Object.keys(units).map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setCategory(cat)}
                                        className={`p-3 rounded-lg font-medium transition-colors ${category === cat
                                                ? 'bg-teal-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    From
                                </label>
                                <select
                                    value={fromUnit}
                                    onChange={(e) => setFromUnit(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-3"
                                >
                                    {Object.entries(units[category]).map(([key, unit]) => (
                                        <option key={key} value={key}>
                                            {unit.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    value={fromValue}
                                    onChange={(e) => setFromValue(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Enter value"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    To
                                </label>
                                <select
                                    value={toUnit}
                                    onChange={(e) => setToUnit(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-3"
                                >
                                    {Object.entries(units[category]).map(([key, unit]) => (
                                        <option key={key} value={key}>
                                            {unit.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    value={toValue}
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    placeholder="Result"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                onClick={swapUnits}
                                className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                            >
                                <ArrowRightLeft className="h-4 w-4 mr-2" />
                                Swap Units
                            </button>
                        </div>

                        {fromValue && toValue && (
                            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                                <div className="text-center">
                                    <div className="text-lg font-semibold text-teal-900">
                                        {fromValue} {units[category][fromUnit].name} = {toValue} {units[category][toUnit].name}
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
                            <Calculator className="h-5 w-5 mr-2 text-teal-600" />
                            Quick Reference
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>• 1 meter = 100 centimeters</p>
                            <p>• 1 kilometer = 1000 meters</p>
                            <p>• 1 inch = 2.54 centimeters</p>
                            <p>• 1 foot = 12 inches</p>
                            <p>• 1 yard = 3 feet</p>
                            <p>• 1 mile = 1.609 kilometers</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Categories
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• <strong>Length:</strong> Meters, feet, inches, miles</li>
                            <li>• <strong>Weight:</strong> Kilograms, pounds, ounces</li>
                            <li>• <strong>Temperature:</strong> Celsius, Fahrenheit, Kelvin</li>
                            <li>• <strong>Area:</strong> Square meters, acres, hectares</li>
                            <li>• <strong>Volume:</strong> Liters, gallons, cups</li>
                            <li>• <strong>Time:</strong> Seconds, minutes, hours, days</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default UnitsConverter;
