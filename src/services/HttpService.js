GetBaseServer = () => {
  //TODO:
  //check environment
  return 'https://groceries4us-server.herokuapp.com';
};

export async function httpMethod(req) {
  try {
    var response = await fetch(`${GetBaseServer}${req.api}`, {
      method: req.method,
      headers: req.headers
        ? req.headers
        : {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
      body: req.body
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(props) {
  const { email, password } = props;
  let api = `/users`;
  return await httpMethod({
    method: 'POST',
    url,
    api,
    body: { email, password }
  });
}

export async function authenticateUser(props) {
  const { email, password } = props;
  let api = `/auth`;
  return await httpMethod({
    method: 'POST',
    url,
    api,
    body: { email, password }
  });
}
