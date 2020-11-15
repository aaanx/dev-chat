import React from "react";
import "semantic-ui-css/semantic.min.css";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <RegisterPage />
      <LoginPage />
    </div>
  );
}

export default App;
