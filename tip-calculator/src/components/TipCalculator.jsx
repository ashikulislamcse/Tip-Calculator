import React, { useState } from "react";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  const calculateTotal = () => {
    if (!billAmount || !tipPercentage) {
      setError("Both fields are required!");
      return;
    }
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
      setError("Please enter valid numbers.");
      return;
    }
    setError(""); // Clear previous error
    const tipAmount = parseFloat(billAmount) * (parseFloat(tipPercentage) / 100);
    setTotal(parseFloat(billAmount) + tipAmount);
  };

  const clearFields = () => {
    setBillAmount("");
    setTipPercentage("");
    setTotal(0);
    setError("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center uppercase mb-4">Tip Calculator</h1>
        <p className="text-gray-600 mb-6">
          Enter the bill amount and tip percentage to calculate the total.
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="billAmount" className="block text-gray-700 font-bold mb-2">
            Bill Amount:
          </label>
          <input
            type="number"
            id="billAmount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="tipPercentage" className="block text-gray-700 font-bold mb-2">
            Tip Percentage:
          </label>
          <input
            type="number"
            id="tipPercentage"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={calculateTotal}
          >
            CALCULATE
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={clearFields}
          >
            CLEAR
          </button>
        </div>

        <div className="flex mt-6 gap-2">
          <span className="text-gray-700 font-bold text-2xl">Total:</span>
          <h1 className="text-red-600 text-2xl font-bold">${total.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
