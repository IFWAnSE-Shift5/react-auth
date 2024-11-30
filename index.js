import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/home';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import reportWebVitals from './reportWebVitals';
import { auth } from './config/firebase';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<HomePage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="main" element={auth.currentUser?<MainPage />:<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
