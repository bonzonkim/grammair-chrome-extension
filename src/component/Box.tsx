'use client';
import React, { useState } from "react";
import axios, { isAxiosError } from "axios";
import type { SubmissionReqeuest, ApiResponseType } from "../types/type";
import TextBox from "./TextBox";
import ResponseBox from "./ResponseBox";

import SkeletonResponseBox from "./SkeletonResponseBox";

interface BoxProps {
  apiBaseUrl: string;
}

import CorrectionDetail from "./CorrectionDetail";
import { toast } from "sonner";

const Box: React.FC<BoxProps> = ({ apiBaseUrl }) => {
  const [selectedModel, _] = useState('flashLite');
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // 'en' for English
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<ApiResponseType | null>(null);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = async (text: string) => {
    setIsLoading(true);
    setApiResponse(null);

    const data: SubmissionReqeuest = {
      text,
      model: selectedModel,
      reasonLanguage: selectedLanguage, // Add selected language to the request
    };

    try {
      const response = await axios.post<ApiResponseType>(`${apiBaseUrl}/api/grammair`, data);
      setApiResponse(response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response && error.response.status === 429) {
          toast.error("You've hit the request limit. Please try 1 minute later.")
        } else {
          console.error("API Error: ", error);
          setApiResponse({
            corrected_text: "Error: Could not get a response from the server.",
            wrong_count: 0,
            errors: []
          });
        }
      } else {
        console.error("An unexpected Error occurred: ", error)
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-600 p-5 border border-gray-300 rounded-md w-full max-w-4xl min-h-[500px]">
      <div className="flex justify-between items-center pb-3">
        <h1 className="text-white">Correct your Grammar with Grammair!</h1>
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-300">
            Explanation Language:
          </label>
          {/* Language Selector */}
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="bg-gray-700 text-white border border-gray-500 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
            title="Explanation in selected language"
          >
            <option value="en">English</option>
            <option value="ko">한국어</option>
            <option value="jp">日本語</option>
            <option value="zh">中國語</option>
            <option value="fr">français</option>
            <option value="es">español</option>
            <option value="ru">русский язык</option>
          </select>
        </div>
      </div>
      <TextBox onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && <SkeletonResponseBox />}
      {!isLoading && apiResponse && (
        <>
          <ResponseBox apiResponse={apiResponse} />
          <CorrectionDetail details={apiResponse.errors} />
        </>
      )}
    </div>
  );
};

export default Box;
