import { useState } from 'react';
import PasswordScreen from './components/PasswordScreen';
import WelcomeScreen from './components/WelcomeScreen';
import GiftMenu from './components/GiftMenu';
import LetterScreen from './components/LetterScreen';
import MediaPlayer from './components/MediaPlayer';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState('welcome'); 

  if (!isUnlocked) {
    return <PasswordScreen onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-100 text-gray-800 overflow-hidden">
      {/* Warmer Background Gradient applied above */}
      
      <header className="border-b-2 border-rose-200 p-4 flex justify-between items-center bg-white/50 backdrop-blur-sm z-10 shadow-sm">
        <button 
          onClick={() => setActiveTab('welcome')}
          className="border-2 border-rose-300 bg-white px-3 py-2 text-[10px] text-rose-600 hover:bg-rose-500 hover:text-white transition-colors rounded-md font-bold"
        >
          &lt; HOME
        </button>
        
        <h1 className="text-sm md:text-xl text-rose-800 tracking-widest flex items-center gap-2 font-bold drop-shadow-sm">
          <span className="text-rose-500">♡</span> LOVE LETTER <span className="text-rose-500">♡</span>
        </h1>
        
        <button className="border-2 border-rose-300 bg-white px-3 py-2 text-[10px] text-rose-600 hover:bg-rose-50 hover:text-rose-800 transition-colors rounded-md">
          &gt;
        </button>
      </header>

      <main className="flex-1 flex flex-col relative overflow-y-auto p-4 md:p-8">
        {activeTab === 'welcome' && <WelcomeScreen onStart={() => setActiveTab('gifts')} />}
        {activeTab === 'gifts' && <GiftMenu setActiveTab={setActiveTab} />}
        {activeTab === 'letters' && <LetterScreen />}
        {activeTab === 'player' && <MediaPlayer />}
      </main>

      <nav className="border-t-2 border-rose-200 bg-white/80 backdrop-blur-md flex z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        {[
          { id: 'welcome', label: 'WELCOME', icon: '⌂' },
          { id: 'gifts', label: 'GIFTS', icon: '🎁' },
          { id: 'letters', label: 'LETTERS', icon: '✉' },
          { id: 'player', label: 'PLAYER', icon: '▷' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 flex flex-col items-center gap-2 text-[10px] transition-colors border-t-4 ${
              activeTab === tab.id 
                ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold' 
                : 'border-transparent text-gray-400 hover:text-rose-500 hover:bg-rose-50/50'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}