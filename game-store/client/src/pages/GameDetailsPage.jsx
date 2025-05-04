import { useParams } from 'react-router-dom';

function GameDetailsPage() {
  const { id } = useParams();

  // Static game data (same as HomePage.jsx)
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

  const game = games.find(g => g.id === parseInt(id));

  if (!game) return <div className="container mx-auto px-4 pt-20 text-white">Game not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-white mb-6">{game.title}</h1>
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700/50 transition-all duration-300 hover:shadow-xl">
          <img
            src={game.image}
            alt={game.title}
            className="w-full max-w-md h-64 object-cover rounded-lg mb-6 mx-auto"
          />
          <p className="text-gray-300 mb-4">{game.description}</p>
          <p className="text-amber-400 mb-2">Price: ${game.price}</p>
          <p className="text-gray-300 mb-2">Genre: {game.genre}</p>
          <p className="text-gray-300 mb-2">Platform: {game.platform}</p>
          <p className="text-gray-300 mb-4">Stock: {game.stock}</p>
          <button
            onClick={() => alert('Added to cart!')}
            className="py-3 px-6 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameDetailsPage;
