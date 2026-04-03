import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="https://s3plus.meituan.net/nocode-external/nocode_image/default/证件照-9d17ok3kqsxoku42gf7m76oxqutwae.jpg" 
            alt="陈雨儿头像" 
            className="mx-auto w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">陈雨儿</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          人工智能专业 | 热爱技术与创新 | 用代码创造美好世界
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-md">编程爱好者</span>
          <span className="px-4 py-2 bg-white rounded-full text-green-600 font-medium shadow-md">摄影达人</span>
          <span className="px-4 py-2 bg-white rounded-full text-purple-600 font-medium shadow-md">旅行探索者</span>
        </div>
        
        <button 
          onClick={scrollToNextSection}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          了解更多
          <ChevronDown className="ml-2 h-5 w-5" />
        </button>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
