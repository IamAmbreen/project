

const WhoWeAre = () => {
  const handleBookNowClick = () => {
    console.log();
  }
  return (
   <section className="h-100 bg-customBlue text-white lg:pt-47 lg-m:pt-40 lg:pb-24 lg-m:pb-20 lg:py-0 lg-m:py-0 md:py-15 py-15">
      <div className="text-center lg:mb-32 lg-m:mb-28 md:mb-24 ">
            <h1 className="  lg:text-6xl lg-m:text-4xl md:text-3xl text-[2.0625rem] lg:font-semibold lg-m:font-semibold font-bold lg:mb-0 lg-m:mb-0  mb-3">
                Why Savilles?
            </h1>
            <p className=" lg:px-91 lg-m:px-67 md:px-52 text-center lg:w-full lg-m:w-full md:w-full lg:text-[1.3rem] lg-m:text-base md:text-sm text-[0.625rem] font-medium lg:font-normal lg-m:font-normal  lg:tracking-wider lg-m:tracking-wider tracking-wide lg:leading-9 lg-m:leading-8 leading-5 lg:mt-10 lg-m:mt-10 px-18.5">
We are committed to offering reliable, efficient, and professional service, ensuring your garments are returned looking their best. When you choose Savilles, you're choosing a service that values your clothes as much as you do.
                  </p>
        </div>
           
  <div className="flex lg:px-72 lg-m:px-67 md:px-48 px-13 lg:gap-6 lg-m:gap-3 gap-2 lg:mt-0 lg-m:mt-0 mt-16 ">
    <img src="src/assets/icons/quote.open.png" alt="" className=" lg:h-[4.1rem]  lg:w-[5.44rem] w-[2rem] h-[1.31rem] "/>
    <p className=" text-center  lg:text-[2rem] lg-m:text-[1.5rem] md:text-xl text-[0.875rem] lg:leading-12 lg-m:leading-9 leading-4 font-medium  ">
      They are always on time, and as I have little time for myself I use their
      services through during working hours.
    </p>
    <img src="src/assets/icons/quote.close.png"alt=""className=" lg:h-[4.1rem]  lg:w-[5.44rem] w-[2rem] h-[1.31rem]"/>
  </div>

  
  <div className=" lg:w-[28.38rem] lg-m:w-[28.38rem] md:w-[18.25rem]  h-[1.38rem] w-[2.44rem] ml-auto   lg:mt-3 lg-m:mt-3 md:mt-3 mt-1 lg:mb-16 lg-m:mb-16 lg:mr-0 lg-m:mr-0 md:mr-0 mr-28">
    <img src="src\assets\images\Google-Review-Logo 1.png" alt="" className=" lg:h-[4.5rem] lg:w-[7.38rem] lg-m:h-[4.5rem] lg-m:w-[7.38rem] md:h-[3.38rem] md:w-[5.44rem] "/>
  </div>

  
<div className=" flex justify-center lg:mt-12 mt-28 ">
               <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow lg:text-[1.75rem] lg-m:text-[1rem]  text-[0.875rem] rounded-md lg:rounded-full lg-m:rounded-full  px-8.5 lg:px-20 lg-m:px-15 lg:py-3 lg-m:py-5 lg:font-inter lg-m:font-inter lg:font-bold lg-m:font-bold font-medium py-2.5  text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600"
          onClick={handleBookNowClick}>
          <span className="">Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block lg-m:block  w-3 h-3 lg:w-5 lg:h-5 lg-m:w-4 lg-m:h-4" />
        </button>
          </div>


   </section>
  )
}

export default WhoWeAre
