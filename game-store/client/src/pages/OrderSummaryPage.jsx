import { useState, useEffect } from 'react';
import { getLatestOrder, confirmPayment } from '../utils/api';

function OrderSummaryPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getLatestOrder()
      .then(res => setOrder(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleConfirmOrder = async () => {
    try {
      await confirmPayment(order.id);
      alert('Payment confirmed!');
    } catch (err) {
      console.error(err);
    }
  };

  if (!order) return <div className="container mx-auto p-4 text-indigo-900">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6">Order Summary</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-indigo-600 mb-4">Total: ${order.total_amount}</p>
        <p className="text-indigo-600 mb-4">Status: {order.status}</p>
        <button
          onClick={handleConfirmOrder}
          className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default OrderSummaryPage;
