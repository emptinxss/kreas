import axios from "axios";

export default (
  url = "https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json"
) => {
  return axios.create({
    baseURL: url,
  });
};
