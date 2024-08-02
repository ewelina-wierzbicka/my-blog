module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        secure: true,
        username: env('SMTP_USERNAME'),
        password: env('SMTP_PASSWORD'),
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 4,
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});