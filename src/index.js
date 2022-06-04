import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from '../src/Pages/SignUp/SignUp';
import LogIn from '../src/Pages/LogIn/LogIn'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.component';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="" element={<App/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
