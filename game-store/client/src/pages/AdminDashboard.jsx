import { useState, useEffect } from 'react';
import GameForm from '../components/GameForm';
import { getGames, addGame, deleteGame } from '../utils/api';

function AdminDashboard() {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({ title: '', description: '', price: '', genre: '', platform: '', stock: '' });

  useEffect(() => {
    getGames()
      .then(res => setGames(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAddGame = async (e) => {
    e.preventDefault();
    try {
      const res = await addGame(newGame);
      setGames([...games, res.data]);
      setNewGame({ title: '', description: '', price: '', genre: '', platform: '', stock: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      await deleteGame(id);
      setGames(games.filter(game => game.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6">Admin Dashboard</h1>
      <GameForm newGame={newGame} setNewGame={setNewGame} onSubmit={handleAddGame} />
      <div className="space-y-4">
        {games.map(game => (
          <div key={game.id} className="bg-white border border-indigo-200 p-4 flex justify-between rounded-lg shadow-md">
            <div>
              <h2 className="text-lg font-semibold text-indigo-900">{game.title}</h2>
              <p className="text-indigo-600">${game.price}</p>
            </div>
            <button
              onClick={() => handleDeleteGame(game.id)}
              className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
