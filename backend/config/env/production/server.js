module.exports = ({ env }) => ({
  url: env('STRAPI_URL', 'http://localhost:1337'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
});

