import React from 'react';

const SkeletonResponseBox: React.FC = () => {
  return (
    <div className="mt-4 w-full bg-gray-200 border border-gray-300 rounded-md p-4">
      <div className="animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-8 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonResponseBox;
