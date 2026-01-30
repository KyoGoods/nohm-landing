import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/aad7f5c1c40e51775ed18b99db013e7ca462a9f1.png';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-lg border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="NOHM" className="h-8 sm:h-10" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#features');
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#how-it-works');
              }}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#pricing');
              }}
            >
              Pricing
            </a>
            <button className="bg-[#1DA1F2] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a8cd8] transition-all">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#0a0e27]/95 backdrop-blur-lg border-b border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#features');
                }}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#how-it-works');
                }}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#pricing');
                }}
              >
                Pricing
              </a>
              <button className="bg-[#1DA1F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a8cd8] transition-all mt-2">
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
