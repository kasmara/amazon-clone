import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-14ca4/us-central1/api", // the API url (cloud function url)
});

export default instance;
