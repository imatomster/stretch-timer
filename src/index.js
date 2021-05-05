import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* //Solve the console.log error
const predicate = (log) => {
  if (typeof log === 'string') {
    return !(log.endsWith('react-dom.min.js'));
  }
  return true;
}

const shutUpThirdPartyWarnings = () => {
  const consoleError = console.error;
  console.error = (...args) => {
    const argsWithoutWarnings = args.filter(predicate);
    return consoleError(...argsWithoutWarnings);
  }
};

shutUpThirdPartyWarnings(); */