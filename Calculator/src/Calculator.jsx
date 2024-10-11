import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setDisplay("0");
      return;
    }
    if (value === "DEL") {
      if (display.length === 1) {
        setDisplay("0");
      } else {
        setDisplay(display.slice(0, -1));
      }
      return;
    }
    if (value === "%") {
      setDisplay((parseFloat(display) / 100).toString());
      return;
    }
    if (value === "=") {
      try {
        setDisplay(eval(display).toString()); 
      } catch {
        setDisplay("Error");
      }
      return;
    }
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className='mt-36 border-4 border-black p-6 rounded-md max-w-md mx-auto bg-gray-800 shadow-2xl'>
      <div className=' rounded-xl h-32 border border-black mb-4 p-2 bg-white'>
        <input
          className=' rounded-xl h-28 shadow-black shadow-2xl text-black font-bold text-right p-4 w-full'
          type="text"
          value={display}
          disabled
        />
      </div>
      <div className='space-y-3'>
        <div className='space-x-3 flex justify-between'>
          <button className='border border-black rounded-full bg-black text-yellow-500 shadow-2xl p-4 w-20 h-20 flex justify-center items-center' onClick={() => handleClick('AC')}>AC</button>
          <button className='border border-black rounded-full bg-black text-green-500 shadow-2xl p-4 w-20 h-20 flex justify-center items-center' onClick={() => handleClick('DEL')}>DEL</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20 flex justify-center items-center' onClick={() => handleClick('/')}>/</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20 flex justify-center items-center' onClick={() => handleClick('*')}>*</button>
        </div>
        <div className='space-x-3 flex justify-between'>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('7')}>7</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('8')}>8</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('9')}>9</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('+')}>+</button>
        </div>

        <div className='space-x-3 flex justify-between'>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('4')}>4</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('5')}>5</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('6')}>6</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('-')}>-</button>
        </div>

        <div className='space-x-3 flex justify-between'>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('1')}>1</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('2')}>2</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('3')}>3</button>
          <button className='border border-black rounded-full bg-red-600 text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('=')}>=</button>
        </div>

        <div className='space-x-3 flex justify-between'>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('0')}>0</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('00')}>00</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('%')}>%</button>
          <button className='border border-black rounded-full bg-black text-white shadow-2xl p-4 w-20 h-20' onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
