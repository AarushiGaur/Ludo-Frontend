import axios from "axios";

const API_URL = "http://localhost:60800/api/auth/";

const register = (username, phone,email, password) => {
  return axios.post(API_URL + "register", {
    username,
    phone,
    email,
    password,
  });
};

const login = (phone, password) => {
  return axios
    .post(API_URL + "login", {
      phone,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};