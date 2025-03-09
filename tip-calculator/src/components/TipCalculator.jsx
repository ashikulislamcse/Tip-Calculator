import React, { useState } from 'react';

function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const tipAmount = (billAmount * (tipPercentage / 100));
    setTotal(parseFloat(billAmount) + tipAmount);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Tip Calculator</h1>
        <p className="text-gray-600 mb-6">
          Enter the bill amount and tip percentage to calculate the total.
        </p>
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
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={calculateTotal}
        >
          CALCULATE
        </button>
        <div className="mt-6">
          <span className="text-gray-700 font-bold">Total:</span> ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;