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
import ProductDetails from './features/marketplace/ProductDetails';
import Marketplace from './features/marketplace/Marketplace';
import MarketPrices from './features/marketplace/MarketPrices';
import Wallet from './features/wallet/Wallet';
import Checkout from './features/orders/Checkout';
import Settings from './features/settings/Settings';
import Contact from './features/contact/Contact';
import FloatingContact from './components/common/FloatingContact';

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
        <Route path="/productdetail" element={<ProductDetails />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/prices" element={<MarketPrices />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingContact />
    </Router>
  );
}

export default App;
