import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderTest from "./assets/header-test.jpeg";
import "./App.css";

// import  FunctionalPureComponent  from "./components/FunctionalPureComponent";
// import  FunctionalMemoComponent  from "./components/FunctionalMemoComponent";
// import  ClassPureComponent  from "./components/ClassPureComponent";

const One = ({ children }: any) => {
  return <>{children}</>;
};

const Nav = (props: any) => {
  console.log(props);
  return <></>;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <One>
            <Nav nav />
          </One>
        }
      />
      <Route
        path="/two"
        element={
          <One>
            <Nav navHed />
          </One>
        }
      />
    </Routes>
  );
}

export default App;
