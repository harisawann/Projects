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
        <div className="mt-[120px] flex h-auto ">
            <div className="border-2 border-black m-[50px] w-[50%] h-auto  rounded-[10px] p-[40px] ">
                <h2 className="inline-block ml-[7px] font-sans text-lg font-light " >Delivery</h2>
                <form onSubmit={handleSubmit}>
                    <select
                        className="border-1 border-lightgray block h-[40px] w-98 rounded-[5px] my-[10px] justify-center  "
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option>Pakistan</option>
                    </select>

                    <div className="inline-flex w-100 my-[10px] ">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="w-100 my-[10px]">
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apartment (Optional)"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                        />
                    </div>

                    <div className="w-100 my-[10px] flex ">
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Postal code (Optional)"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>

                    <div className="w-100 my-[10px]">
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <h2 className="inline-block ml-[7px] font-sans text-lg font-light "  >Shipping method</h2><br/>
                    <div className=" p-[5px] h-[30px] w-96 rounded-[5px] mx-[5px] my-[10px] inline-flex bg-[#caf0f846] border-1 border-[#0077b6] justify-between ">
                        <p>Standard</p>
                        <p>Free</p>
                    </div><br/>

                    <h2 className="inline-block ml-[7px] font-sans text-lg font-light ">Payment</h2><br/>
                    <div className=" p-[5px] h-[30px] w-96 rounded-[5px] mx-[5px] my-[10px] inline-flex bg-[#caf0f846] border-1 border-[#0077b6] self-center ">
                        <p>Cash On Delivery (COD)</p>
                    </div>
                    <div className="p-[5px] h-[30px] w-96 rounded-[5px] mx-[5px] my-[10px] inline-flex bg-[#caf0f846] border-1 border-[#0077b6] self-center ">
                        <p>Bank Details</p>
                    </div>

                    <button type="submit" className="flex p-[5px] border-1 border-lightgray h-[35px] w-96 rounded-[5px] mx-[5px] my-[10px] bg-[#1565c0] text-white font-sans text-lg items-center  border-none justify-center hover:cursor-pointer hover:bg-[#0d47a1] ">
                        Complete Order
                    </button>
                </form>
            </div>

            <div className="border-2 border-green m-[50px] w-[50%] h-auto rounded-[10px] bg-lightgray ">
                {product && (
                    <div className="m-[40px] inline-flex " >
                        <img className="h-[80px] w-[80px] rounded-[5px] flex " src={product.img}/>
                        <div className="m-[10px] p-[10px]">{product.name}</div>
                        <div className="m-[10px] p-[10px] ">{product.price}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Buy
