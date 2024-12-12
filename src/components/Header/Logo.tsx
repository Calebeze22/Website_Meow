import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className="h-8 w-8 text-[#F4B942]" />
      <div>
        <h1 className="text-xl font-montserrat font-bold">Discovery School</h1>
        <p className="text-xs text-[#F4B942]">Small School, Big Impact</p>
      </div>
    </div>
  );
}