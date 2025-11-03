import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

// Create a simple wrapper for web
function WebRoot() {
  return (
    <div style={{ height: '100vh', width: '100%', maxWidth: '500px', margin: '0 auto', display: 'flex' }}>
      <App />
    </div>
  );
}

// Render to DOM
ReactDOM.render(<WebRoot />, document.getElementById('root'));