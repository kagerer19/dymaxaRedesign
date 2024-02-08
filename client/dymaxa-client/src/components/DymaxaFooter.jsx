import React from "react";
const DymaxaFooter = () => {
    return (
        <footer className="flex flex-col justify-around bottom-0 w-full bg-[#132027] text-white py-6">
            <div className="container flex flex-col md:flex-row justify-between items-center h-full">
                <div className="flex items-center flex-col mb-5 md:mb-0">
                    <img className={"header-logo"} src={"https://res.cloudinary.com/diufjedfn/image/upload/f_auto,q_auto/Dymaxa-logo"} alt={"Four leaf clover"}/>
                    <a className="flex items-center gap-3 text-lg font-semibold sm:text-base md:text-lg mt-2 md:mt-0 hover:text-gray-300"
                       href="/">
                        <span>Dymaxa Recruiting</span>
                    </a>
                    <div className="ml-8 mt-4 text-center text-sm text-gray-500 md:text-base">© 2024 Dymaxa Recruiting.
                        All
                        Rights Reserved.
                    </div>
                </div>

                <div className="flex lg:space-x-19 space-x-9 justify-end pr-6 whitespace-nowrap">
                    <div className="flex flex-col text-center">
                        <h3 className="text-lg font-semibold mb-2 ">About Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a className="hover:underline">Our Story</a>
                            </li>
                            <li>
                                <a className="hover:underline">News</a>
                            </li>
                            <li>
                                <a href={'/'} className="hover:underline">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-center">
                        <h3 className="text-lg font-semibold mb-2">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a className="hover:underline">Support</a>
                            </li>
                            <li>
                                <a className="hover:underline">Enquiries</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-center"> {/* Added text-center */}
                        <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a className="hover:underline">Facebook</a>
                            </li>
                            <li>
                                <a className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DymaxaFooter;
