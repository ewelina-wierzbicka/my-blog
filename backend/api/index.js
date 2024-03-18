const strapi = require('strapi');

module.exports = async (req, res) => {
    if (!global.strapi) {
        console.log("Starting Strapi");
        global.strapi = strapi({ dir: process.cwd() });
        console.log('1 ', global.strapi)
        await global.strapi.load();
        onsole.log('2')
        await global.strapi.start();
    }
    console.log('probando')
    global.strapi.server.httpServer.emit('request', req, res);
};