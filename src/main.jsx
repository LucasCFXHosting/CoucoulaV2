import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './main_App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const YourComponent = () => {
  return (
    <div>
      {/* Autres éléments */}
      <img
        src="src\assets\dc.png"
        alt="Image DC"
        className="rounded-image"
      />
      {/* Autres éléments */}
    </div>
  );
};

export default YourComponent;
