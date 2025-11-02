import { Link } from 'react-router'

const Listing = () => {

    const product = [
        {
            name: 'Arabic Aura Watch',
            price: 'RS.3,950',
            img: 'https://dnstore.pk/cdn/shop/files/37CF3CEE-2315-42B2-9153-E22C66C2F310.jpg?v=1742674819&width=533'
        },
        {
            name: 'SABR Armless Watch',
            price: 'RS.3,290',
            img: 'https://dnstore.pk/cdn/shop/files/63401A3E-B145-42B4-A66F-2DFB22F99D2B.jpg?v=1742672187&width=533'
        },
        {
            name: 'PP Square Leather Straps',
            price: 'RS.5,000',
            img: 'https://dnstore.pk/cdn/shop/files/7A197A23-BEE4-4764-9D11-314E300CD634.jpg?v=1754406861&width=533'
        },
        {
            name: 'PP Leather straps ',
            price: 'RS.4,950',
            img: 'https://dnstore.pk/cdn/shop/files/83E2AAB1-C5A7-406D-A4FD-16BD010BF92B.jpg?v=1754486118&width=533'
        },
        {
            name: 'Metallic Arabic Aura',
            price: 'RS.7,550',
            img: 'https://dnstore.pk/cdn/shop/files/C6E67528-F13D-4699-ABBD-62DB71B1280F.jpg?v=1752100533&width=533'
        },
        {
            name: 'Patek Philippe Stone Dial',
            price: 'RS.5,900',
            img: 'https://dnstore.pk/cdn/shop/files/C1F74DF4-CDEC-442D-AECB-BA17775EDA1F.jpg?v=1750584916&width=533'
        },

    ]

    return (
        <div>
            <div className="text-[60px] lg:text-[80px] text-center mt-20 font-sans ">Products</div>
            <div className="lg:grid lg:grid-cols-4 grid grid-cols-2" >
                {product.map((product, index) => (
                    <div key={index} className="my-2 mx-2 h-80 lg:h-103 inline-block lg:mx-5 lg:my-5 rounded-lg shadow-[0px_1px_3px_rgb(87,87,87)] ">
                        <div className=" rounded-[10px] lg:h-75 overflow-hidden ">
                            <img className="h-55 lg:h-85 w-100 rounded-[10px] hover:scale-110 transition duration-500 ease-in-out cursor-pointer" src={product.img} />
                        </div>
                        <div className="rounded-[10px]">
                            <p className="ml-2 font-serif font-thin text-sm lg:text-xl my-5">
                                {product.name}</p>
                            <div className="flex mx-2 justify-between " >
                                <div className="text-[20px] lg:text-2xl" >{product.price}</div>
                                <button className="text-[12px] lg:text-[17px] border border-green-900 bg-green-500 rounded-[5px] p-1 hover:translate-y-0.5 hover:bg-green-500 hover:translate-x-0.5 hover:shadow-[0px_0px_5px_2px_#8fb996] transition-all duration-300 ease-in-out cursor-pointer" >
                                    <Link to="/buy" state={{ product: product }}>
                                        BUY NOW
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Listing