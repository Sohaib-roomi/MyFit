const BASE_API_URL = 'http://127.0.0.1:3000/api';

export const postRequest = (url, data, token = null) => {
    return new Promise((resolve, reject) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
  
      if (token) {
        headers.Authorization = `JWT ${token}`;
      }
  
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then(async response => {
          const res = await response.json();
          resolve(res);
        })
        .catch(async error => {
          if ('response' in error) {
            reject(await error.response.data);
          } else {
            reject(await error);
          }
        });
    });
  };

export const loginUserApi = async data => {
const url = `${BASE_API_URL}/auth/login`;
console.log('= = = = = = = = = LOGGING IN = = = = = = = = =');
console.log(url);
let response;
try {
    response = await postRequest(url, data);
} catch (error) {
    response = null;
}

return response;
};


export const signpostRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    console.log("My credentials: ",data)

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(async response => {
        const res = await response.json();
        resolve(res);
      })
      .catch(async error => {
        if ('response' in error) {
          reject(await error.response.data);
        } else {
          reject(await error);
        }
      });
  });
};



export const signupUserApi = async (data) => {
  const url = `${BASE_API_URL}/auth/register`;
  console.log("= = = = = = = = = SIGNING UP = = = = = = = = =");
  console.log(url);
  let response;
  try {
    response = await signpostRequest(url, data);
  } catch (error) {
    response = null;
  }

  return response;
};
