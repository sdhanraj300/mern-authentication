import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice.js";
import { logout } from "../slices/authSlice";
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <header className="w-[100vw] h-[10vh] bg-gray-900 flex flex-row justify-evenly items-center">
        <div className="">
          <Link to="/">
            <h1 className="text-white text-3xl">
            MERN Auth</h1>
          </Link>
        </div>
        {userInfo ? (
          <>
            <div className="text-2xl text-white flex flex-row gap-5">
              <Link to="/profile">{userInfo.name}</Link>
              <Link to="/logout">
                <button
                  onClick={logoutHandler}
                  className="text-xl flex flex-row justify-between items-center w-[120px]"
                >
                  <p className="mr-2">Sign Out</p>
                  <FaSignOutAlt className="text-3xl text-white" />
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-row gap-[50px] text-white w-[20%]">
            <div className="flex w-[400px] items-center">
              <Link to="/login">
                <button className="text-xl flex flex-row justify-between items-center w-[100px]">
                  <p>Sign In</p>
                  <FaSignInAlt className="text-3xl text-white" />
                </button>
              </Link>
            </div>
            <div className="flex w-[200px] items-center">
              <Link to="/register">
                <button className="text-xl flex flex-row justify-between items-center w-[120px]">
                  <p className="mr-2">Sign Out</p>
                  <FaSignOutAlt className="text-3xl text-white" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
