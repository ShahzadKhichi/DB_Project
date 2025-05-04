import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <Link
      to={'/game/' + game.id}
      className="bg-gray-800 border border-gray-700/50 rounded-xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-white">{game.title}</h2>
      <p className="text-amber-400">${game.price}</p>
      <p className="text-gray-400 text-sm">{game.genre} • {game.platform}</p>
    </Link>
  );
}

export default GameCard;
