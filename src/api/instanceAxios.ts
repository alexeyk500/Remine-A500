import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "X-Redmine-API-Key": process.env.REACT_APP_REDMINE_KEY ?? "",
  },
});
