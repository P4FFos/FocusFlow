import React, { useState, useEffect, useRef } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import ModeSwitcher from './components/ModeSwitcher';
import SettingsModal from './components/SettingsModal';
import Header from './components/Header';

function App() {
  const [mode, setMode] = useState('pomodoro'); // pomodoro, short, long
  const [modes, setModes] = useState({
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  });
  const [timeLeft, setTimeLeft] = useState(modes.pomodoro);
  const [isActive, setIsActive] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // const timerRef = useRef(null); // Ref not needed with new logic

  useEffect(() => {
    setTimeLeft(modes[mode]);
    setIsActive(false);
  }, [mode, modes]);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]); // Removed timeLeft dependency

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(modes[mode]);
  };

  const handleSettings = () => {
    setIsSettingsOpen(true);
  };

  const updateModes = (newModes) => {
    setModes(newModes);
    // Also update current timeLeft if we are in that mode and not active?
    // For simplicity, the useEffect [mode, modes] will handle resetting the time
    // but it might reset a running timer. That's acceptable for now.
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ModeSwitcher currentMode={mode} setMode={setMode} />
        <Timer timeLeft={timeLeft} />
        <Controls
          isActive={isActive}
          setIsActive={setIsActive}
          onReset={handleReset}
          onSettings={handleSettings}
        />
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        modes={modes}
        updateModes={updateModes}
      />

      {/* Background overlay or specific layout styles can go here or in index.css */}
      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }
        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 800px;
          /* Ensure content doesn't shift */
          transform: translateY(-5%); 
        }
      `}</style>
    </div>
  );
}

export default App;
