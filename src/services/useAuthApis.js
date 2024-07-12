import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    fetchLoginLogoutSuccess,
  fetchLoginStart,
  fetchLoginSuccess,
  fetchLoginSuccessWithoutPayload,
} from "../app/features/loginSlice";
import { toastError, toastSuccess } from "../helpers/Toastify";

const useAuthApis = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL + "/user";




  //! REGISTER -########################
  const registerApi = async (body) => {
    const url = base_url + "/register";
    console.log(url);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };

    try {
      dispatch(fetchLoginStart());
      const response = await fetch(url, options);
    //   console.log(response);
      const data = await response.json()
      if (!response.ok) {
        throw new Error("Response status: " + response.status+ " - " + data?.message);
      }
      dispatch(fetchLoginSuccessWithoutPayload());
      toastSuccess(data?.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      console.log(error?.message);
      toastError("Register failed - " + error?.message);
    }
  };




  //! LOGIN -########################
  const loginApi = async (body) => {
    const url = base_url + "/login";
    console.log(url);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };

    try {
      dispatch(fetchLoginStart());
      const response = await fetch(url, options);
    //   console.log(response);
      const data = await response.json()


      if (!response.ok) {

        throw new Error("Response status: " + response.status + " - " + (data?.message || "Login is Failed"));
      }

      
    //   console.log(data);
      dispatch(fetchLoginSuccess(data));
      toastSuccess('Login Successfull!');
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error?.message);
      toastError("Login is failed - " + error?.message);
    }
  };



  //! LOGOUT -########################
  const logout = async () => { 

    try {  
      dispatch(fetchLoginLogoutSuccess());
      toastSuccess('Logged out Successfully!');
      navigate("/login");
    } catch (error) {
      console.log(error);
      console.log(error?.message);
      toastError("Logout is failed - " + error?.message);
    }
  };

  return { registerApi, loginApi, logout,  };
};

export default useAuthApis;
