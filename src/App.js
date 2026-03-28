import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Registration from './features/auth/Registration';
import Login from './features/auth/Login';
import AIDetection from './features/Ai/AIDetection';
import Negotiation from './features/marketplace/Negotiation';
import OrderHistory from './features/orders/OrderHistory';
import AIChat from './features/chat/AIChat';
import Inventory from './features/inventory/Inventory';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ai-detection" element={<AIDetection />} />
        <Route path="/negotiation" element={<Negotiation />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/chat" element={<AIChat />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;
