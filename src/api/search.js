/**
 * Api
 * @param method {string} GET or PUT
 * @param id {string | null} id of response from the Details page
 * @param payload {string | object | null}
 * @returns {Promise}
 * @description this currently handles 3 options
 */
const Api = async (method, id, payload = null) => {
  let url = "http://localhost:8000/students";
  url = id ? `${url}/${id}` : url;

  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.log("error------", error);
    return error;
  }
};

export const read = (id = null) => Api("GET", id);

export const update = (id, payload) => Api("PUT", id, payload);
