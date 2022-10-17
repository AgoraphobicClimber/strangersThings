import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
