import React from 'react';

const Controls = ({ isActive, setIsActive, onReset, onSettings }) => {
  return (
    <div className="controls-container">
      <button
        className="control-btn primary"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>

      <div className="divider"></div>

      <button className="control-btn icon-btn" onClick={onReset} aria-label="Reset">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10"></polyline>
          <polyline points="23 20 23 14 17 14"></polyline>
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
        </svg>
      </button>

      <button className="control-btn icon-btn" onClick={onSettings} aria-label="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>

      <style>{`
        .controls-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.3rem 0.5rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 0.5rem;
        }
        .control-btn {
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
          border: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .control-btn.primary {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-weight: 600;
          padding: 0.6rem 2rem;
          min-width: 100px;
          font-size: 1.1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .control-btn.primary:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .control-btn.primary:active {
          transform: translateY(0);
        }
        .control-btn.icon-btn {
          padding: 0.6rem;
          opacity: 0.8;
          background: transparent; /* Ensure background is transparent for icon buttons */
          backdrop-filter: none; /* Remove backdrop-filter for icon buttons */
          border: none; /* Remove border for icon buttons */
          border-radius: 50%; /* Keep border-radius for icon buttons */
        }
        .control-btn.icon-btn:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
          transform: none;
        }
      `}</style>
    </div >
  );
};

export default Controls;
