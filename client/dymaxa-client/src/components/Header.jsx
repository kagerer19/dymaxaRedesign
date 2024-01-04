import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
    return (
        <header className="px-4 md:px-6 h-16 md:h-20 flex flex-col md:flex-row items-center bg-[#1A202C] text-white">
            <div className="flex items-center mb-2 md:mb-0">
                <a className="hidden md:flex items-center gap-3 text-lg font-semibold sm:text-base mr-4 hover:text-gray-300" href="index.php">
          <span className="w-6 h-6 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
          </span>
                    <span className="hidden md:inline">Dymaxa Recruiting</span>
                </a>
            </div>
            <nav className="font-medium text-center sm:flex flex-row items-center space-x-5 md:space-x-10 text-sm lg:space-x-6">
                <a className="text-gray-500 dark:text-gray-400 hover:text-white" href="createUser.php">
                    Register
                </a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-white" href="login.php">
                    Login
                </a>
            </nav>
        </header>
    );
};

export default Header;