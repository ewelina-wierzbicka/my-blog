"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    afterCreate: async (data) => {
      try {
        await strapi.plugins['email'].services.email.send({
          to: process.env['SMTP_TO'],
          from: process.env['SMTP_USERNAME'],
          replyTo: `${data.firstname} <${data.email}>`,
          subject: 'zapytanie ze strony',
          text: data.message,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
