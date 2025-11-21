export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the perfect AI prompt
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Marketplace for DALL·E, Midjourney, ChatGPT, Stable Diffusion & more
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for prompts..."
                className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full transition-colors">
                Search
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🎨 DALL·E
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🖼️ Midjourney
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              💬 ChatGPT
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🎭 Stable Diffusion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
