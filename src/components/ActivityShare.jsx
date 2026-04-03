import React, { useState } from 'react';
import { Calendar, Eye, X } from 'lucide-react';

const ActivityShare = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const activities = [
    {
      id: 1,
      title: "参加黄子弘凡“除了快乐禁止入内”演唱会",
      date: "2025-12",
      image: "https://s3plus.meituan.net/nocode-external/nocode_image/default/11-5ihho4lx6jrii09shvkd4sanhu7914.jpg",
      description: "和朋友一起去了上海场巡演，非常开心激动！"
    },
    {
      id: 3,
      title: "济州岛旅游",
      date: "2025-4",
      image: "https://s3plus.meituan.net/nocode-external/nocode_image/default/1-hggwaab9ftz10empx708k5nznqfqf2.jpg",
      description: "和好朋友去济州岛玩啦！第一次出国很开心"
    },
    {
      id: 4,
      title: "贵州旅游",
      date: "2025-8",
      image: "https://s3plus.meituan.net/nocode-external/nocode_image/default/111-qo9xvxip51rfrrm453mtiddlw4hd1b.jpg",
      description: "到贵州玩啦！洋芋国简直美味！"
    }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="activities" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">最近活动</h2>
          <p className="text-gray-600">记录生活中的美好时光</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="mx-auto object-contain w-full h-auto cursor-pointer"
                  onClick={() => openImageModal(activity.image)}
                />
                <button
                  onClick={() => openImageModal(activity.image)}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{activity.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 图片放大模态框 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-opacity"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="放大图片"
              className="mx-auto object-cover max-w-full max-h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ActivityShare;
