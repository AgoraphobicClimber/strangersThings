import "./App.css";
import Homepage from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Post";
import Auth from "./components/Auth";
import useAuth from "./Hooks/Authhook";
import CreateNewPost from "./components/Createpost";

// import { useState, useEffect} from "react"

function App() {
  const { setToken } = useAuth();

  return (
    <div>
      <Navbar setToken={setToken} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/createpost" element={<CreateNewPost />} />
        <Route path="/auth/:method" element={<Auth setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
