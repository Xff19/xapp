import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home.js";
// import Todo from "./pages/todo.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "./App.css"
import "./styles/Normalize.scss"
export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router> */}
      <Footer />
    </div>
  );
}
