import { useState } from 'react'
import { Link } from 'react-router'
import { useLocation } from "react-router";



const Buy = () => {


    const location = useLocation();
    const { product } = location.state || {};

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [apartment, setApartment] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("Pakistan")

    const handleSubmit = (e) => {
        e.preventDefault()
        const orderData = {
            firstName,
            lastName,
            address,
            apartment,
            city,
            postalCode,
            phone,
            country,
            product,
        }
        console.log("Order placed:", orderData)
    }

    return (
        <div className="mt-[120px] block lg:flex h-auto p-[10px] ">


            <div className="border-2 border-black my-[15px] lg:m-[50px] w-full lg:w-[50%] h-auto  rounded-[10px] p-[40px]  flex bg-lightgray">
                {product && (
                    <div className="border-1 border-gray-400 rounded-[5px] m-auto ">
                        <div className="flex items-center justify-center " >
                            <img className="m-[10px] border-1 border-gray-500 rounded-xl h-[200px] w-[200px] " src={product.img} />
                        </div>
                        <div className=" w-fit block justify-center ">
                            <div className=" block text-2xl h-auto w-auto m-[10px] p-[5px]">{product.name}</div>
                            <div className=" block text-xl h-auto  m-[10px] p-[5px] ">{product.price}</div>
                        </div>
                    </div>
                )}
            </div>  


            <div className="border-2 border-black mb-[10px] lg:m-[50px]  lg:w-[50%] w-[100%] h-auto rounded-[10px] p-[40px] ">
                <h2 className="inline-block ml-[7px] font-sans text-2xl font-medium " >Delivery</h2>
                <form onSubmit={handleSubmit}>
                    <select
                        className="border-1 border-lightgray block h-[40px] lg:w-100 w-full rounded-[5px] my-[10px] justify-center  "
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option>Pakistan</option>
                    </select>

                    <div className="lg:inline-flex inline-block lg:w-100 w-full my-[2px] justify-between ">
                        <input className="border-1 border-gray-500 my-[5px] lg:my-[5px] rounded-[2px] p-[2px] w-full lg:w-fit "
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input className="border-1 border-gray-500 my-[5px] lg:my-[5px] rounded-[2px] p-[2px] w-full lg:w-fit"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="lg:w-100 w-full my-[2px] lg:inline-flex inline-block justify-between ">
                        <input className="border-1 border-gray-500 my-[5px] lg:my-[5px] rounded-[2px] p-[2px] w-full lg:w-fit"
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <input className="border-1 border-gray-500 my-[5px] lg:my-[5px] rounded-[2px] p-[2px] w-full lg:w-fit"
                            type="text"
                            placeholder="Apartment (Optional)"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                        />
                    </div>

                    <div className=" lg:w-100 w-full my-[2px] lg:inline-flex inline-block  justify-between ">
                        <input className="border-1 border-gray-500 my-[5px] lg:my-[5px] rounded-[2px] p-[2px] w-full lg:w-fit"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <input className="border-1 border-gray-500 my-[5px] lg:my-[5px] rounded-[2px] p-[2px] w-full lg:w-fit"
                            type="text"
                            placeholder="Postal code (Optional)"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>

                    <div className="lg:w-100 w-full my-[2px]">
                        <input className="border-1 border-gray-500 rounded-[2px] w-full  p-[2px]"
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <h2 className="inline-block ml-[7px] font-sans text-2xl font-medium "  >Shipping method</h2><br />
                    <div className=" p-[5px] h-[30px] lg:w-100 w-full rounded-[5px]  my-[10px] inline-flex bg-[#caf0f846] border-1 border-[#0077b6] justify-between ">
                        <p>Standard</p>
                        <p>Free</p>
                    </div><br />

                    <h2 className="inline-block ml-[7px] font-sans text-2xl font-medium ">Payment</h2><br />
                    <div className=" p-[5px] h-[30px] lg:w-100 w-full rounded-[5px]  my-[10px] inline-flex bg-[#caf0f846] border-1 border-[#0077b6] self-center ">
                        <p>Cash On Delivery (COD)</p>
                    </div>
                    <div className="p-[5px] h-[30px] lg:w-100 w-full rounded-[5px]  my-[10px] inline-flex bg-[#caf0f846] border-1 border-[#0077b6] self-center ">
                        <p>Bank Details</p>
                    </div>

                    <button type="submit" className="flex p-[5px] border-1 border-lightgray h-[35px] lg:w-100 w-full rounded-[5px] my-[10px] bg-[#1565c0] text-white font-sans text-lg items-center  border-none justify-center hover:cursor-pointer hover:bg-[#0d47a1] ">
                        Complete Order
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Buy
