import React, { useState, useEffect } from 'react';
import axios from 'axios';

const services = [
  { name: 'Auth Service', url: 'http://localhost:3001/health' },
  { name: 'Player Service', url: 'http://localhost:3002/health' }
];

interface ServiceStatus {
  [key: string]: string;
}

export default function ServiceCard() {
  const [status, setStatus] = useState<ServiceStatus>({});

  useEffect(() => {
    const fetchStatus = async () => {
      const results = await Promise.all(
        services.map(async (s) => {
          try {
            const res = await axios.get(s.url);
            return { name: s.name, status: res.status === 200 ? 'Online' : 'Offline' };
          } catch {
            return { name: s.name, status: 'Offline' };
          }
        })
      );
      setStatus(Object.fromEntries(results.map((r) => [r.name, r.status])));
    };
    fetchStatus();
  }, []);

  return (
    <div>
      {services.map((s) => (
        <div key={s.name} className="p-4 border rounded mb-2">
          <h3 className="text-lg font-bold">{s.name}</h3>
          <p
            className={`text-md ${status[s.name] === 'Online' ? 'text-green-500' : 'text-red-500'}`}
          >
            {status[s.name] || 'Laden...'}
          </p>
        </div>
      ))}
    </div>
  );
}
