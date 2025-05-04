import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700/50 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-center mb-8">
            <h1 className="text-3xl font-semibold text-white">Game Store</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-900/70 border-l-4 border-red-600 text-red-200 px-4 py-3 rounded-lg text-sm text-center animate-[fadeIn_0.5s_ease-out]">
                {error}
              </div>
            )}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 hover:bg-gray-700"
                required
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base">✉️</span>
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 hover:bg-gray-700"
                required
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base">🔒</span>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            Don’t have an account?{' '}
            <a href="/register" className="font-medium text-amber-400 hover:text-amber-300 hover:underline decoration-amber-400 transition-all duration-200">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;