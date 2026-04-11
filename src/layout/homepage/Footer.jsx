import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#050505] pt-16 pb-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
              R
            </div>
            <span className="text-white text-xl font-bold tracking-tight">Rootly</span>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            The modern link-in-bio platform for creators, developers & brands.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 text-sm">Product</h4>
          <ul className="space-y-4">
            {['Features', 'Pricing', 'Templates', 'Integrations'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 text-sm">Company</h4>
          <ul className="space-y-4">
            {['About', 'Blog', 'Careers', 'Press'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 text-sm">Legal</h4>
          <ul className="space-y-4">
            {['Privacy', 'Terms', 'Security'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
