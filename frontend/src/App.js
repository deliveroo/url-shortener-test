import React, { useState, useEffect } from "react";
import "./App.css";

import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    async function fetchUrls() {
      const result = await fetch("http://localhost:3000/urls");
      const json = await result.json();

      setUrls(Object.entries(json).map(([code, url]) => ({ code, url })));
    }

    fetchUrls();
  }, []);

  return (
    <div className="app">
      <div className="panel table">
        <h1>Shortened URLs</h1>
        <Table items={urls} />
      </div>

      <div className="panel form">
        <h1>New shortened URL</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
