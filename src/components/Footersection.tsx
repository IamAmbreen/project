

const Footersection = () => {
  return (
    <section className="h-100 md:bg-customBlue lg:bg-customBlue bg-white text-customBlue md:text-white lg:text-white pb-0 md:px-2 lg:px-52 md:py-16 lg:py-16">
  <div className="md:flex md:h-[17.1875rem] lg:h-[30.1875rem] lg:flex w-full h-[49.6875rem] md:px-10 lg:px-12 px-7 md:pt-6 lg:pt-6 pt-12">
    <div className="md:hidden lg:hidden flex w-[5rem] h-[1.25rem] items-center gap-1">
      <img src="src\assets\icons\logoVector.png" alt="" />
      <img src="src\assets\icons\logoText.png" alt="" className="h-[1rem]"/>
    </div>
    <div className="mt-3">
      <p className="md:hidden lg:hidden text-[0.8125rem] w-[19.5625rem] font-light">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
    </div>
    <div className="hidden md:block lg:block md:w-[23.5625rem] lg:w-[25.5625rem]  md:mr-0 lg:mr-40">
      <img src="src\assets\images\Logo small.png" alt="" className="md:w-[7.75rem] lg:w-[8.75rem] md:h-[3.125rem] lg:h-[4.125rem]"/>
      <p className="md:text-[1rem] lg:text-[1.25rem] md:w-[23.5625rem] lg:w-[25.5625rem] font-normal">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
    </div>
    <ul className="hidden md:block lg:block space-y-3 md:w-[40.75rem] lg:w-[43.75rem] md:h-[11.375rem] lg:h-[11.375rem] md:text-[0.8rem] lg:text-[1rem] mx-auto md:ml-40 lg:ml-40 md:mt-12 lg:mt-12 ">
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-medium md:text-white lg:text-white text-customBlue md:gap-5 lg:gap-40">
        <span className="text-start">Services</span>
        <span>About</span>
        <span className="">Help</span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-40">
        <span className="text-start md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Email Marketing</a></span>
        <span><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50">Our Stories</a></span>
        <span className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">FAQs</a></span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-40">
        <span className="text-start md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Campaigns</a></span>
        <span><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50">Benefits</a></span>
        <span className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Contact Us</a></span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-40">
        <span className="text-start md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><a href="#">Branding</a></span>
        <span><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50">Team</a></span>
        <span className=""></span>
      </li>
      <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-5 lg:gap-40">
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
  <div className="bg-customBlue text-white md:ml-7 lg:ml-10 px-5 h-[2.4rem] lg:h-auto w-full flex items-center md:w-full lg:w-full">
    <a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50 md:text-[1rem] lg:text-[1.25rem] md:w-[12.6rem] lg:w-[15.625rem] w-[7.5rem] text-[0.5rem]">Terms and Conditions</a>
    <span className="md:ml-24 lg:ml-24 ml-0 "><a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50 md:text-[1rem] lg:text-[1.25rem] md:w-[12.6rem] lg:w-[12.5rem] w-[6.5rem] text-[0.5rem]">Privacy Policy</a></span>
    <div className="flex justify-end md:ml-auto lg:ml-auto lg:mr-8 md:mr-20 ml-20">
      <a href="#" className="md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><img src="src\assets\icons\facebook.png" alt="" className="lg:w-[0.625rem] lg:h-[1.25rem] md:w-[0.625rem] md:h-[1rem] h-[0.8rem] w-[0.44rem]"/></a>
      <a href="#" className="md:ml-10 lg:ml-10 ml-5 md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><img src="src\assets\icons\twitter.png" alt="" className="lg:w-[1.375rem] lg:h-[1.125rem] md:w-[1rem] md:h-[1rem] h-[0.8rem] w-[1rem]"/></a>
      <a href="#" className="md:ml-10 lg:ml-10 ml-5 md:transition-opacity lg:transition-opacity md:lg:duration-300 lg:duration-300 md:hover:opacity-50 lg:hover:opacity-50"><img src="src\assets\icons\instagram.png" alt="" className="lg:w-[1.375rem] lg:h-[1.375rem] md:w-[1rem] md:h-[1rem] h-[0.8rem] w-[0.9375rem]"/></a>
    </div>
  </div>
</section>
  )
}

export default Footersection
