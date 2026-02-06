import { Link } from 'react-router-dom';
import { 
  FiHome,
  FiAlertTriangle,
  FiSearch,
  FiArrowLeft,
  FiRefreshCw
} from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="pt-16 pb-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      {/* SVG Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5 z-0">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#4F46E5" strokeWidth="0.5"></path>
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="#4F46E5" strokeWidth="0.5"></path>
          <circle cx="50" cy="50" r="30" stroke="#4F46E5" strokeWidth="0.5" fill="none"></circle>
        </svg>
      </div>
      
      <div className="max-w-xl mx-auto text-center px-4 relative z-10">
        {/* Error Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 text-blue-600 rounded-full mb-8">
          <FiAlertTriangle className="w-12 h-12" />
        </div>
        
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-6">404</h1>
        
        {/* Error Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Page Not Found</h2>
        
        {/* Error Message */}
        <p className="text-lg mb-8 text-gray-600 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search for pages..."
          />
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-[#01313F] hover:bg-[#01313F] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <FiHome className="mr-2" /> Back to Home
          </Link>
          <Link 
            to="#" 
            onClick={() => window.history.back()} 
            className="bg-[#88D6FA] hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-gray-300 flex items-center justify-center"
          >
            <FiArrowLeft className="mr-2" /> Go Back
          </Link>
        </div>
        
        {/* Alternative Links */}
        <div className="mt-12 text-gray-600">
          <p className="mb-4">You might want to check out:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Home</Link>
            <Link to="/services" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Services</Link>
            <Link to="/portfolio" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Portfolio</Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Contact Us</Link>
          </div>
        </div>
        
        {/* Refresh Button */}
        <button 
          onClick={() => window.location.reload()} 
          className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <FiRefreshCw className="mr-2" /> Refresh Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;