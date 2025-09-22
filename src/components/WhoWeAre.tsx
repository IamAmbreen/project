

const WhoWeAre = () => {
  const handleBookNowClick = () => {
    console.log();
  }
  return (
   <section className="h-100 bg-customBlue text-white lg-m:pt-40 lg:pt-47 xl:pt-65 lg-m:pb-20 lg:pb-24 xl:pb-38 py-15 md:py-15 lg-m:py-0 lg:py-0 xl:py-0 ">
      <div className="text-center md:mb-24  lg-m:mb-28 lg:mb-32  xl:mb-48 ">
            <h1 className="  text-[2.0625rem]  md:text-3xl lg-m:text-4xl lg:text-6xl  xl:text-9xl font-bold lg-m:font-semibold lg:font-semibold  mb-3 lg-m:mb-0 lg:mb-0 xl:mb-0 ">
                Why Savilles?
            </h1>
            <p className=" px-18.5 md:px-52 lg-m:px-67 lg:px-91 xl:px-96  text-center  md:w-full lg-m:w-full lg:w-full    text-[0.625rem] md:text-sm lg-m:text-base  lg:text-[1.3rem] xl:text-[2.5rem] font-medium lg:font-normal lg-m:font-normal xl:tracking-wider lg:tracking-wider lg-m:tracking-wider tracking-wide xl:leading-16 lg:leading-9 lg-m:leading-8 leading-5 lg:mt-10 xl:mt-20 lg-m:mt-10 ">
We are committed to offering reliable, efficient, and professional service, ensuring your garments are returned looking their best. When you choose Savilles, you're choosing a service that values your clothes as much as you do.
                  </p>
        </div>
           
  <div className="flex xl:px-91 lg:px-72 lg-m:px-67 md:px-48 px-13 lg:gap-6 xl:gap-0 lg-m:gap-3 gap-2 lg:mt-0 lg-m:mt-0 mt-16 ">
    <img src="src/assets/icons/quote.open.png" alt="" className=" lg:h-[4.1rem]  lg:w-[5.44rem] w-[2rem] h-[1.31rem] "/>
    <p className=" text-center xl:text-[4rem] lg:text-[2rem] lg-m:text-[1.5rem] md:text-xl text-[0.875rem] xl:leading-16 lg:leading-12 lg-m:leading-9 leading-4 font-medium  ">
      They are always on time, and as I have little time for myself I use their
      services through during working hours.
    </p>
    <img src="src/assets/icons/quote.close.png"alt=""className=" lg:h-[4.1rem]  lg:w-[5.44rem] w-[2rem] h-[1.31rem]"/>
  </div>

  
  <div className=" xl:w-[40rem] lg:w-[28.38rem] lg-m:w-[28.38rem] md:w-[18.25rem]  h-[1.38rem] w-[2.44rem] ml-auto   lg:mt-3 lg-m:mt-3 md:mt-3 mt-1 lg:mb-16 lg-m:mb-16 lg:mr-0 lg-m:mr-0 md:mr-0 mr-28">
    <img src="src\assets\images\Google-Review-Logo 1.png" alt="" className=" xl:h-[6.65rem] xl:w-[11.38rem] lg:h-[4.5rem] lg:w-[7.38rem] lg-m:h-[4.5rem] lg-m:w-[7.38rem] md:h-[3.38rem] md:w-[5.44rem] "/>
  </div>

  
<div className=" flex justify-center lg:mt-12 mt-28 xl:mt-52 ">
               <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow text-[0.875rem] lg-m:text-[1rem] lg:text-[1.75rem] xl:text-[2rem]  rounded-md lg-m:rounded-full lg:rounded-full xl:rounded-full  px-8.5 lg-m:px-15 lg:px-20  xl:px-24 py-2.5 lg-m:py-5 lg:py-3 xl:py-7 lg-m:font-inter font-medium  lg:font-inter lg-m:font-bold lg:font-bold   text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600"
          onClick={handleBookNowClick}>
          <span className="hidden lg:block lg-m:block   ">Order Now</span>
          <span className="uppercase lg:hidden lg-m:hidden ">Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg-m:block lg:block xl:block  w-3 h-3 lg-m:w-4 lg-m:h-4 lg:w-5 lg:h-5 xl:w-8 xl:h-7 " />
        </button>
          </div>


   </section>
  )
}

export default WhoWeAre
