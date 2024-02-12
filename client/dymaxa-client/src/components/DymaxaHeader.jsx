import React, {useEffect, useRef, useState} from "react";
import NavRecruit from "./Nav-recruit.jsx";
import LoginOptions from "./LoginOptions.jsx";

const DymaxaHeader = () => {
    const [hasAdminCookie, setHasAdminCookie] = useState(false);
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted.current) {
            const cookies = document.cookie.split(';');
            const isAdminCookiePresent = cookies.some(cookie => cookie.trim().startsWith('adminCookie='));
            setHasAdminCookie(isAdminCookiePresent);
        }
        return () => {
            isMounted.current = false;
        };
    }, [hasAdminCookie]);

    return (
        <header
            className="px-4 md:px-6 h-16 md:h-20 flex justify-around items-center bg-[#F8F7F1]3 border-b-2 border-[#7bf1a8]">
            <div className="flex items-center mb-2 md:mb-0 align-middle">
                <img className={"header-logo md:mt-0 mt-3"} src={"https://res.cloudinary.com/diufjedfn/image/upload/v1706535518/Dymaxa-logo.png"}
                     alt={"Four leaf clover"}/>
                <a className="hidden md:flex items-center gap-3 text-lg font-semibold sm:text-base mr-4 mb-1 hover:text-gray-300"
                   href="/">
                    <span className="hidden md:inline text-black">Dymaxa Recruiting</span>
                </a>
            </div>
            <div className="flex gap-4 items-center">
                <NavRecruit/>
                {hasAdminCookie && <LoginOptions/>}
            </div>
        </header>
    );
};

export default DymaxaHeader;
