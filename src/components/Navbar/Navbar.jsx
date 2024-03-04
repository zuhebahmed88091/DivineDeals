import "./Navbar.css";
import logo from "../../assets/xnxx.png";
import cart_icon from "../../assets/fart-cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar flex justify-around p-4 shadow-md ">
      <div className="nav-logo flex items-center gap-6">
        <img src={logo} className="w-[6rem]" alt="logo" />
        <p className="text-white text-2xl font-semibold hidden lg:block">
          DivineDeals
        </p>
      </div>
      <ul className="nav-menu hidden lg:flex items-center list-none gap-x-16 text-gray-600 text-base font-medium">
        <li
          className="flex flex-col text-xl text-white items-center justify-center cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="w-12 h-1 rounded-lg bg-red-400 border-red-400" />
          ) : (
            <></>
          )}{" "}
        </li>
        <li
          className="flex flex-col text-xl text-white items-center justify-center cursor-pointer"
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? (
            <hr className="w-10 h-1 rounded-lg bg-red-400 border-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col text-xl text-white items-center justify-center cursor-pointer"
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? (
            <hr className="w-20 h-1 rounded-lg bg-red-400 border-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col text-xl text-white items-center justify-center cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="w-12 h-1 rounded-lg bg-red-400 border-red-400" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-x-12 ">
        <Link to="/login">
          <button className="w-24 h-8 border text-sm border-gray-600 hidden lg:block rounded-full text-gray-600 font-medium bg-white hover:bg-gray-200 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-300">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} className="w-12" alt="cart" />
        </Link>
        <div className="nav-cart-count w-4 h-4 flex justify-center items-center -mt-9 -ml-14 rounded-full text-xs bg-red-500 text-white">
          0
        </div>
      </div>
    </div>
  );
}
