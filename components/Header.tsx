export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PromptBase
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Explore
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Sell
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Top Sellers
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-gray-700 hover:text-primary transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
