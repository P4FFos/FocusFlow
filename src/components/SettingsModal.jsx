import React, { useState } from 'react';

const SettingsModal = ({ isOpen, onClose, modes, updateModes }) => {
  const [localModes, setLocalModes] = useState(modes);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalModes({
      ...localModes,
      [name]: parseInt(value) * 60, // Convert minutes to seconds
    });
  };

  const handleSave = () => {
    updateModes(localModes);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="settings-section">
          <h3>Timer (minutes)</h3>
          <div className="inputs-row">
            <div className="input-group">
              <label>Pomodoro</label>
              <input
                type="number"
                name="pomodoro"
                value={localModes.pomodoro / 60}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Short Break</label>
              <input
                type="number"
                name="short"
                value={localModes.short / 60}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Long Break</label>
              <input
                type="number"
                name="long"
                value={localModes.long / 60}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
          backdrop-filter: blur(12px);
          animation: fadeIn 0.2s ease;
        }
        .modal-content {
          background: rgba(0, 0, 0, 0.4);
          color: #ffffff;
          padding: 2.5rem;
          border-radius: var(--radius-md);
          width: 90%;
          max-width: 420px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transform: translateY(0);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 1rem;
        }
        .modal-header h2 {
          font-size: 1.5rem;
          color: #ffffff;
          font-weight: 700;
        }
        .close-btn {
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          font-size: 2rem;
          padding: 0;
          line-height: 1;
          transition: color 0.2s;
        }
        .close-btn:hover {
          color: #ffffff;
        }
        .settings-section h3 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.2rem;
          font-weight: 600;
        }
        .inputs-row {
          display: flex;
          gap: 1.5rem;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .input-group label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }
        .input-group input {
          padding: 0.8rem;
          border: 2px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-sm);
          width: 100%;
          font-family: var(--font-main);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .input-group input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.12);
        }
        .modal-footer {
          margin-top: 2.5rem;
          display: flex;
          justify-content: flex-end;
        }
        .save-btn {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 1rem 2.5rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        .save-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default SettingsModal;
