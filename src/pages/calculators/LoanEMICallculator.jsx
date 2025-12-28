import React, { useState, useEffect } from "react";
import { Box } from "@mui/material"; // MUI used safely (no UI change)
import { DollarSign, Calculator, TrendingUp } from "lucide-react";
import AdSpace from "../../components/AdSpace";

const LoanEMICalculator = () => {
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("10");
  const [tenure, setTenure] = useState("12");
  const [tenureType, setTenureType] = useState("months");
  const [result, setResult] = useState(null);

  const calculateEMI = () => {
    if (!principal || !rate || !tenure) return;

    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12; // Monthly interest rate
    const n =
      tenureType === "years"
        ? parseFloat(tenure) * 12
        : parseFloat(tenure); // Total months

    if (r === 0) {
      const emi = P / n;
      setResult({
        emi,
        totalAmount: P,
        totalInterest: 0
      });
      return;
    }

    const emi =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    setResult({
      emi: parseFloat(emi.toFixed(2)),
      totalAmount: parseFloat(totalAmount.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2))
    });
  };

  useEffect(() => {
    calculateEMI();
  }, [principal, rate, tenure, tenureType]);

  return (
    <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          <DollarSign className="h-8 w-8 inline mr-3 text-green-600" />
          Loan EMI Calculator
        </h1>
        <p className="text-xl text-gray-600">
          Calculate your Equated Monthly Installment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount ($)
                </label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="100000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Tenure
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="12"
                  />
                  <select
                    value={tenureType}
                    onChange={(e) => setTenureType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>
            </div>

            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-green-600" />
                  EMI Calculation Result
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${result.emi.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Monthly EMI
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      ${result.totalAmount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Total Amount
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      ${result.totalInterest.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Total Interest
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              EMI Formula
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="font-medium">
                EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
              </p>
              <p><strong>P:</strong> Principal loan amount</p>
              <p><strong>R:</strong> Monthly interest rate</p>
              <p><strong>N:</strong> Number of monthly installments</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default LoanEMICalculator;
