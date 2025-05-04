import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      gameId: 1,
      title: 'CyberSmith’s BattleForge',
      price: 59.99,
      quantity: 1,
      image: 'https://picsum.photos/300/200?random=1',
    },
    {
      gameId: 2,
      title: 'Starlight Odyssey',
      price: 49.99,
      quantity: 2,
      image: 'https://picsum.photos/300/200?random=2',
    },
  ]);

  const handleRemoveFromCart = (gameId) => {
    setCart(cart.filter(item => item.gameId !== gameId));
  };

  const handlePlaceOrder = () => {
    alert('Order placed!');
    navigate('/order');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-white mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map(item => (
                <div
                  key={item.gameId}
                  className="bg-gray-800 border border-gray-700/50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full sm:w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                      <p className="text-amber-400">${item.price}</p>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.gameId)}
                    className="mt-4 sm:mt-0 py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold text-white">Total: ${totalPrice}</p>
              <button
                onClick={handlePlaceOrder}
                className="py-3 px-6 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
