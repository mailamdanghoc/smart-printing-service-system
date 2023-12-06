import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import ChoosePrinter from './views/ChoosePrinter';
import PayOrder from './views/PayOrder';  
import UploadDocument from './views/UploadDocument';
import SpecifyProperties from './views/SpecifyProperties';
import HomePage from './views/HomePage';
import Login from './views/Login'
import HomeAdmin from './views/HomeAdmin'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/homeadmin" element={<HomeAdmin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/choose-printer" element={<ChoosePrinter />} />
      <Route path="/pay-order" element={<PayOrder />} />
      <Route path="/upload-document" element={<UploadDocument />} />
      <Route path="/specify-properties" element={<SpecifyProperties />} />
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
