import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <Link
      to={'/game/' + game.id}
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <h2 className="text-lg font-semibold text-white">{game.title}</h2>
      <p className="text-amber-400">${game.price}</p>
      <p className="text-gray-400 text-sm">{game.genre} • {game.platform}</p>
    </Link>
  );
}

export default GameCard;
