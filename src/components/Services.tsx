

const Services = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
    <section className="h-100  bg-customBlue text-white lg:pt-35 ">
           <div className="max-w-full ">
             <h2 className=" lg:px-72 text-center md:text-[3rem] lg:text-[4.5rem] text-[2.01rem] font-semibold lg:mb-40 lg:leading-extra">
               Other service loctations
            </h2>
            </div> 
        <div className="md:flex md:flex-row lg:flex items-center lg:flex-row flex flex-col lg:h-[19.63rem] lg:w-full h-[65.25rem] item-center justify-center md:mb-14 lg:mb-24">
            <div className="lg:w-1/4 lg:h-full md:p-12 lg:p-12 p-8 md:border-l-0 lg:border-l-0 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0 ">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className=" uppercase lg:text-[2rem] lg:pr-16 text-[1.5rem] font-semibold justify-start"> Esher dry cleaners</h2>
            </div>
            <div className="lg:w-1/4 lg:h-full md:p-12 lg:p-12 p-8 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase lg:text-[2rem] md:text-[1.8rem] text-[1.5rem] font-semibold"> oxshott dry cleaners</h2>
            </div>
            <div className="lg:w-1/4 lg:h-full md:p-12 lg:p-12 p-8 md:border-r-0 lg:border-r-0 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-start lg:text-[2rem] md:text-[1.8rem] lg:w-[18.75rem] md:w-[15.75rem]  w-[11rem] text-[1.5rem] font-semibold"> weybridge cleaners</h2>
            </div>
             <div className=" md:hidden lg:hidden  w-[15.63rem] h-[20rem]  p-8 border border-white-200 text-white mb-10 ">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase  w-[11rem] text-[1.5rem] font-semibold"> leatherhead dry cleaners</h2>
        </div>
        </div>
        <div className=" hidden md:block lg:block lg:w-1/4 lg:h-full p-10 mx-auto border border-white-200 text-white lg:mb-45">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase lg:text-[2rem] md:text-[1.7rem]  lg:w-[18.75rem] md:w-[15.75rem] font-semibold"> leatherhead dry cleaners</h2>
        </div>
        
               <div className=" flex justify-center lg:mb-24 ">
            <button type="button" className="flex gap-2 text-customBlue bg-customYellow items-center lg:text-[1.75rem] md:text-[1rem] text-xs md:rounded-full lg:rounded-full rounded-md px-10 py-4 md:px-16 lg:px-16 md:py-4 lg:py-7 lg:font-inter lg:font-bold text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600" onClick={handleOrderClick}>
          <span>Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="w-4 h-4 lg:w-5 lg:h-5" />
        </button> </div>
  

          <div className="h-100 w-full md:bg-customBlue lg:bg-customBlue bg-white text-customBlue md:text-white lg:py-20 lg:mt-12 lg:text-white ">
             <div className="md:flex lg:flex  lg:px-30 ">
    <div className="md:hidden lg:hidden flex w-[5rem] h-[1.25rem] items-center gap-1">
      <img src="src\assets\icons\logoVector.png" alt="" />
      <img src="src\assets\icons\logoText.png" alt="" className="h-[1rem]"/>
    </div>
    <div className="mt-3">
      <p className="md:hidden lg:hidden text-[0.8125rem] w-[19.5625rem] font-light">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
    </div>
    <div className="hidden md:block lg:block lg:w-2/5">
      <img src="src\assets\images\Logo small.png" alt="" className="md:w-[7.75rem] lg:w-[8.75rem] md:h-[3rem] lg:h-[4rem]"/>
      <p className="md:text-[1rem] lg:text-[1rem] font-normal lg:pr-17 lg:leading-5">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
    </div>
    <ul className="hidden md:block lg:block space-y-3 lg:w-3/5 md:text-[0.8rem] lg:text-[1rem]  lg:pl-14  md:mt-12 lg:mt-2 ">
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-medium md:text-white lg:text-white text-customBlue md:gap-5 lg:gap-28">
        <span className="text-start">Services</span>
        <span>About</span>
        <span className="">Help</span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-28">
        <span className="text-start md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Email Marketing</a></span>
        <span><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50">Our Stories</a></span>
        <span className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">FAQs</a></span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-28">
        <span className="text-start md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Campaigns</a></span>
        <span><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50">Benefits</a></span>
        <span className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Contact Us</a></span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-28">
        <span className="text-start md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Branding</a></span>
        <span><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50">Team</a></span>
        <span className=""></span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-28">
        <span className="text-start md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50 "><a href="#">Offline</a></span>
        <span><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50">Careers</a></span>
        <span className=""></span>
      </li>
    </ul>
    <ul className="md:hidden lg:hidden space-y-3 w-[9.375rem] h-[33.75rem] text-[1rem] mx-auto mt-6 ml-0">
      <li className="grid grid-rows-5 text-customBlue gap-5">
        <span className="text-start font-medium text-[1.125rem]">Services</span>
        <span>Email Marketing</span>
        <span>Campaigns</span>
        <span>Branding</span>
        <span>Offline</span>
      </li>
      <li className="grid grid-rows-5 text-customBlue gap-5">
        <span className="text-start font-medium text-[1.125rem]">About</span>
        <span>Our Story</span>
        <span>Benefits</span>
        <span>Teams</span>
        <span>Careers</span>
      </li>
      <li className="grid grid-rows-3 items-center text-customBlue gap-5">
        <span className="text-start font-medium text-[1.125rem]">Help</span>
        <span>FAQS</span>
        <span>Contact Us</span>
      </li>
    </ul>
  </div>

   <div className="bg-customBlue text-white lg:px-27 lg:ml-3 h-[2.4rem] lg:h-auto w-full flex items-center md:w-full lg:w-full lg:mt-22">
    <a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50 md:text-[1rem] lg:font-medium lg:text-[1rem] text-[0.5rem]">Terms and Conditions</a>
    <span className="md:ml-24 lg:ml-24 ml-0 "><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:font-medium lg:hover:opacity-50 md:text-[1rem] lg:text-[1rem] md:w-[12.6rem] text-[0.5rem]">Privacy Policy</a></span>
    <div className="flex justify-end md:ml-auto lg:ml-auto lg:mr-8 md:mr-20 ml-20">
      <a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><img src="src\assets\icons\facebook.png" alt="" className="lg:w-[0.625rem] lg:h-[1.25rem] md:w-[0.625rem] md:h-[1rem] h-[0.8rem] w-[0.44rem]"/></a>
      <a href="#" className="md:ml-10 lg:ml-10 ml-5 md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><img src="src\assets\icons\twitter.png" alt="" className="lg:w-[1.375rem] lg:h-[1.125rem] md:w-[1rem] md:h-[1rem] h-[0.8rem] w-[1rem]"/></a>
      <a href="#" className="md:ml-10 lg:ml-10 ml-5 md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><img src="src\assets\icons\instagram.png" alt="" className="lg:w-[1.375rem] lg:h-[1.375rem] md:w-[1rem] md:h-[1rem] h-[0.8rem] w-[0.9375rem]"/></a>
    </div>
  </div> 
          </div>
           
    </section>

    
    
  )
}

export default Services

                