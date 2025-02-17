import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
  socket: {
    connectTimeout: 10000,
    keepAlive: 5000,
    reconnectStrategy: (retries) => Math.min(retries * 50, 500),
  },
});

redisClient.connect();

export default redisClient;
