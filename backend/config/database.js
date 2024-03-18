module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('POSTGRES_HOST'),
        port: env.int('POSTGRES_PORT'),
        database: env('POSTGRES_DATABASE'),
        username: env('POSTGRES_USER'),
        password: env('POSTGRES_PASSWORD'),
        schema: 'public',
        ssl: false,
      },
      options: {},
    },
  },
});