import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = (msg)=> {
    toast.success("🎭 "+msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
}
export const toastWarn = (msg)=> {
    toast.warn("🎭 "+msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
}
export const toastError = (msg)=> {
    toast.error("🎭 "+msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
}