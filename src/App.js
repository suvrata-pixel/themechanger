import React, {useState} from "react";
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => 
    {
      setDarkTheme(!darkTheme);
    }

  return (
    <div className={darkTheme ? "app dark" : "app light"}>
      <button className="btn" onClick= {toggleTheme}>
        Switch Theme
      </button>
      <h1>
        {darkTheme ? "Dark Mode" : "Light Mode"}
      </h1>
    </div>
  );
}

export default App;
