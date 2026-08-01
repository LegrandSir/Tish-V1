import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Updated to .mp3
  const [currentTrack, setCurrentTrack] = useState({ title: "BEST PART - DANIEL CAESAR", src: "/best-part.mp3" });
  const audioRef = useRef(null);

  // Automatically play when the track changes if it's supposed to be playing
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (title, src) => {
    setCurrentTrack({ title, src });
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl mx-auto p-2 md:p-4 text-rose-900">
      
      {/* Hidden Audio Element - Now looking for .mp3 */}
      <audio ref={audioRef} src={currentTrack.src} loop />

      <motion.div 
        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="flex-1 border-4 border-rose-300 bg-white/80 p-4 shadow-[6px_6px_0_#f43f5e] w-full rounded-xl backdrop-blur-sm"
      >
        <div className="flex justify-between items-center mb-4 border-b-2 border-rose-200 pb-2">
          <span className="text-[10px] md:text-xs text-rose-500 font-bold">♡ Just coz i can, odede wewe</span>
        </div>

        <h2 className="text-rose-700 text-xs md:text-sm mb-4 leading-loose font-bold">Doba moto ❤️</h2>

        <div className="w-full aspect-video bg-rose-50 border-4 border-rose-200 rounded-lg relative overflow-hidden mb-4 shadow-inner">
          <video 
            src="/your-promise-video.mp4" 
            controls 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
          <div className="flex gap-4">
            <button className="border-2 border-rose-400 bg-rose-100 text-rose-600 w-10 h-10 flex items-center justify-center text-[10px] hover:bg-rose-200 active:scale-90 transition-transform rounded-full">|&lt;</button>
            <button 
              onClick={togglePlay}
              className="border-2 border-rose-500 bg-rose-500 text-white w-12 h-12 flex items-center justify-center text-xs shadow-[2px_2px_0_#9f1239] active:scale-90 transition-transform rounded-full"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="border-2 border-rose-400 bg-rose-100 text-rose-600 w-10 h-10 flex items-center justify-center text-[10px] hover:bg-rose-200 active:scale-90 transition-transform rounded-full">&gt;|</button>
          </div>
          
          <div className="w-full md:w-auto flex items-center gap-4 bg-rose-100 border-2 border-rose-200 p-2 rounded-full">
            <span className={`text-[10px] ${isPlaying ? 'animate-bounce' : ''}`}>🔊</span>
            <div className="w-full md:w-24 h-2 bg-rose-200 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-rose-500"></div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-72 flex flex-col gap-6"
      >
        <div className="border-4 border-rose-300 bg-white/80 p-4 shadow-[4px_4px_0_#f43f5e] rounded-xl">
          <div className="border-b-2 border-rose-200 pb-2 mb-4">
            <span className="text-[10px] text-rose-500 font-bold">♡ Doba moto</span>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => changeTrack("BEST PART - DANIEL CAESAR", "/best-part.mp3")}
              className={`p-3 text-[8px] flex justify-between items-center text-left transition-colors border rounded-lg ${currentTrack.title.includes("BEST PART") ? 'bg-rose-500 border-rose-600 text-white shadow-md' : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'}`}
            >
              <span>{currentTrack.title.includes("BEST PART") && isPlaying ? '▶ ' : ''}BEST PART - DANIEL CAESAR</span>
            </button>
            
            <button 
              onClick={() => changeTrack("PERFECT - ED SHEERAN", "/perfect.mp3")}
              className={`p-3 text-[8px] flex justify-between items-center text-left transition-colors border rounded-lg ${currentTrack.title.includes("PERFECT") ? 'bg-rose-500 border-rose-600 text-white shadow-md' : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'}`}
            >
              <span>{currentTrack.title.includes("PERFECT") && isPlaying ? '▶ ' : ''}PERFECT - ED SHEERAN</span>
            </button>

            <button 
              onClick={() => changeTrack("CHAI YA SAA KUMI - YWAYA TAJIRI", "/chai.mp3")}
              className={`p-3 text-[8px] flex justify-between items-center text-left transition-colors border rounded-lg ${currentTrack.title.includes("CHAI") ? 'bg-rose-500 border-rose-600 text-white shadow-md' : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'}`}
            >
              <span>{currentTrack.title.includes("CHAI") && isPlaying ? '▶ ' : ''}CHAI YA SAA KUMI - YWAYA TAJIRI</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}