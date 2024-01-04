import React from "react";
import ReactDOM from "react-dom/client";
import NavRecruit from "./Nav-recruit.jsx";
import NavAupair from "./Nav-aupair.jsx";

const Header = () => {
    return (
        <header
            className="px-4 md:px-6 h-16 md:h-20 flex justify-around items-center bg-[#F8F7F2] text-gray-700 border-b-2 border-[#7bf1a8]">
            <div className="flex items-center mb-2 md:mb-0 align-middle">
                <img className={"header-logo"} src={"src/assets/Dymaxa-logo.png"} alt={"Four leaf clover"}/>
                <a className="hidden md:flex items-center gap-3 text-lg font-semibold sm:text-base mr-4 mb-1 hover:text-gray-300"
                   href="#">
                    <span className="hidden md:inline">Dymaxa Recruiting</span>
                </a>
            </div>
            <div className="flex gap-5">
                <NavRecruit/>
                <NavAupair/>
            </div>
        </header>
    );
};

export default Header;