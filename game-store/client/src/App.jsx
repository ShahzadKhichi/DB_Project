import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GameDetailsPage from './pages/GameDetailsPage';
import CartPage from './pages/CartPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import AdminDashboard from './pages/AdminDashboard';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderSummaryPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
