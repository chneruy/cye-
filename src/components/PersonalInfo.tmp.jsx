import React from 'react';
import { MapPin, Heart, GraduationCap } from 'lucide-react';

const PersonalInfo = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 border-[#e9c4e3]">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <img src="https://s3plus.meituan.net/nocode-external/nocode_image/default/证件照-9d17ok3kqsxoku42gf7m76oxqutwae.jpg"

            alt="个人头像" className="mx-auto w-32 h-32 rounded-full border-4 shadow-lg object-contain border-[#ffffffe3]" />
            
            
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">陈雨儿</h1>
          <p className="text-lg mb-4 text-[#e2a6c2]">人工智能专业</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">编程爱好者</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">摄影达人</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">旅行探索者</span>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            热爱技术，喜欢用代码创造美好的事物。平时喜欢摄影和旅行，
            相信生活中处处都有值得记录的美好瞬间。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>上海市</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Heart className="h-4 w-4" />
              <span>绘画、音乐</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <GraduationCap className="h-4 w-4" />
              <span>上海师范大学</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PersonalInfo;
