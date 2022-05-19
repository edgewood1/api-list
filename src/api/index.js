const search = () => {
  try {
    const url = `https://api.hatchways.io/assessment/students`;
    return fetch(url)
      .then((response) => response.json())
      .then((response) => response);
  } catch (err) {
    console.log("api error", err);
    throw Error(err);
  }
};

export default search;
