import axios from "axios";

const API = axios.create({ baseURL: "https://dev-labs-server.vercel.app" });

/**
 *
 * @param {email and password} formData
 * @param {navigate function to redirect} navigate
 * @returns
 */
export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await API.post("/user/login", formData); // Contains the {token: token}
    console.log(data);

    const action = {
      type: "LOGIN",
      payload: data,
    };
    dispatch(action);
    navigate("/");
  } catch (error) {
    console.log(error);
    alert("Invalid Credentials");
  }
};

/**
 *
 * @param {firstname, lastname, email, password} formData
 * @param {navigate function to redirect} navigate
 * @returns
 */
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await API.post("/user/signup", formData); // Contains the {token: token}
    const action = {
      type: "LOGIN",
      payload: data,
    };
    dispatch(action);
    navigate("/");
  } catch (error) {
    console.log(error);
    alert("Email already exists");
  }
};
