import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>by 陈雨儿</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-2">
          © 2026 个人展示网站. 保留所有权利.
        </p>
        
        <div />

        
      </div>
    </footer>);

};

export default Footer;
