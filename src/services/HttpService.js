import getEnvVars from '../../environment';
const { apiUrl } = getEnvVars();

export async function httpMethod(req, callback, error) {
  try {
    console.log(`HTTP ${req.method}  request to -- ${apiUrl}${req.api} 
    data: ${JSON.stringify(req.body)}
    headers: ${JSON.stringify(req.headers)}`);

    var response = await fetch(`${apiUrl}${req.api}`, {
      method: req.method,
      headers:
        req.headers != undefined
          ? req.headers
          : {
              'Content-Type': 'application/json'
            },
      body: JSON.stringify(req.body)
    });
    const res = await response.json();
    callback(res);
  } catch (error) {
    error(error);
  }
}

export async function registerUser(props, callback, error) {
  try {
    console.log('registerUser');
    const { email, password } = props;
    let api = `/users`;
    return await httpMethod(
      {
        method: 'POST',
        api,
        body: { email, password }
      },
      callback,
      error
    );
  } catch (error) {
    console.error(error);
  }
}

export async function authenticateUser(props, callback, error) {
  const { email, password } = props;
  let api = `/auth`;
  return await httpMethod(
    {
      method: 'POST',
      api,
      body: { email, password }
    },
    callback,
    error
  );
}
