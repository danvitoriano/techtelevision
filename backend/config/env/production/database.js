module.exports = ({ env }) => {
  // Se usar PostgreSQL no Strapi Cloud
  if (env('DATABASE_URL')) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: {
            rejectUnauthorized: false
          }
        },
        pool: {
          min: 0,
          max: 10
        },
        acquireConnectionTimeout: 60000,
        debug: false,
      },
    };
  }
  
  // Se usar SQLite (padrão)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};

