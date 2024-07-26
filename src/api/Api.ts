import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-dev.akov-developpement.fr/",
});
export default Api;
