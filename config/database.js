module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi-test-5-db'),
      user: env('DATABASE_USERNAME', 'admin1234'),
      password: env('DATABASE_PASSWORD', 'i5n61O7e$I#Gn!OE'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
