import { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/logo.svg";
import Vector from "../../shared/assets/Vector.png"
import Tablet from "../../shared/assets/tablet.png"
import BookIcon from "../../shared/assets/bookIcon.svg"
import SearchIcon from "../../shared/assets/searchIcon.svg"

const Header = () => {
  return (
    <header className="Header container mx-auto px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <NavLink to={"/"}>
          <img
            className="w-[112px] mb-3 md:mb-0"
            src={logo}
            width={112}
            alt="logo"
          />
        </NavLink>    
        {/* Navigation */}
        <div>
          <nav>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 list-none font-medium items-center">
              <li className=" w-[80px] h-12 active:bg-[#C61F1F] ">
                <NavLink to={""} className=" active:bg-[#C61F1F]">
                  <img className=" px-6" src={Vector} alt="" />
                  <span className=" mx-3 mt-4">
                    Home
                  </span>
                </NavLink>
              </li>
              <li className=" active:bg-[#C61F1F]  w-[80px] h-12">
                <NavLink to={"movies"} >
                  <img className=" px-6" src={Tablet} alt="" />
                  <span className=" px-3">
                    Movies
                  </span>
                </NavLink>
              </li>
              <li className=" w-[80px] h-12 active:text-[#C61F1F]  ">
                <NavLink to={"bookmark"}>
                  <img className="active:bg-[#C61F1F]  px-6" src={BookIcon} alt="icon" />
                  <span className=" px-">Bookmark</span>
                </NavLink>
              </li>

              <li className="  active:text-[#C61F1F]  ">
                <NavLink to={"search"}>
                  <img className=" mx-2 w-6 h-6" src={SearchIcon} alt="" />
                  <h2>Search </h2>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" flex gap-3 items-center">
          <span className="  rounded">
            <select className=" h-[30px] w-[70px]" name="uz" id="uz">
              <option value="uz">Uzb</option>
              <option value="rus">Rus</option>
              <option value="eng">English</option>
            </select>
          </span>
          <div>
            <ul>
              <li>
                <NavLink to={"login"}>
                  <button className=" w-[180px]  py-3 bg-red-600 text-white rounded-2xl">Logn</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
