import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "X-Redmine-API-Key": "a74686292be38f49ccd2d961fb5353c911f098fb"
  },
});
