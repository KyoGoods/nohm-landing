import logo from '@/assets/aad7f5c1c40e51775ed18b99db013e7ca462a9f1.png';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0a0e27] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="NOHM" className="h-10 mb-4" />
            <p className="text-gray-400 mb-6 max-w-md">
              The private, neutral home services utility. No ads, no spam, no pressure—just trusted professionals and transparent service.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>Private</span>
              <span>•</span>
              <span>No Ads</span>
              <span>•</span>
              <span>Neutral</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Homeowners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Contractors</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 NOHM. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Visit <a href="https://NOHM.app" className="text-[#1DA1F2] hover:underline">NOHM.app</a> to learn more
          </p>
        </div>
      </div>
    </footer>
  );
};
