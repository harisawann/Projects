import { useState } from 'react';
import { Link } from "react-router";


const Navbar = () => {

    const [show, setshow] = useState(false)

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 z-1000  bg-white rounded-[20px]  ">
                <div className="border-lightslategray-1 rounded-[20px] flex justify-between items-center px-10 shadow-[0px_1px_3px_1px_grey] ">


                    <div className="inline-block" >
                        <img className="h-[70px] rounded-[20px]" src="https://i.pinimg.com/736x/1d/15/5b/1d155b07cb2ad9daf581f5f559f7ac4a.jpg"></img>
                    </div>


                    <div className="flex h-[70px]">
                        <div className="group h-auto w-[75px] text-center mx-[35px] justify-between cursor-pointer">
                            <img
                                className="inline-block h-[22px] w-[22px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                                src="https://cdn-icons-png.flaticon.com/128/3917/3917033.png"
                                alt="Home"
                            />
                            <div className="font-normal block opacity-0 translate-y-[5px] transition ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                <Link to="/home">Home</Link>
                            </div>
                        </div>


                        <div className="group h-auto w-[75px] text-center mx-[35px] justify-between cursor-pointer">
                            <img
                                className="inline-block h-[22px] w-[22px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                                src="https://cdn-icons-png.flaticon.com/128/9238/9238294.png"
                                alt="Products"
                            />
                            <div className="font-normal block opacity-0 translate-y-[5px] transition ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                <Link to="/listing">Products</Link>
                            </div>
                        </div>

                        <div className="group h-auto w-[75px] text-center mx-[35px] justify-between cursor-pointer">
                            <img
                                className="inline-block h-[22px] w-[22px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                                src="https://cdn-icons-png.flaticon.com/128/3916/3916720.png"
                                alt="About"
                            />
                            <div className="font-normal block opacity-0 translate-y-[5px] transition ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                <Link to="/about">About</Link>
                            </div>
                        </div>

                        <div className="group h-auto w-[75px] text-center mx-[35px] justify-between cursor-pointer">
                            <img
                                className="inline-block h-[22px] w-[22px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                                src="https://cdn-icons-png.flaticon.com/128/3095/3095610.png"
                                alt="Contact"
                            />
                            <div className="font-normal block opacity-0 translate-y-[5px] transition ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                Contact
                            </div>
                        </div>

                        <div className="group h-auto w-[75px] text-center mx-[35px] justify-between cursor-pointer">
                            <img
                                className="inline-block h-[22px] w-[22px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                                src="https://cdn-icons-png.flaticon.com/128/3916/3916693.png"
                                alt="Help"
                            />
                            <div className="font-normal block opacity-0 translate-y-[5px] transition ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                <Link to="/help">Help</Link>
                            </div>
                        </div>
                    </div>

                    <div className="inline-flex h-[70px]">
                        <div className="group h-auto w-[75px] text-center mx-[35px] justify-between cursor-pointer">
                            <img
                                className="inline-block h-[22px] w-[22px] mt-[10px] mb-[5px] translate-y-[12px] transition ease-out duration-500 group-hover:translate-y-0"
                                src="https://cdn-icons-png.flaticon.com/128/3916/3916598.png"
                                alt="Cart" />
                            <div className="font-normal block opacity-0 translate-y-[5px] transition ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                Cart
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Navbar