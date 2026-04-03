import React from 'react';
import { User, Calendar, Phone, Home, FolderOpen } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">个人展示</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>个人信息</span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FolderOpen className="h-4 w-4" />
              <span>我的项目</span>
            </button>
            
            <button
              onClick={() => scrollToSection('activities')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>最近活动</span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>联系方式</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
