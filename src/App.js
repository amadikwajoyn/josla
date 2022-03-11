import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import HashLoader from "react-spinners/HashLoader";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLoader color="green" size={150} />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
