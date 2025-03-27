

import React from 'react';

const Card = ({ title, value, children }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-base md:text-lg font-semibold text-gray-800">{title}</h2>
      {value && (
        <p className="text-xl md:text-2xl font-bold mt-2 text-gray-900">
          {value}
        </p>
      )}
      {children && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;



