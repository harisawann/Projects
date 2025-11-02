import { useState, useEffect } from 'react';
import { Link } from "react-router";

const Slide = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
    }, [show]);

    const navItems = [
        { label: "Home", link: "/home", icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png" },
        { label: "Products", link: "/listing", icon: "https://cdn-icons-png.flaticon.com/128/9238/9238294.png" },
        { label: "About", link: "/about", icon: "https://cdn-icons-png.flaticon.com/128/3916/3916720.png" },
        { label: "Contact", link: "/contact", icon: "https://cdn-icons-png.flaticon.com/128/3095/3095610.png" },
        { label: "Help", link: "/help", icon: "https://cdn-icons-png.flaticon.com/128/3916/3916693.png" }
    ];

    return (
        <div className="fixed top-0 left-0 right-0 bg-white z-[9999] rounded-[20px]">
            {/* Navbar */}
            <div className="border border-lightslategray rounded-[20px] bg-white overflow-hidden flex justify-between items-center px-2 shadow-[0px_1px_3px_1px_gray] relative z-[60] h-[70px]">                
                <div>
                    <img
                        className="block m-[5px] h-[30px] w-[30px] cursor-pointer"
                        onClick={() => setShow(!show)}
                        src="https://cdn-icons-png.flaticon.com/128/3917/3917215.png"
                    />
                </div>

                <div>
                    <img
                        className="h-[70px] rounded-[20px]"
                        src="https://i.pinimg.com/736x/1d/15/5b/1d155b07cb2ad9daf581f5f559f7ac4a.jpg"
                        alt="Logo"
                    />
                </div>

                <div className="inline-flex h-[70px] z-1 ">
                    <Link to="/cart" className="group flex">
                        <img
                            className="inline-block h-[30px] w-[30px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                            src="https://cdn-icons-png.flaticon.com/128/3916/3916598.png"
                            alt="Cart"
                        />
                    </Link>
                </div>
            </div>

            {/* Slide Menu */}
            <div
                className={`fixed top-[70px] left-0 right-0 h-[calc(100vh-70px)] bg-white z-0 transform transition-transform duration-700 ease-out rounded-b-[10px] ${show ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {navItems.map((item, i) => (
                    <Link
                        key={i}
                        to={item.link}
                        onClick={() => setShow(false)}
                        className="border-x-0 border-t-0 border-b border-solid border-gray-300 group flex items-center h-[60px] p-5 mx-0 cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                        <img
                            className="h-[30px] w-[30px] mr-3 transition-transform duration-500 ease-out group-hover:translate-y-0"
                            src={item.icon}
                            alt={item.label}
                        />
                        <span className="text-2xl transition-opacity duration-500 opacity-100">{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Slide;
