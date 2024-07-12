import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toastWarn } from '../helpers/Toastify';
import useAuthApis from '../services/useAuthApis';

const Register = () => {
const {registerApi} = useAuthApis();



    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:""
    });
    const handleChange = (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e)=> {
        e.preventDefault();


if(!inputs.email || !inputs.password){
    toastWarn("Email and password fields are mandatory!")
}

console.log(inputs);
registerApi(inputs)



    }
  return (
    <section className="bg-gray-700">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div
      className="flex items-center mb-6 text-2xl font-semibold text-white"
    >
      🎭
      TODO Fullstack
    </div>
    <div className="w-full  rounded-lg shadow  border md:mt-0 sm:max-w-md xl:p-0  bg-gray-800  border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Register
        </h1>
        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Your Username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className="  border    rounded-lg    block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
              placeholder="Username"
              required={true}
              value={inputs.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="  border    rounded-lg    block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
              placeholder="name@company.com"
              required={true}
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className=" border    rounded-lg    block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
              required={true}
              value={inputs.password}
              onChange={handleChange}

            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              
              
            </div>
            
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-500   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center    hover:bg-primary-700 focus:ring-primary-800"
          >
            Sign Up
          </button>
          <p className="text-sm font-light  text-gray-400">
            Do have an account?{" "}
            <Link
              to="/login"
              className="font-medium  hover:underline  text-primary-500"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Register
