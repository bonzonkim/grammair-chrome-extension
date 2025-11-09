import type { CorrectionDetail as CorrectionDetailType } from "..//types/type";
import React from "react";

interface CorrectionDetailProps {
  details: CorrectionDetailType[];
}

const CorrectionDetail: React.FC<CorrectionDetailProps> = ({ details }) => {
  if (!details || details.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 w-full bg-gray-100 border border-gray-300 rounded-md p-4 text-black">
      <h3 className="text-md font-semibold mb-3 text-gray-800">Correction Details</h3>
      <ul className="space-y-3">
        {details.map((detail, index) => (
          <li key={index} className="p-3 bg-white rounded-md border border-gray-200">
            <p className="text-red-500">{detail.original}</p>
            <p className="text-gray-600 text-sm mt-1">{detail.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CorrectionDetail;
