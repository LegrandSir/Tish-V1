export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-rose-900">
      
      <div className="border-2 border-rose-400 bg-white/60 px-4 py-2 flex items-center gap-2 mb-12 rounded-full shadow-sm">
        <span className="text-rose-500 text-xs font-bold">LOVE:</span>
        <span className="text-rose-500 text-sm">♡ ♡ ♡</span>
      </div>

      <div className="bg-white text-rose-800 p-4 border-4 border-rose-200 relative mb-8 w-64 text-center rounded-xl shadow-md">
        <p className="text-[10px] leading-relaxed font-bold">Ready for a little romance?</p>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-rose-200"></div>
      </div>

      {/* The Image Tag You Requested */}
      <div className="w-48 h-48 bg-white border-4 border-rose-300 flex items-center justify-center mb-12 relative rounded-2xl shadow-[4px_4px_0_#f43f5e] overflow-hidden">
         <img 
           src="/couple-pic.jpeg" 
           alt="Us" 
           className="w-full h-full object-cover" 
         />
      </div>

      <button 
        onClick={onStart}
        className="bg-rose-500 text-white px-6 py-4 text-sm border-b-8 border-r-8 border-rose-700 rounded-xl active:border-0 active:translate-y-2 active:translate-x-2 transition-all font-bold tracking-widest"
      >
        INSERT LOVE TO START
      </button>
      
      <p className="mt-8 text-[8px] text-rose-400 font-bold">MADE WITH ❤️ FOR TISH</p>
    </div>
  );
}