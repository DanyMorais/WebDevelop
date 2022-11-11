import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/layout/Layout';
import All from './pages/all/All';
import Images from './pages/images/Images';
import Videos from './pages/videos/Videos';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CounterPage from './pages/counter/CounterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="counterPage" element={<CounterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
