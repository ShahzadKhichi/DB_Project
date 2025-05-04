function GameForm({ newGame, setNewGame, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="max-w-md mb-8 space-y-4">
      <input
        type="text"
        value={newGame.title}
        onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
        placeholder="Title"
        className="w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 placeholder-indigo-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        required
      />
      <textarea
        value={newGame.description}
        onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
        placeholder="Description"
        className="w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 placeholder-indigo-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        required
      />
      <input
        type="number"
        value={newGame.price}
        onChange={(e) => setNewGame({ ...newGame, price: e.target.value })}
        placeholder="Price"
        className="w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 placeholder-indigo-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        required
      />
      <input
        type="text"
        value={newGame.genre}
        onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
        placeholder="Genre"
        className="w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 placeholder-indigo-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        required
      />
      <input
        type="text"
        value={newGame.platform}
        onChange={(e) => setNewGame({ ...newGame, platform: e.target.value })}
        placeholder="Platform"
        className="w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 placeholder-indigo-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        required
      />
      <input
        type="number"
        value={newGame.stock}
        onChange={(e) => setNewGame({ ...newGame, stock: e.target.value })}
        placeholder="Stock"
        className="w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 placeholder-indigo-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        required
      />
      <button type="submit" className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">Add Game</button>
    </form>
  );
}

export default GameForm;
