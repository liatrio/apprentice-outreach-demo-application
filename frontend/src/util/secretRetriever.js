const fetch = require("node-fetch");

export const retrieveSecret = (input) => {
  let headers = {"Content-Type": "application/json"};
  return fetch("http://localhost:8000/?input=" + input, {headers, })
    .then(res => res.status())
}
