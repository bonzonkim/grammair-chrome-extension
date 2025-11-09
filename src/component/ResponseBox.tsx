'use client';
import React, { useState } from 'react';
import type { ApiResponseType } from '../types/type';

interface ResponseBoxProps {
  apiResponse: ApiResponseType;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ apiResponse }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiResponse.corrected_text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="mt-4 w-full bg-gray-200 border border-gray-300 rounded-md p-4 text-black">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Result</h2>
          <span className="text-sm text-gray-600 bg-gray-300 px-2 py-1 rounded-md">
            Wrong words: {apiResponse.wrong_count}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-green-500"
          disabled={isCopied}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p className="whitespace-pre-wrap">{apiResponse.corrected_text}</p>
    </div>
  );
};

export default ResponseBox;
