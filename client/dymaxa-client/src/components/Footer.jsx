import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1A202C] text-white py-6 fixed bottom-0 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
          <span className="w-6 h-6 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
          </span>
                    <span className="hidden md:inline">Dymaxa Recruiting</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
