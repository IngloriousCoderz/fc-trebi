module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f9cc8655762e36791fd909fc485f31b'),
  },
});
