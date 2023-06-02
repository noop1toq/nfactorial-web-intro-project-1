import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'about':
        return <div className="content">Get hired for your skills, not experience</div>;          
      case 'howItWorks':
        return <div className="content">How it works</div>;
      case 'getStarted':
        return (
          <div className="content">
            <div>
              <input type="text" placeholder="Search for jobs" className="search-input" />
              <button className="search-button">Find Job</button>
            </div>
            <div>
              <input type="file" className="cv-upload" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header className="header">
        <button className={`nav-button ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handleNavigation('about')}>
          About us
        </button>
        <button className={`nav-button ${currentPage === 'howItWorks' ? 'active' : ''}`} onClick={() => handleNavigation('howItWorks')}>
          How it works
        </button>
        <button className={`nav-button ${currentPage === 'getStarted' ? 'active' : ''}`} onClick={() => handleNavigation('getStarted')}>
          Get Started
        </button>
      </header>
      {renderPageContent()}
    </div>
  );
};

export default App;

