import { useState } from 'react';
import GameCard from '../components/GameCard';
import Filter from '../components/Filter';

function HomePage() {
  const [filter, setFilter] = useState('');

  // Static game data
  const games = [
    { id: 1, title: 'CyberSmith’s BattleForge', price: 59.99, genre: 'Action', platform: 'PC', stock: 100 },
    { id: 2, title: 'Starlight Odyssey', price: 49.99, genre: 'Adventure', platform: 'PS5', stock: 50 },
    { id: 3, title: 'WarTactix', price: 39.99, genre: 'Strategy', platform: 'PC', stock: 75 },
    { id: 4, title: 'Shadow Realms', price: 69.99, genre: 'Action', platform: 'Xbox', stock: 30 },
    { id: 5, title: 'Mystic Quest', price: 44.99, genre: 'Adventure', platform: 'PS5', stock: 60 },
    { id: 6, title: 'Iron Command', price: 54.99, genre: 'Strategy', platform: 'PC', stock: 45 },
  ];

  const filteredGames = games.filter(game => 
    filter ? game.genre === filter : true
  );

  return (
    <div className="bg-gray-900 min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Featured Games</h1>
        <Filter setFilter={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
