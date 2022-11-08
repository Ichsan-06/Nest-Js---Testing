require('dotenv').config();

module.exports = {
  name: 'default',
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
  synchronize: true,
  dropschema: false,
  logging: false,
};
