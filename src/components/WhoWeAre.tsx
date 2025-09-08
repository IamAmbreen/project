

const WhoWeAre = () => {
  const handleBookNowClick = () => {
    console.log();
  }
  return (
   <section className="h-100 bg-customBlue text-white md:px-16 lg:px-16 px-4 py-20">
      <div className="text-center">
            <h1 className=" md:text-7xl lg:text-7xl text-[33px] font-bold md:mt-5 lg:mt-5 md:mb-4 lg:mb-4 mt-3 mb-2">
                Why Savilles?
            </h1>
        </div>
        <div className=" md:mx-auto lg:mx-auto  md:w-[669px] lg:w-[669px] md:h-[144px] lg:h-[144px] w-[269px] text-[10px] mx-auto md:m-16 lg:m-16 font-thin text-center  md:text-[20px] lg:text-[20px] tracking-wider leading-normal">
            <p>
We are committed to offering reliable, efficient, and professional service, ensuring your garments are returned looking their best. When you choose Savilles, you're choosing a service that values your clothes as much as you do.
                  </p>
        </div>
       
  <div className="md:flex lg:flex flex md:w-[883px] lg:w-[883px] h-[65px] w-[313px] md:m-2 lg:m-2 m-2 md:mb-16 lg:mb-16 lg:mx-auto md:mx-auto mx-auto gap-4 ">
    <img src="src/assets/icons/quote.open.png" alt="" className="md:h-[65px] lg:h-[65px] md:w-[87px] lg:w-[87px] w-[32px] h-[21px] "/>
    <p className="font-thin text-center md:text-[32px] lg:text-[32px] text-[14px] w-[233] ">
      They are always on time, and as I have little time for myself I use their
      services through during working hours.
    </p>
    <img src="src/assets/icons/quote.close.png"alt=""className="md:h-[65px] lg:h-[65px] md:w-[87px] lg:w-[87px] w-[32px] h-[21px]"/>
  </div>

  
  <div className="md:w-[550px] lg:w-[550px] h-[22px] w-[39px] ml-auto">
    <img src="src\assets\images\Google-Review-Logo 1.png" alt="" className="  block mt-4"/>
  </div>

  
<div className=" flex md:px-32 lg:px-32 md:py-16 px-10 py-4 lg:py-16 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold md:text-2xl lg:text-2xl text-[14px] md:rounded-full lg:rounded-full rounded-md px-8 py-4 md:px-16 lg:px-16 md:py-4 lg:py-4  text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600 " onClick={handleBookNowClick}><span>Book Now</span></button>
            </div>


   </section>
  )
}

export default WhoWeAre
