# Timer for Stretching
Welcome to my 30 second interval stretching timer to prevent your muscles and bones from turning into mush like mine are!

## Tutorial
<b> Sources </b>
https://www.youtube.com/watch?v=hQAHSlTtcmY&t=393s  
https://youtu.be/dGcsHMXbSOA?t=519  
https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d  

## Getting Started by ME :)
<b> Installing React in new repo </b>  
- Install <a href="https://nodejs.org/en/"> node.js </a> first acutally
- Run `node -v` to check version and if it's downloaded
- Run `npx create-react-app .` to install React Application in current folder or "."
- Alternatively, install `npm install --global yarn` and then `yarn create react-app .`
- Delete all in src besides "App.js" and "index.js" to have fresh start

App.js

```javascript
import React from 'react'; 

function App() {
  return (
    null
  );
}

export default App;
```
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- If cloning, then just `npm install` after `git clone "link"` to install node_modules

<b> Running </b>  
- Run `npm start` to have liver server on http://localhost:3000/
- Install ES7 React Extension which allows you to type "rfc" for template
- 