import React from 'react';

interface Photo {
  id: number;
  url: string;
  caption: string;
  date: string;
  category: string;
}

interface PhotoGalleryProps {
  title: string;
  photos: Photo[];
}

export default function PhotoGallery({ title, photos }: PhotoGalleryProps) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-800 font-medium mb-2">{photo.caption}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{photo.date}</span>
                <span className="text-sm text-blue-600">{photo.category}</span>
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Add a comment..."
                  className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={2}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}