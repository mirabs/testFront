import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {

    console.log(process.env);
    console.log(process.env);

    const url1 = process.env.REACT_APP_BACK_APP_URL + "/users";
    console.log("ENV:" + url1);
    const url2 = process.env.REACT_APP_AZURE_APP_BACK_APP_URL + "/users";
    console.log("Azure:" + url2);

    const url = "https://webapp-test-node.azurewebsites.net/users";
    console.log("Const:" + url);
    const fetchInfo = () => {
      return fetch(url)
          .then((res) => res.text())
          .then((d) => setData(d))
    }
    fetchInfo()
  }, []);

  const [data, setData] = useState("");

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
          <h1>HELLO</h1>
            {data}
        </a>
      </header>
    </div>
  );
}

export default App;
