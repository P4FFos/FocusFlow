import React from 'react';

const ModeSwitcher = ({ currentMode, setMode }) => {
  const modes = [
    { id: 'pomodoro', label: 'pomodoro' },
    { id: 'short', label: 'short break' },
    { id: 'long', label: 'long break' },
  ];

  return (
    <div className="mode-switcher">
      {modes.map((mode) => (
        <button
          key={mode.id}
          className={`mode-btn ${currentMode === mode.id ? 'active' : ''}`}
          onClick={() => setMode(mode.id)}
        >
          {mode.label}
        </button>
      ))}
      <style>{`
        .mode-switcher {
          display: flex;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.3rem;
          border-radius: var(--radius-full);
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .mode-btn {
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
          padding: 0.6rem 1.5rem;
          border-radius: var(--radius-full);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .mode-btn.active {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .mode-btn:hover:not(.active) {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
};

export default ModeSwitcher;
