import { motion } from 'framer-motion';

export default function LetterScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh] relative">
      
      {/* Animated Floating Hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#e63946] opacity-30 text-2xl z-0"
          initial={{ y: "100vh", x: Math.random() * 400 - 200 }}
          animate={{ y: "-20vh", x: Math.random() * 400 - 200 }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
        >
          ♡
        </motion.div>
      ))}

      <div className="flex gap-2 md:gap-4 mb-8 z-10 w-full justify-center flex-wrap">
        <div className="border border-[#e63946] px-3 py-1 flex items-center gap-2 text-[8px] bg-black/50">
          <span className="text-[#e63946]">🎵</span> BGM: ON
        </div>
        <div className="border border-[#e63946] bg-[#e63946] text-white px-3 py-1 flex items-center gap-2 text-[8px]">
          <span className="animate-pulse">✨</span>
        </div>
        <div className="border border-[#e63946] px-3 py-1 flex items-center gap-2 text-[8px] bg-black/50">
          <span className="text-[#e63946]">💌</span> SENT: YES
        </div>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="bg-[#f4e4bc] text-black p-6 md:p-10 max-w-2xl w-full shadow-[8px_8px_0_#7a0010] relative z-10 border-4 border-[#d4c49c]"
      >
        <div className="flex justify-between items-center border-b-4 border-pink-300 pb-4 mb-6">
          <span className="text-[#e63946] text-xs md:text-sm font-bold">♡ SECRET MESSAGE</span>
        
        </div>

        <div className="space-y-6 text-xs md:text-sm leading-8 md:leading-10 font-sans font-semibold text-gray-800">
          <p>Msupaaa❤️,</p>
          

          <p>
            Usicheke my efforts of being romantic buuuut You are my first thought, last thought and everything in between. My reason to want to be a better man. My motivation, source of strength, source of laughs, happiness, and you give me a sense of belonging. My peace. My home.
          </p>

          <p>
            How you make me feel, words aren’t even enough to show it, you are a one of one girl. I like everything about you 😭. From your morning tantrums to our goodnight texts that run for 2 hours into the night 😭❤️. 
          </p>

          <p>
            I like you very much and if I could I would spend my entire day with you, eternities even, live under your skin typeee. But for now all I can do is just have wishful thinking, for my day isn’t complete without u, and just think of the day that I will be there by your side. Because even though we aren't officially together as boyfriend and girlfriend yet, there’s no one else I’d rather be beside and spend my life with other than Ti ti 🌝❤️.
          </p>

          <p>
            I love you in more ways than words can actually say Ti Ti ❤️<br/>
            You have my whole heart.
          </p>

         

        </div>
      </motion.div>
    </div>
  );
}