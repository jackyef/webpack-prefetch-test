import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import VeryBigChunk from "./components/VeryBigChunk";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am not rendering <code>VeryBigChunk</code> yet, but it should be
          prefetched already.
        </p>
        {!show ? (
          <button onClick={() => setShow(true)}>
            Click me to render the <code>VeryBigChunk</code>
          </button>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <VeryBigChunk />
          </Suspense>
        )}
      </header>
    </div>
  );
}

export default App;
