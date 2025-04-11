import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard.jsx";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import ManageItems from "./pages/ManageItems/ManageItems.jsx";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import Explore from './pages/Explore/Explore.jsx'
function App() {
  return (
    <>
      <div>
        <Menubar />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/category" element={<ManageCategory />} />
          <Route path="/users" element={<ManageUsers/>} />
          <Route path="/items" element={<ManageItems/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/" element={<DashBoard/>} />


          
        </Routes>
      </div>
    </>
  );
}

export default App;
