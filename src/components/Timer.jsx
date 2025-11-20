import React from 'react';

const Timer = ({ timeLeft }) => {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className="timer-display">
        {formatTime(timeLeft)}
      </div>
      <style>{`
        .timer-container {
          text-align: center;
          margin: 1rem 0;
          position: relative;
        }
        .timer-display {
          font-family: var(--font-mono);
          font-size: 12rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.05em;
          text-shadow: 0 10px 30px rgba(0,0,0,0.3);
          font-variant-numeric: tabular-nums;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.2));
          width: 100%;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .timer-display {
            font-size: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Timer;
