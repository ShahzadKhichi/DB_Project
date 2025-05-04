import { useState } from 'react';
import GameCard from '../components/GameCard';
import Filter from '../components/Filter';

function HomePage() {
  const [filter, setFilter] = useState('');

  // Static game data with fixed image URLs and descriptions
  const games = [
    {
      id: 1,
      title: 'CyberSmith’s BattleForge',
      price: 59.99,
      genre: 'Action',
      platform: 'PC',
      stock: 100,
      description: 'An intense action-packed shooter set in a dystopian future. Battle through cybernetic armies to reclaim the world.',
      image: 'https://picsum.photos/300/200?random=1',
    },
    {
      id: 2,
      title: 'Starlight Odyssey',
      price: 49.99,
      genre: 'Adventure',
      platform: 'PS5',
      stock: 50,
      description: 'Embark on a cosmic journey through vibrant galaxies, solving puzzles and uncovering ancient mysteries.',
      image: 'https://picsum.photos/300/200?random=2',
    },
    {
      id: 3,
      title: 'WarTactix',
      price: 39.99,
      genre: 'Strategy',
      platform: 'PC',
      stock: 75,
      description: 'Command armies in this strategic masterpiece. Plan your moves and dominate the battlefield.',
      image: 'https://picsum.photos/300/200?random=3',
    },
    {
      id: 4,
      title: 'Shadow Realms',
      price: 69.99,
      genre: 'Action',
      platform: 'Xbox',
      stock: 30,
      description: 'Dive into a dark fantasy world where stealth and combat collide. Face formidable foes in epic battles.',
      image: 'https://picsum.photos/300/200?random=4',
    },
    {
      id: 5,
      title: 'Mystic Quest',
      price: 44.99,
      genre: 'Adventure',
      platform: 'PS5',
      stock: 60,
      description: 'Explore enchanted lands in this captivating adventure. Unravel secrets and forge your legend.',
      image: 'https://picsum.photos/300/200?random=5',
    },
    {
      id: 6,
      title: 'Iron Command',
      price: 54.99,
      genre: 'Strategy',
      platform: 'PC',
      stock: 45,
      description: 'Lead your forces to victory in this tactical strategy game. Every decision shapes the outcome of war.',
      image: 'https://picsum.photos/300/200?random=6',
    },
  ];

  const filteredGames = games.filter(game => 
    filter ? game.genre === filter : true
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-white mb-6">Featured Games</h1>
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
