import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
   fetchInfo();
  }, []);
  const url = process.env.REACT_APP_BACK_APP_URL + "/users";
  const [data, setData] = useState("");



  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.text())
      .then((d) => setData(d))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      </header>
    </div>
  );
}

export default App;
