import React from 'react';
import ServiceCard from './components/ServiceCard';
export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Service Status Übersicht</h1>
      <ServiceCard />
    </div>
  );
}
