import React from 'react';
import { Mail, Phone, MessageCircle, Github, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">联系方式</h2>
          <p className="text-gray-600">欢迎与我联系交流</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 基础联系方式 */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">基础联系</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">邮箱</p>
                  <p className="text-gray-600">2951422100@qq.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">电话</p>
                  <p className="text-gray-600">+86 18770233783</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">微信</p>
                  <p className="text-gray-600">ccc7337777</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 社交账号 */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">社交账号</h3>
            
            <div className="space-y-4">
              <div />










              
              
              <div />










              
            </div>
            
            {/* 微信二维码 */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">微信二维码</p>
              <img src="https://s3plus.meituan.net/nocode-external/nocode_image/default/1111-1qpm2tcbl988em6px6y2bfg50oyd6o.jpg"

              alt="微信二维码" className="mx-auto object-cover border-2 border-gray-200 rounded-lg w-[296px] h-auto" />

              
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactInfo;
