

const WhoWeAre = () => {
  const handleBookNowClick = () => {
    console.log();
  }
  return (
   <section className="h-100 bg-customBlue text-white lg:pt-47 lg:pb-24 lg:py-0 py-15">
      <div className="text-center lg:mb-32 ">
            <h1 className="  lg:text-6xl text-[2.0625rem] lg:font-semibold font-bold lg:mb-0 mb-3">
                Why Savilles?
            </h1>
            <p className=" lg:px-91.5 text-center lg:w-full lg:text-[1.3rem] text-[0.625rem] font-medium lg:font-normal lg:tracking-wider tracking-wide lg:leading-9 leading-5 lg:mt-10 px-18.5">
We are committed to offering reliable, efficient, and professional service, ensuring your garments are returned looking their best. When you choose Savilles, you're choosing a service that values your clothes as much as you do.
                  </p>
        </div>
           
  <div className="flex lg:px-72 px-13 lg:gap-6 gap-2 lg:mt-0 mt-16 ">
    <img src="src/assets/icons/quote.open.png" alt="" className=" lg:h-[4.1rem]  lg:w-[5.44rem] w-[2rem] h-[1.31rem] "/>
    <p className=" text-center  lg:text-[2rem] text-[0.875rem] lg:leading-12 leading-4 font-medium  ">
      They are always on time, and as I have little time for myself I use their
      services through during working hours.
    </p>
    <img src="src/assets/icons/quote.close.png"alt=""className=" lg:h-[4.1rem]  lg:w-[5.44rem] w-[2rem] h-[1.31rem]"/>
  </div>

  
  <div className=" lg:w-[28.38rem] h-[1.38rem] w-[2.44rem] ml-auto   lg:mt-3 mt-1 lg:mb-16 lg:mr-0 mr-28">
    <img src="src\assets\images\Google-Review-Logo 1.png" alt="" className=" lg:h-[4.5rem] lg:w-[7.38] "/>
  </div>

  
<div className=" flex justify-center lg:mt-12 mt-28 ">
              <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow lg:text-[1.75rem]  text-[0.875rem] rounded-md lg:rounded-full  px-8.5  lg:px-22 lg:py-4.5 lg:font-inter lg:font-bold font-medium py-2.5 text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600"
          onClick={handleBookNowClick}>
          <span className="lg:normal-case uppercase ">Book Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block  w-3 h-3  lg:w-5 lg:h-5" />
        </button> 
          </div>


   </section>
  )
}

export default WhoWeAre
