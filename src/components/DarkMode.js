import React from 'react';

const DarkModeToggle = ({ darkMode, onDarkModeToggle }) => {
  return (
    <div>
      <button onClick={onDarkModeToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
