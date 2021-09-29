import React from 'react';
export default function Wrapper({ children }) {
  return (
    <div className='w-full h-screen bg-gray-800 flex justify-center items-center'>
      <div className='bg-white h-5/6 w-96 p-2 rounded m-auto overflow-auto scrollbar-hide '>
        {children}
      </div>
    </div>
  );
}
