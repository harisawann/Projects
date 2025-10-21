const Cover = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="mt-[90px] w-full h-[300px] sm:h-[400px] rounded-[20px] flex justify-center items-center text-white bg-center bg-cover relative overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://cdn.shopify.com/s/files/1/0627/5517/files/02-26-20_Aidan_264883.jpg?v=1603213851')`,
                }}
            >
                <p className="text-[80px] sm:text-[100px] font-bold text-center">
                    HM Store
                </p>
            </div>

            {/* Sliding Banner Text */}
            <div className="border-2 border-[#e6ccb2] rounded-[10px] mt-[10px] overflow-hidden h-[60px] bg-[#ede0d4] flex items-center">
                <div 
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        animation: "slide 18s linear infinite"
                    }}
                >
                    <span className=" mr-10 tracking-[3px] text-3xl font-bold font-serif">WE BELIEVE IN QUALITY</span>
                </div>

                <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
            </div>
        </div>
    );
};

export default Cover;
