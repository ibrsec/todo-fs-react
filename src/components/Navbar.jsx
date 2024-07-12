import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuthApis from '../services/useAuthApis'


const Navbar = () => {
  const {logout} = useAuthApis();

  const {username,token} = useSelector(state => state.login);
  console.log(username);
  return (
    <nav className="px-5 py-8 bg-gray-400">
      <div className="flex items-center justify-between ">
        <div className="logo">
          <Link to="/">
          <h3 className="text-3xl text-[#3c295b] font-[600]">🎭 Todo-FS</h3>
          </Link>
        </div>
        <div className="profile flex items-center gap-3">
          <span className="username">{username}</span>
          
          {
            token && <div className="logout cursor-pointer" onClick={logout}>⚡️ Logout</div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
