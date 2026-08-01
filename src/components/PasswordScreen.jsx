import { useState } from 'react';

export default function PasswordScreen({ onUnlock }) {
  const [input, setInput] = useState('');
  const passcode = "0731"; 

  const handlePress = (num) => {
    if (input.length < 4) {
      const newInput = input + num;
      setInput(newInput);
      if (newInput === passcode) {
        setTimeout(onUnlock, 400); 
      }
    }
  };

  const keys = [
    { num: '1', letters: 'ABC' }, { num: '2', letters: 'DEF' }, { num: '3', letters: 'GHI' },
    { num: '4', letters: 'JKL' }, { num: '5', letters: 'MNO' }, { num: '6', letters: 'PQR' },
    { num: '7', letters: 'STU' }, { num: '8', letters: 'VWX' }, { num: '9', letters: 'YZ' },
    { num: '*', letters: 'LOVE' }, { num: '0', letters: 'HEART' }, { num: '#', letters: 'XOXO' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-100 flex flex-col items-center justify-center p-4 text-rose-900">
      
      {/* Title Box */}
      <div className="border-4 border-rose-300 bg-white/80 p-6 mb-8 text-center shadow-[4px_4px_0_#f43f5e] rounded-2xl backdrop-blur-sm">
        <h2 className="text-rose-600 text-xl mb-2 font-bold tracking-widest">INSERT CODE</h2>
        <p className="text-[8px] text-rose-400 font-bold">ENTER YOUR 4-DIGIT PIN</p>
      </div>

      {/* Input Indicators */}
      <div className="flex gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-12 h-12 border-4 border-rose-200 bg-white rounded-xl flex items-center justify-center text-rose-500 text-2xl shadow-inner">
            {input[i] ? '♥' : ''}
          </div>
        ))}
      </div>

      {/* Keypad Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8 max-w-sm w-full">
        {keys.map((key) => (
          <button
            key={key.num}
            onClick={() => handlePress(key.num)}
            className="border-2 border-rose-300 bg-white/80 p-4 rounded-2xl flex flex-col items-center justify-center hover:bg-rose-100 text-rose-700 transition-colors active:scale-90 shadow-[2px_2px_0_#f43f5e]"
          >
            <span className="text-xl mb-1 font-bold">{key.num}</span>
            <span className="text-[6px] text-rose-400 font-bold">{key.letters}</span>
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-4 w-full max-w-sm mb-12">
        <button 
          onClick={() => setInput('')} 
          className="flex-1 border-2 border-rose-300 bg-white py-4 rounded-xl text-[10px] font-bold text-rose-500 hover:bg-rose-50 active:scale-95 transition-transform shadow-sm"
        >
          [X] CLR
        </button>
        <button 
          className="flex-1 border-2 border-rose-500 bg-rose-500 py-4 rounded-xl text-[10px] font-bold text-white shadow-[2px_2px_0_#9f1239] active:scale-95 transition-transform"
        >
          ENT -&gt;
        </button>
      </div>

      <div className="border-2 border-rose-200 bg-white/50 px-4 py-2 text-[8px] text-rose-500 font-bold rounded-full shadow-sm">
        🔒 HINT: My birthday
      </div>
    </div>
  );
}