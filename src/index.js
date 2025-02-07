
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';                    
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Blog from './pages/Blog';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path = "/home" element={<Home/>}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/contact" element= {<Contact/>}></Route>
        <Route path = "/blog" element= {<Blog/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
