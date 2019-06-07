const fetch = require("node-fetch");

export const retrieveSecret = (input) => {
  let headers = {"Content-Type": "application/json"};
  let domain = process.env.REACT_APP_DOMAIN;
  return fetch("http://" + domain + ":8000/?input=" + input, {headers, })
    .then(res => res.status())
}
