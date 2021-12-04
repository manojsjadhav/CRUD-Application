import React from "react";
import "./App.css";
import Home from "./component/Home";
import Form from "./component/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./component/Edit";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
