import React from 'react';

export interface Course {
  level: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface StructureItem {
  image: string;
  title: string;
  description?: string;
}