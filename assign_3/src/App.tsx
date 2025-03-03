import React, { lazy, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './pages/login/Login';

import Register from './pages/register/register';
import PageNotFound from './pages/noPage/PageNotFound';
// import Layout from './pages/Layout';
// import Videos from './pages/Videos';
import Dashboard from './pages/Dashboard/Dashboard';
// import DataGrid from './pages/DataGrid';
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"))

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route path="video" element={<Videos />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data-grid" element={<DataGrid />} />
        </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route 
        path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
