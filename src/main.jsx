import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './components/screens/home/Home.jsx';
import Admin from './components/screens/admin/Admin.jsx';
import { ModalProvider } from './components/ModalProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ModalProvider>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/admin" element={<Admin />} />
            </Routes>
         </Router>
      </ModalProvider>
   </React.StrictMode>,
);
