import React from 'react';

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  icon: string;
  metrics?: { label: string; value: string; icon: string }[];
  tags?: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  image: string;
  icon?: string;
  isVideo?: boolean;
}

export interface Article {
  title: string;
  description?: string;
  category?: string;
  date: string;
  readTime?: string;
  image?: string;
  featured?: boolean;
  link?: string;
}

export interface TravelDestination {
  name: string;
  season: string;
  image: string;
  large?: boolean;
}

export interface Hobby {
  name: string;
  description?: string;
  image?: string;
  icon?: string;
  type: 'video' | 'card';
  duration?: string;
  colorClass?: string;
  status?: string;
}

export interface SocialLink {
  name: string;
  icon?: string; // Material symbol name
  svg?: React.ReactNode;
  url: string;
  colorClass: string;
}