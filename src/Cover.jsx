const Cover = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="mt-[90px] w-full h-[300px] sm:h-[400px] rounded-[20px] flex justify-center items-center text-white bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://cdn.shopify.com/s/files/1/0627/5517/files/02-26-20_Aidan_264883.jpg?v=1603213851')`,
        }}
      >
        <p className="text-[80px] sm:text-center sm:text-[100px] font-bold">
          HM Store
        </p>
      </div>

      {/* Banner/Slide Text */}
      <div className="h-[60px] bg-[#dedbd2] border-2 border-[#d5bdaf] rounded-[5px] flex justify-center items-center overflow-hidden m-[5px]">
        <p className="text-2xl sm:text-lg font-serif font-bold tracking-[5px] animate-marquee whitespace-nowrap">
          WE BELIEVE IN QUALITY
        </p>
      </div>
    </div>
  );
};

export default Cover;
