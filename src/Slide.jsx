import { useState, useEffect } from 'react';
import { Link } from "react-router";

const Slide = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
    }, [show]);

    const navItems = [
        {
            label: "Home",
            link: "/home",
            icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png"
        },
        {
            label: "Products",
            link: "/listing",
            icon: "https://cdn-icons-png.flaticon.com/128/9238/9238294.png"
        },
        {
            label: "About",
            link: "/about",
            icon: "https://cdn-icons-png.flaticon.com/128/3916/3916720.png"
        },
        {
            label: "Contact",
            link: "/contact",
            icon: "https://cdn-icons-png.flaticon.com/128/3095/3095610.png"
        },
        {
            label: "Help",
            link: "/help",
            icon: "https://cdn-icons-png.flaticon.com/128/3916/3916693.png"
        }
    ];

    return (
        <div className="fixed top-0 left-0 right-0 mx-[0px] z-[1000] bg-white rounded-[20px]">
            <div className="border border-lightslategray rounded-[20px] flex justify-between items-center px-2 shadow-[0px_1px_3px_1px_grey]">

                <div>
                    <img
                        className="block m-[5px] h-[30px] w-[30px] cursor-pointer"
                        onClick={() => setShow(!show)}
                        src="https://cdn-icons-png.flaticon.com/128/3917/3917215.png"
                    />

                    <div className={`fixed top-0 left-0 right-0 h-screen w-full flex flex-col bg-black transform transition-transform duration-500 ease-out ${show ? "translate-y-0" : "-translate-y-full"}`}>          
                        <div className="mt-[50px] "></div>              
                        {navItems.map((item, i) => (                            
                            <Link                            
                                key={i}
                                to={item.link}
                                onClick={() => setShow(false)}                                
                                className="border-1 border-solid border-b-gray-600  group flex items-center h-[60px]  p-5 mx-0 cursor-pointer hover:bg-gray-200 transition-colors">
                                <img
                                    className="invert h-[30px] w-[30px] mr-3 transition-transform duration-500 ease-out group-hover:translate-y-0"
                                    src={item.icon}
                                    alt={item.label}
                                />
                                <span className="text-white text-2xl transition-opacity duration-500 opacity-100">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <img
                        className="h-[70px] rounded-[20px]"
                        src="https://i.pinimg.com/736x/1d/15/5b/1d155b07cb2ad9daf581f5f559f7ac4a.jpg"
                        alt="Logo"
                    />
                </div>

                <div className={`inline-flex h-[70px] ${show ? "z-[-1]" : ""}`}>
                    <Link
                        to="/cart"
                        className="group flex">
                        <img
                            className="inline-block h-[30px] w-[30px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                            src="https://cdn-icons-png.flaticon.com/128/3916/3916598.png"
                            alt="Cart"
                        />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Slide;
