const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::email.email");

// module.exports = {
//     routes: [
//         {
//             method: "GET",
//         path: "/emails",
//             handler: "email.find",
//             config: {
//                 policies: []
//             }
//         },
//         {
//             method: "GET",
//             path: "/emails/count",
//             handler: "email.count",
//             config: {
//                 policies: []
//             }
//         },
//         {
//             method: "GET",
//             path: "/emails/:id",
//             handler: "email.findOne",
//             config: {
//                 policies: []
//             }
//         },
//         {
//             method: "POST",
//             path: "/emails",
//         handler: "email.create",
//             config: {
//             policies: []
//             }
//         },
//         {
//             method: "PUT",
//             path: "/emails/:id",
//             handler: "email.update",
//             config: {
//                 policies: []
//             }
//         },
//         {
//             method: "DELETE",
//             path: "/emails/:id",
//             handler: "email.delete",
//             config: {
//                 policies: []
//             }
//         }
//     ]
// }
