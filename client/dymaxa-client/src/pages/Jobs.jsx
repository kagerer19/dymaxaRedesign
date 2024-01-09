import React from "react";
import NavRecruit from "../components/Nav-recruit.jsx";
import NavAupair from "../components/Nav-aupair.jsx";
import JobsHero from "../components/JobsHero.jsx";

const Jobs = () => {
    return (
        <>
            <header
                className="px-4 md:px-6 h-16 md:h-20 flex justify-around items-center bg-[#F8F7F2] text-gray-700 border-b-2 border-[#7bf1a8]">
                <div className="flex items-center mb-2 md:mb-0 align-middle">
                    <img className={"header-logo md:mt-0 mt-3"} src={"src/assets/Dymaxa-logo.png"}
                         alt={"Four leaf clover"}/>
                    <a className="hidden md:flex items-center gap-3 text-lg font-semibold sm:text-base mr-4 mb-1 hover:text-gray-300"
                       href="#">
                        <span className="hidden md:inline text-black">Dymaxa Recruiting</span>
                    </a>
                </div>
                <div className="flex gap-5">
                    <NavRecruit/>
                    <NavAupair/>
                </div>
            </header>
            <JobsHero />
        </>
    );
};

export default Jobs;