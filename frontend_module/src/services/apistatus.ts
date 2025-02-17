import axios from 'axios';

interface ApiServiceStatus {
  name: string;
  url: string;
  status: string;
  code?: number;
  responseTime?: number;
}

// Liste der zu überprüfenden APIs
const apiEndpoints = [
  { name: 'Auth-Service', url: 'http://backend:3000/api/auth/health' },
  { name: 'Player-Service', url: 'http://playerservice:4000/api/player/health' },
  { name: 'Matchmaking-Service', url: 'http://backend:3000/api/matchmaking/health' }
];

// API-Statusprüfungen parallel durchführen
export async function checkApiStatus(): Promise<ApiServiceStatus[]> {
  const results = await Promise.all(
    apiEndpoints.map(async (endpoint) => {
      const start = Date.now();
      try {
        const response = await axios.get(endpoint.url, { timeout: 5000 });
        const responseTime = Date.now() - start;
        return {
          ...endpoint,
          status: response.status === 200 ? 'Online' : 'Issue',
          code: response.status,
          responseTime
        };
      } catch (error: any) {
        return {
          ...endpoint,
          status: 'Offline',
          code: error.response?.status ?? 500,
          responseTime: Date.now() - start
        };
      }
    })
  );
  return results;
}
