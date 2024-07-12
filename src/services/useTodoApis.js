
import { useDispatch, useSelector } from "react-redux"; 
import { fetchTodoStart, fetchTodoSuccess, fetchTodoSuccessWithoutPayload } from "../app/features/todoSlice";
import { toastError, toastSuccess, toastWarn } from "../helpers/Toastify";
import { useNavigate } from "react-router-dom";
import useAuthApis from "./useAuthApis";

const useTodoApis = () => {
  const base_url = process.env.REACT_APP_BASE_URL + "/todos";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);
//   const token = "useSelector((state) => state.login.token)";

const{logout} = useAuthApis();

  //! GET TODOS - #####################
  const getTodos = async () => {
    const url = base_url;
    console.log(base_url);
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      dispatch(fetchTodoStart());
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        expiredSession(response,navigate,logout);
        throw new Error(
          "Response status: " +
            response.status +
            " - " +
            (data?.message || "Listing todos is Failed")
        );
      }

      dispatch(fetchTodoSuccess(data?.result));
    } catch (error) {
      console.log(error);
      console.log(error?.message);
      toastError("List todos Failed -", error?.message);
    }
  };


  //! Post Todo - #####################
  const createTodo = async (body) => {
    const url = base_url;
    console.log(base_url);
    const options = {
      method: "POST",
      headers: {
        'content-type':'application/json',
        Authorization: "Bearer " + token,
      },
      body:JSON.stringify(body)
    };
    try {
      dispatch(fetchTodoStart());
      const response = await fetch(url, options);
      const data = await response.json();
      if (!response.ok) {
        expiredSession(response,navigate,logout);
        throw new Error(
          "Response status: " +
            response.status +
            " - " +
            (data?.message || "Creating todo is Failed")
        );
      }
      toastSuccess(data?.message);
      await dispatch(fetchTodoSuccess(data?.result));
      getTodos();
    } catch (error) {
      console.log(error);
      console.log(error?.message);
      toastError("Post todo Failed -", error.message);
      
    }
  };

  //! Put Todo - #####################
  const updateTodo = async (id, body) => {
    const url = base_url +"/"+id;
    console.log(base_url);
    const options = {
      method: "PUT",
      headers: {
        'content-type':'application/json',
        Authorization: "Bearer " + token,
      },
      body:JSON.stringify(body)
    };

    console.log(body);
    try {
      dispatch(fetchTodoStart());
      const response = await fetch(url, options);
      const data = await response.json();
      if (!response.ok) {
        expiredSession(response,navigate,logout);
        throw new Error(
            response.status +
            " - " +
            (data?.message || "Update todo is Failed")
        );
      }
      toastSuccess(data?.message);
      dispatch(fetchTodoSuccessWithoutPayload());
      getTodos();
    } catch (error) {
    //   console.log(error);
      console.log(error?.message);
      toastError("Update todo Failed -", error?.message);
    }
  };
  //! Delete Todo - #####################
  const deleteTodo = async (id) => {
    const url = base_url +"/"+id;
    console.log(base_url);
    const options = {
      method: "DELETE",
      headers: {
        'content-type':'application/json',
        Authorization: "Bearer " + token,
      },
    };
    try {
      dispatch(fetchTodoStart());
      const response = await fetch(url, options);
      const data = await response.json();
      if (!response.ok) {
        expiredSession(response,navigate,logout);
        throw new Error(
            response.status +
            " - " +
            (data?.message || "Delete todo is Failed")
        );
      }
      toastSuccess(data?.message || "Deleted successfullly");
      dispatch(fetchTodoSuccessWithoutPayload());
      getTodos();
    } catch (error) {
    //   console.log(error);
      console.log(error?.message);
      toastError("Delete todo Failed -", error?.message);
    }
  };

  return { getTodos,createTodo, updateTodo,deleteTodo };
};

export default useTodoApis;


const expiredSession = function(respoonse,navigate,logout) {
    if(respoonse?.status === 401 ){
        toastWarn("Session is expired!")
        logout();
    }
}