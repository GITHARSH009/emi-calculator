import React from 'react';
import { 
  Calculator, 
  Building, 
  Home, 
  GraduationCap, 
  Car, 
  Coins, 
  Heart, 
  Briefcase,
  Shield,
  Plane,
  Users,
  Ship,
  Grid3X3,
  ChevronRight,
  Facebook,
  Share2,
  Menu,
  X
} from 'lucide-react';

// Google Ad Component (you would import this from your components folder)
const GoogleAd = ({ adSlot, adFormat = "auto", className = "", style = { display: 'block' } }) => {
  React.useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

const EMICalculatorApp = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const calculatorCategories = [
    { name: 'PERSONAL', icon: Calculator, type: 'Loan' },
    { name: 'BUSINESS', icon: Briefcase, type: 'Loan' },
    { name: 'HOME', icon: Home, type: 'Loan' },
    { name: 'EDUCATION', icon: GraduationCap, type: 'Loan' },
    { name: 'CAR', icon: Car, type: 'Loan' },
    { name: 'GOLD', icon: Coins, type: 'Loan' },
    { name: 'MORTGAGE', icon: Building, type: 'Loan' },
    { name: 'AGRICULTURE', icon: Heart, type: 'Loan' },
    { name: 'MEDICAL', icon: Heart, type: '' },
    { name: 'GST', icon: Grid3X3, type: 'Calculator' }
  ];

  const insuranceCategories = [
    { name: 'INSURANCE', icon: Shield, type: 'Calculator' },
    { name: 'HEALTH', icon: Heart, type: 'Insurance' },
    { name: 'MOTOR', icon: Car, type: 'Insurance' },
    { name: 'HOME', icon: Home, type: 'Loan' },
    { name: 'TRAVEL', icon: Plane, type: 'Insurance' },
    { name: 'BUSINESS', icon: Briefcase, type: 'Loan' },
    { name: 'PENSION', icon: Users, type: 'Insurance' },
    { name: 'TERM', icon: Shield, type: 'Insurance' },
    { name: 'MARINE', icon: Ship, type: '' },
    { name: 'GST', icon: Grid3X3, type: 'Calculator' }
  ];

  const CategoryButton = ({ name, icon: Icon, type }) => (
    <button className="bg-gray-900 text-white p-4 rounded-lg flex flex-col items-center justify-center space-y-2 hover:bg-gray-800 transition-colors min-h-[80px]">
      <Icon size={24} />
      <span className="text-xs font-medium text-center">{name}</span>
      {type && <span className="text-xs text-gray-400">{type}</span>}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div>
            <h1 className="text-lg font-semibold">Loan App</h1>
            <p className="text-xs text-gray-500">erotar.net</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">17:28</span>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
          <span className="text-sm">26%</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-20">
        {/* Advertisement Section - Google Ad */}
        <section className="mb-6">
          <p className="text-center text-gray-500 text-sm mb-3">Advertisement</p>
          <div className="min-h-[200px] bg-gray-50 rounded-lg flex items-center justify-center">
            <GoogleAd 
              adSlot="1234567890" 
              adFormat="auto"
              className="w-full"
              style={{ display: 'block', minHeight: '200px' }}
            />
          </div>
        </section>

        {/* Purpose Loan Section */}
        <section className="mb-6">
          <div className="bg-gray-900 text-white p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calculator size={20} />
              <span className="font-medium">PURPOSE LOAN</span>
            </div>
            <ChevronRight size={20} />
          </div>
        </section>

        {/* Quick Access Buttons */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-900 text-white p-4 rounded-lg flex items-center justify-center space-x-2">
              <Calculator size={20} />
              <span className="font-medium">FINANCIAL</span>
            </button>
            <button className="bg-gray-900 text-white p-4 rounded-lg flex items-center justify-center space-x-2">
              <Shield size={20} />
              <span className="font-medium">INSURANCE</span>
            </button>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Latest Article</h2>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <img 
                src="/api/placeholder/300/150" 
                alt="Insurance consultation" 
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-medium text-sm mb-1">The Rising Need for Insurance in Today's World</h3>
                <p className="text-xs text-gray-500 mb-2">In 2023, the world is changing faster than ever...</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Published by erotar.net</span>
                  <span>4h ago</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <img 
                src="/api/placeholder/300/150" 
                alt="Smart insurance planning" 
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-medium text-sm mb-1">Smart Insurance Plans for Life</h3>
                <p className="text-xs text-gray-500 mb-2">Insurance is a crucial part of financial planning...</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Published by erotar.net</span>
                  <span>1d ago</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-content Ad */}
        <section className="mb-6">
          <div className="min-h-[100px] bg-gray-50 rounded-lg flex items-center justify-center">
            <GoogleAd 
              adSlot="0987654321" 
              adFormat="horizontal"
              className="w-full"
              style={{ display: 'block', width: '100%', height: '90px' }}
            />
          </div>
        </section>

        {/* All Calculators */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">ALL CALCULATORS</h2>
          <div className="grid grid-cols-2 gap-3">
            {calculatorCategories.map((category, index) => (
              <CategoryButton 
                key={index} 
                name={category.name} 
                icon={category.icon} 
                type={category.type}
              />
            ))}
          </div>
        </section>

        {/* Insurance Categories */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-3">
            {insuranceCategories.map((category, index) => (
              <CategoryButton 
                key={index} 
                name={category.name} 
                icon={category.icon} 
                type={category.type}
              />
            ))}
          </div>
        </section>

        {/* Footer Ad */}
        <section className="mb-6">
          <div className="min-h-[250px] bg-gray-50 rounded-lg flex items-center justify-center">
            <GoogleAd 
              adSlot="1122334455" 
              adFormat="rectangle"
              className="w-full max-w-sm mx-auto"
              style={{ display: 'block', width: '300px', height: '250px' }}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs mb-6">
          <p className="mb-2">Copyright by erotar.net© 2025.</p>
          <div className="flex flex-wrap justify-center space-x-2">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-700">Disclaimer</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-700">Terms and Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-700">About Us</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-700">Contact Us</a>
          </div>
        </footer>

        {/* Bottom CTA */}
        <section className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Connect and share with people you know. See the latest from your community.</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              VISIT SITE
            </button>
          </div>
        </section>
      </main>

      {/* Mobile Navigation (if needed) */}
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setShowMenu(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Home</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Calculators</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Insurance</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Articles</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default EMICalculatorApp;