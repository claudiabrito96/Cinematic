const makeGetRequest = async(url) => {
    return await fetch(url)
      .then(response => response.json())
      .then(data => JSON.stringify(data));
};

const makePostRequest = async (url, payload) => {
    let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({payload}),
      };
      const response = await fetch(url, options);
      return await response.text();
};

const makePutRequest = async (url, payload) => {
  let options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({payload}),
  };
  const response = await fetch(url, options);
  return await response.text();
};

const makeDeleteRequest = async (url) => {
  let options = { method: 'DELETE'};
  const response = await fetch(url, options);
  return await response.text();
};

const retrieveData = async () => {
  return await makeGetRequest('/api/entities');
};

export default {
    retrieveData: retrieveData
};