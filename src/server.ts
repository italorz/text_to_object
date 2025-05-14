import Fastify from 'fastify';
import { reportRoutes } from './routes/report';

async function main() {
  const server = Fastify();
  server.get('/', async () => {
    return { message: 'Servidor está rodando 👍' };
  });
  
  server.register(reportRoutes);

  try {
    await server.listen({ port: 3000 });
    console.log('🚀 Server listening at http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

main();
