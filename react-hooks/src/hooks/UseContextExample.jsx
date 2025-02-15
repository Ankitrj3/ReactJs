import React, { useState } from 'react';

const UseContextExample = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return <Toolbar theme={theme} toggleTheme={toggleTheme} />;
};

function Toolbar({ theme, toggleTheme }) {
    return (
        <div style={{ 
            background: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff', 
            padding: '20px' 
        }}>
            <h1>Use Context</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </div>
    );
}         

export default UseContextExample;
