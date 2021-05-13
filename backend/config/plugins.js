module.exports = ({ env }) => ({
    email: {
      provider: 'smtp',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        secure: false,
        username: env('SMTP_USERNAME'),
        password: env('SMTP_PASSWORD'),
        rejectUnauthorized: true,
        requireTLS: false,
        connectionTimeout: 1,
      },
    },
  });