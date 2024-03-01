import "./Navbar.css";
import logo from "../../assets/xnxx.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar flex justify-around p-4 shadow-md">
      <div className="nav-logo flex items-center gap-6">
        <img src={logo} className="w-[6rem]" alt="logo" />
        <p className="text-white text-2xl font-semibold">DivineDeals</p>
      </div>
      <ul className="nav-menu flex items-center list-none gap-x-16 text-gray-600 text-base font-medium">
        <li
          className="flex flex-col text-xl text-white items-center justify-center cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop{" "}
          {menu === "shop" ? (
            <hr className="w-4/5 h-1 rounded-lg" />
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
          Men{" "}
          {menu === "men" ? (
            <hr className="w-4/5 h-1 rounded-lg" />
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
          Women{" "}
          {menu === "women" ? (
            <hr className="w-4/5 h-1 rounded-lg" />
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
          Kids{" "}
          {menu === "kids" ? (
            <hr className="w-4/5 h-1 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-x-16">
        <button className="w-24 h-8 border text-xl border-gray-600 rounded-full text-gray-600  font-medium bg-white hover:bg-gray-200 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-300">
          Login
        </button>
        <img src={cart_icon} alt="cart" />
        <div className="nav-cart-count w-4 h-4 flex justify-center items-center -mt-9 -ml-14 rounded-full text-xs bg-red-500 text-white">0</div>
      </div>
    </div>
  );
}
