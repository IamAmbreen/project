

const WhoWeAre = () => {
  const handleBookNowClick = () => {
    console.log();
  }
  return (
   <section className="h-100 bg-customBlue text-white md:px-16 lg:px-16 px-4 py-20">
      <div className="text-center md:mb-12 lg:mb-12 mb-8">
            <h1 className=" md:text-5xl lg:text-6xl text-3xl font-bold md:mt-5 lg:mt-5 md:mb-4 lg:mb-4 mt-3 mb-2">
                Why Savilles?
            </h1>
            <p className=" md:mx-auto lg:mx-auto md:w-[37.97rem] lg:w-[41.812rem] w-[269px] text-[0.62rem] mx-auto md:m-16 lg:m-16 font-thin text-center  md:text-[1rem] lg:text-[1.3rem] tracking-wider leading-normal">
We are committed to offering reliable, efficient, and professional service, ensuring your garments are returned looking their best. When you choose Savilles, you're choosing a service that values your clothes as much as you do.
                  </p>
        </div>
           
  <div className="md:flex lg:flex flex md:w-[50.19rem] lg:w-[55.19rem] w-[19.56rem] md:m-2 lg:m-2 m-2 md:mb-10 lg:mb-10 mb-5 lg:mx-auto md:mx-auto mx-auto gap-4 ">
    <img src="src/assets/icons/quote.open.png" alt="" className="md:h-[3.1rem] lg:h-[4.1rem] md:w-[4.44rem] lg:w-[5.44rem] w-[2rem] h-[1.31rem] "/>
    <p className="font-thin text-center md:text-[2rem] lg:text-[2rem] text-[0.88rem] ">
      They are always on time, and as I have little time for myself I use their
      services through during working hours.
    </p>
    <img src="src/assets/icons/quote.close.png"alt=""className="md:h-[3.1rem] lg:h-[4.1rem] md:w-[4.44rem] lg:w-[5.44rem] w-[2rem] h-[1.31rem]"/>
  </div>

  
  <div className="md:w-[15.25rem] lg:w-[34.38rem] h-[1.38rem] w-[2.44rem] ml-auto md:mr-0 lg:mr-0 mr-9">
    <img src="src\assets\images\Google-Review-Logo 1.png" alt="" className=" "/>
  </div>

  
<div className=" flex md:px-32 lg:px-32 md:py-16 px-10 py-4 lg:py-16 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold lg:text-[1rem] md:text-[1rem] text-xs md:rounded-full lg:rounded-full rounded-md px-8 py-4 md:px-16 lg:px-16 md:py-4 lg:py-4  text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600 " onClick={handleBookNowClick}><span>Book Now</span></button>
            </div>


   </section>
  )
}

export default WhoWeAre
