import React from 'react';
export default function Wrapper({ children, className }) {
  return (
    <div
      className={`w-full h-screen bg-gray-800 flex justify-center items-center`}
    >
      <div
        className={`bg-white h-full w-96 p-2 rounded m-auto overflow-x-hidden scrollbar-hide ${className} `}
      >
        {children}
      </div>
    </div>
  );
}
