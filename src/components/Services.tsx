

const Services = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
    <section className="h-100  bg-customBlue text-white lg:pt-35 pt-15 ">
           <div className="max-w-full ">
             <h2 className=" lg:px-72 px-9 text-center  lg:text-[4.5rem] text-[2.0625rem] leading-10 lg:font-semibold font-bold lg:mb-40 mb-20 lg:leading-extra">
               Other Service Loctations
            </h2>
            </div> 
        <div className=" lg:flex items-center lg:flex-row flex flex-col lg:h-[19.63rem] lg:w-full h-[65.25rem] w-full item-center justify-center  px-13 lg:mb-24">
            <div className="lg:w-1/4 lg:h-full h-1/4  lg:p-12 p-10  lg:border-l-0 border border-white-200 text-white mb-11.5  lg:mb-0 ">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4 lg:h-[2.6467rem] lg:w-[2.6467rem] w-8 h-8"/>
              <h2 className=" uppercase lg:text-[2rem] lg:pr-16 text-[1.5rem] font-semibold justify-start"> Esher dry cleaners</h2>
            </div>
            <div className="lg:w-1/4 lg:h-full  h-1/4  lg:p-12 p-9 border border-white-200 text-white mb-11.5  lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4 lg:h-[2.6467rem] lg:w-[2.6467rem] w-8 h-8"/>
              <h2 className="uppercase lg:text-[2rem]  text-[1.5rem] font-semibold"> oxshott dry cleaners</h2>
            </div>
            <div className="lg:w-1/4 lg:h-full  h-1/4  lg:p-12 p-9  lg:border-r-0 border border-white-200 text-white mb-11.5  lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4 lg:h-[2.6467rem] lg:w-[2.6467rem] w-8 h-8"/>
              <h2 className="uppercase text-start lg:text-[2rem]  text-[1.5rem] font-semibold"> weybridge cleaners</h2>
            </div>
             <div className="  lg:hidden  h-1/4  p-9 border border-white-200 text-white mb-19 ">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4  w-8 h-8"/>
              <h2 className="uppercase  text-[1.5rem] font-semibold"> leatherhead dry cleaners</h2>
        </div>
        </div>
        <div className=" hidden  lg:block lg:w-1/4 lg:h-full p-10 mx-auto border border-white-200 text-white lg:mb-45">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4 lg:h-[2.6467rem] lg:w-[2.6467rem]"/>
              <h2 className="uppercase lg:text-[2rem]   font-semibold"> leatherhead dry cleaners</h2>
        </div>
        
               <div className=" flex justify-center lg:mb-24 mb-16.5 ">
            <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow lg:text-[1.75rem]  text-[0.875rem] rounded-md lg:rounded-full  px-8.5 lg:px-21 lg:py-4.5 lg:font-inter lg:font-bold font-medium py-2.5 text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600"
          onClick={handleOrderClick}>
          <span className="lg:normal-case uppercase ">Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block  w-3 h-3  lg:w-5 lg:h-5" />
        </button> 
         </div>
  

          <div className="h-100 w-full  lg:bg-customBlue bg-white text-customBlue  lg:py-20 lg:mt-12 lg:pt-0 pt-7 lg:text-white ">
             <div className=" lg:flex px-10 lg:px-30 ">
    <div className=" lg:hidden flex w-[5rem] h-[1.25rem] items-center gap-1">
      <img src="src\assets\icons\logoVector.png" alt="" />
      <img src="src\assets\icons\logoText.png" alt="" className="h-[1rem]"/>
    </div>
    <div className="mt-3">
      <p className=" lg:hidden text-[0.794375rem] font-normal leading-5 pr-8">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
    </div>
    <div className="hidden  lg:block lg:w-2/5">
      <img src="src\assets\images\Logo small.png" alt="" className=" lg:w-[8.75rem]  lg:h-[4rem]"/>
      <p className=" lg:text-[1rem] font-normal lg:pr-17 lg:leading-5">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
    </div>
    <ul className="hidden  lg:block space-y-3 lg:w-3/5  lg:text-[1rem]  lg:pl-14   lg:mt-2 ">
      <li className="  lg:grid lg:grid-cols-3 items-center font-medium  lg:text-white text-customBlue  lg:gap-28">
        <span className="text-start">Services</span>
        <span>About</span>
        <span className="">Help</span>
      </li>
      <li className="lg:grid lg:grid-cols-3 items-center font-extralight text-white  lg:gap-28">
        <span className="text-start  lg:transition-opacity  lg:duration-300  lg:hover:opacity-50"><a href="#">Email Marketing</a></span>
        <span><a href="#" className=" lg:transition-opacity lg:duration-300  lg:hover:opacity-50">Our Stories</a></span>
        <span className=" lg:transition-opacity  lg:duration-300  lg:hover:opacity-50"><a href="#">FAQs</a></span>
      </li>
      <li className=" lg:grid lg:grid-cols-3 items-center font-extralight text-white lg:gap-28">
        <span className="text-start  lg:transition-opacity  lg:duration-300 lg:hover:opacity-50"><a href="#">Campaigns</a></span>
        <span><a href="#" className=" lg:transition-opacity  lg:duration-300 lg:hover:opacity-50">Benefits</a></span>
        <span className=" lg:transition-opacity  lg:duration-300 lg:hover:opacity-50"><a href="#">Contact Us</a></span>
      </li>
      <li className=" lg:grid lg:grid-cols-3 items-center font-extralight text-white lg:gap-28">
        <span className="text-start  lg:transition-opacity  lg:duration-300 lg:hover:opacity-50"><a href="#">Branding</a></span>
        <span><a href="#" className=" lg:transition-opacity  lg:duration-300 lg:hover:opacity-50">Team</a></span>
        <span className=""></span>
      </li>
      <li className=" lg:grid lg:grid-cols-3 items-center font-extralight text-white lg:gap-28">
        <span className="text-start  lg:transition-opacity  lg:duration-300 lg:hover:opacity-50 "><a href="#">Offline</a></span>
        <span><a href="#" className=" lg:transition-opacity  lg:duration-300 lg:hover:opacity-50">Careers</a></span>
        <span className=""></span>
      </li>
    </ul>
    <ul className=" lg:hidden space-y-2 w-[9.375rem] h-[33.75rem] text-[1rem] mx-auto mt-3 ml-0">
      <li className="grid grid-rows-5 text-customBlue gap-4">
        <span className="text-start font-bold font-inter text-[1.125rem]">Services</span>
        <span>Email Marketing</span>
        <span>Campaigns</span>
        <span>Branding</span>
        <span>Offline</span>
      </li>
      <li className="grid grid-rows-5 text-customBlue gap-4">
        <span className="text-start font-bold font-inter text-[1.125rem]">About</span>
        <span>Our Story</span>
        <span>Benefits</span>
        <span>Teams</span>
        <span>Careers</span>
      </li>
      <li className="grid grid-rows-3 items-center text-customBlue gap-4">
        <span className="text-start font-bold font-inter text-[1.125rem]">Help</span>
        <span>FAQS</span>
        <span>Contact Us</span>
      </li>
    </ul>
  </div>

   <div className="bg-customBlue text-white lg:px-27 pl-10 lg:ml-3 h-[2.6rem] lg:h-auto w-full flex items-center  lg:w-full lg:mt-22">
    <a href="#" className=" lg:transition-opacity  lg:duration-300 lg:hover:opacity-50  font-medium lg:text-[1rem] text-[0.625rem]">Terms and Conditions</a>
    <span className=" lg:ml-24 ml-5 "><a href="#" className=" lg:transition-opacity  lg:duration-300 font-medium lg:hover:opacity-50  lg:text-[1rem]  text-[0.625rem]">Privacy Policy</a></span>
    <div className="flex justify-end  lg:ml-auto lg:mr-8  ml-20">
      <a href="#" className=" lg:transition-opacity  lg:duration-300 lg:hover:opacity-50"><img src="src\assets\icons\facebook.png" alt="" className="lg:w-[0.625rem] lg:h-[1.25rem]   h-[0.8rem] w-[0.44rem]"/></a>
      <a href="#" className=" lg:ml-10 ml-5  lg:transition-opacity  lg:duration-300 lg:hover:opacity-50"><img src="src\assets\icons\twitter.png" alt="" className="lg:w-[1.375rem] lg:h-[1.125rem]  h-[0.8rem] w-[1rem]"/></a>
      <a href="#" className=" lg:ml-10 ml-5  lg:transition-opacity  lg:duration-300 lg:hover:opacity-50"><img src="src\assets\icons\instagram.png" alt="" className="lg:w-[1.375rem] lg:h-[1.375rem] h-[0.8rem] w-[0.9375rem]"/></a>
    </div>
  </div> 
          </div>
           
    </section>

    
    
  )
}

export default Services

                