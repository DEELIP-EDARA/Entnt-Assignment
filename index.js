import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddCompany from "./components/AddCompany";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root path */}
        <Route path="/" element={<Dashboard />} />
        {/* Add company path */}
        <Route path="/add" element={<AddCompany />} />
      </Routes>
    </Router>
  );
};

export default App;