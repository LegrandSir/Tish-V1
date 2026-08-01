import { motion } from 'framer-motion';

export default function GiftMenu({ setActiveTab }) {
  const gifts = [
    { 
      type: 'RARE', 
      title: 'SECRET LOVE LETTER', 
      desc: 'A HANDWRITTEN PIXEL NOTE JUST FOR YOU.',
      action: () => setActiveTab('letters')
    },
    { 
      type: 'COMMON', 
      title: 'CHIPTUNE MELODY', 
      desc: 'OUR PLAYLIST COMPOSED FOR US.',
      action: () => setActiveTab('player')
    },
    { 
      type: 'LEGENDARY', 
      title: 'PIXELATED PROMISE', 
      desc: 'MY PROMISE TO ALWAYS BE THERE FOR YOU, THROUGH EVERY LEVEL OF LIFE.',
      action: () => setActiveTab('letters') 
    }
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <motion.h2 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-xl md:text-2xl text-rose-800 font-bold mb-2 flex text-center items-center gap-4 mt-4 leading-loose drop-shadow-sm"
      >
        <span className="text-rose-500 animate-pulse">✧</span> CHOOSE YOUR GIFTS <span className="text-rose-500 animate-pulse">✧</span>
      </motion.h2>
      <p className="text-[8px] text-rose-500 font-bold mb-12 text-center">SELECT A MYSTERY BOX TO REVEAL A ROMANTIC SURPRISE</p>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-5xl">
        {gifts.map((gift, idx) => (
          <motion.div 
            key={idx} 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border-4 border-rose-300 bg-white/80 p-4 flex flex-col items-center w-full md:w-72 shadow-[4px_4px_0_#f43f5e] rounded-2xl backdrop-blur-sm"
          >
            <div className="bg-rose-200 text-rose-800 text-[8px] px-3 py-1 mb-4 font-bold rounded-md shadow-sm">
              {gift.type}
            </div>
            
            {/* Soft pink box behind the gift emoji */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
              className="w-32 h-32 bg-rose-50 flex items-center justify-center mb-6 border-4 border-rose-200 rounded-xl shadow-inner"
            >
              <span className="text-5xl drop-shadow-md">🎁</span>
            </motion.div>

            <h3 className="text-center text-sm font-bold leading-relaxed mb-4 min-h-[40px] flex items-center text-rose-600">
              {gift.title}
            </h3>
            <p className="text-[8px] text-center font-bold text-rose-400 leading-relaxed mb-6 h-12">
              {gift.desc}
            </p>

            <button 
              onClick={gift.action}
              className="w-full border-2 border-rose-400 bg-rose-50 text-rose-600 py-3 rounded-xl text-[10px] hover:bg-rose-500 hover:text-white transition-colors active:scale-95 font-bold shadow-sm"
            >
              OPEN BOX
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
