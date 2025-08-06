require('dotenv').config();

/** @type { import("drizzle-kit").Config } */
module.exports = {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL, // Use DATABASE_URL for server-side config
    }
};