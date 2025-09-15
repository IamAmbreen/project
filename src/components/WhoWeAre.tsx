

const WhoWeAre = () => {
  const handleBookNowClick = () => {
    console.log();
  }
  return (
   <section className="h-100 bg-customBlue text-white lg:pt-47 lg:pb-24 ">
      <div className="text-center lg:mb-32">
            <h1 className=" md:text-5xl lg:text-6xl text-3xl font-semibold ">
                Why Savilles?
            </h1>
            <p className=" lg:px-91.5 font-thin text-center lg:w-full lg:text-[1.3rem] lg:font-normal tracking-wider lg:leading-9 lg:mt-10">
We are committed to offering reliable, efficient, and professional service, ensuring your garments are returned looking their best. When you choose Savilles, you're choosing a service that values your clothes as much as you do.
                  </p>
        </div>
           
  <div className="flex lg:px-72 gap-6 ">
    <img src="src/assets/icons/quote.open.png" alt="" className="md:h-[3.1rem] lg:h-[4.1rem] md:w-[4.44rem] lg:w-[5.44rem] w-[2rem] h-[1.31rem] "/>
    <p className="font-thin text-center md:text-[2rem] lg:text-[2rem] text-[0.88rem] lg:leading-12 lg:font-medium ">
      They are always on time, and as I have little time for myself I use their
      services through during working hours.
    </p>
    <img src="src/assets/icons/quote.close.png"alt=""className="md:h-[3.1rem] lg:h-[4.1rem] md:w-[4.44rem] lg:w-[5.44rem] w-[2rem] h-[1.31rem]"/>
  </div>

  
  <div className="md:w-[15.25rem] lg:w-[28.38rem] h-[1.38rem] w-[2.44rem] ml-auto md:mr-0  lg:mt-3 lg:mb-16 lg:mr-0 mr-9">
    <img src="src\assets\images\Google-Review-Logo 1.png" alt="" className=" lg:h-[4.5rem] lg:w-[7.38] "/>
  </div>

  
<div className=" flex justify-center lg:mt-12 ">
              <button type="button" className="flex gap-2 text-customBlue bg-customYellow items-center lg:text-[1.75rem] md:text-[1rem] text-xs md:rounded-full lg:rounded-full rounded-md px-10 py-4 md:px-16 lg:px-16 md:py-4 lg:py-7 lg:font-inter lg:font-bold text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600" onClick={handleBookNowClick}>
          <span>Book Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
          </div>


   </section>
  )
}

export default WhoWeAre
