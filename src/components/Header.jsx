import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <h1 className="app-name">FocusFlow</h1>
            </div>
            <style>{`
        .header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          display: flex;
          justify-content: center;
          z-index: 10;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .logo {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
        }
        .app-name {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          margin: 0;
        }
        @media (max-width: 768px) {
          .header {
            padding: 1.5rem;
          }
          .logo {
            width: 36px;
            height: 36px;
          }
          .app-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
