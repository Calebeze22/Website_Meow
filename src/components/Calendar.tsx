import React from 'react';
import type { Event } from '../types';

export default function Calendar({ events }: { events: Event[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="font-montserrat font-bold text-2xl mb-6">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="border-l-4 border-[#F4B942] pl-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">{event.title}</h3>
              <span className="text-sm text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{event.description}</p>
            <p className="text-sm text-[#1B3665] mt-1">{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}