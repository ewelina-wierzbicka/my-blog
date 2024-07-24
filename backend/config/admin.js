module.exports = ({ env }) => ({
    apiToken: {
        salt: env('API_TOKEN_SALT', 'd9b0df66ff97a666027e665707b4e3e7'),
    },
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'ba2542ac5cf5c78a76f2022506f90bd3'),
    },
});