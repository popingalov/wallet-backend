const HTTP_RESPONSES = {
  ok: {
    code: 200,
    status: 'ok',
  },
  created: {
    code: 201,
    status: 'created',
  },
  deleteEl: {
    code: 204,
    status: 'contact deleted',
  },
  notThisV: {
    code: 307,
    status: 'This version is not ready yet!!! Check out the first version.',
  },
  badValid: {
    code: 400,
    status: error => `${error.details[0].message}`,
  },
  badRequest: {
    code: 400,
    status: 'bad request',
},
  badAuth: {
    code: 401,
    status: 'Not authorized',
  },
  notFound: {
    code: 404,
    status: id => `Id ${id} not found`,
  },
  inUse: {
    code: 409,
    status: 'Email in use'
  },
  serverError: {
    code: 500,
    status: 'Sorry, we are being DDoSed. Please call later.',
  },
};

module.exports = HTTP_RESPONSES;
