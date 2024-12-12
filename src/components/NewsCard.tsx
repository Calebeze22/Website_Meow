import React from 'react';
import type { NewsItem } from '../types';

export default function NewsCard({ news }: { news: NewsItem }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={news.imageUrl}
        alt={news.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <p className="text-sm text-[#F4B942] mb-2">{news.date}</p>
        <h3 className="font-montserrat font-bold text-lg mb-2">{news.title}</h3>
        <p className="text-gray-600">{news.excerpt}</p>
      </div>
    </div>
  );
}