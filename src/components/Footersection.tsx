

const Footersection = () => {
  return (
    <section className=" md:bg-customBlue lg:bg-customBlue bg-white text-customBlue  md:text-white lg:text-white pb-0 md:px-52 lg:px-52 md:py-16 lg:py-16">
      <div className="md:flex md:h-[483px] lg:h-[483px] lg:flex w-full h-[795px] md:px-12 lg:px-12 px-7 md:pt-6 lg:pt-6 pt-12">
                <div className="md:hidden lg:hidden flex w-[80px] h-[20px] items-center gap-1">
                  <img src="src\assets\icons\logoVector.png" alt="" />
                  <img src="src\assets\icons\logoText.png" alt="" className="h-[16px]"/>
                </div>
                <div className="mt-3">
                  <p className="md:hidden lg:hidden text-[13px] w-[313px] font-light">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
                </div>
                <div className="hidden md:block lg:block md:w-[409px] lg:w-[409px] md:h-[296px] lg:h-[296px]  md:mr-40 lg:mr-40">
                  <img src="src\assets\images\Logo small.png" alt="" className="md:w-[140px] lg:w-[140px] md:h-[66px] lg:h-[66px] w-[144px] h-[66px]"/>
                  <p className="md:text-[20px] lg:text-[20px] text-[13px] md:w-[409px] lg:w-[409px] font-normal">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
                </div>
                  <ul className=" hidden md:block lg:block space-y-3 md:w-[600px] lg:w-[600px] md:h-[182px] lg:h-[182px] md:text-[20px] lg:text-[20px] mx-auto md:ml-48 lg:ml-48 md:mt-12 lg:mt-12">
                  <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-medium md:text-white lg:text-white text-customBlue md:gap-20 lg:gap-20">
                  <span className=" text-start">Services</span>
                  <span>About</span>
                  <span className="">Help</span>
                  </li>

                   <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-20 lg:gap-20">
                  <span className=" text-start transition-opacity duration-300 hover:opacity-50"><a href="#">Email Marketing</a></span>
                  <span><a href="#" className="transition-opacity duration-300 hover:opacity-50">Our Story</a></span>
                  <span className="transition-opacity duration-300 hover:opacity-50"><a href="#">FAQs</a></span>
                  </li>

                  <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-20 lg:gap-20">
                  <span className=" text-start transition-opacity duration-300 hover:opacity-50"><a href="#">Campaigns</a></span>
                  <span><a href="#" className="transition-opacity duration-300 hover:opacity-50">Benefits</a></span>
                  <span className="transition-opacity duration-300 hover:opacity-50"><a href="#">Benefits</a></span>
                  </li>

                  <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-20 lg:gap-20">
                  <span className=" text-start transition-opacity duration-300 hover:opacity-50"><a href="#">Branding</a></span>
                  <span><a href="#" className="transition-opacity duration-300 hover:opacity-50">Team</a></span>
                  <span className=""></span>
                  </li>

                  <li className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 items-center font-extralight text-white md:gap-20 lg:gap-20">
                  <span className=" text-start transition-opacity duration-300 hover:opacity-50"><a href="#">Offline</a></span>
                  <span><a href="#" className="transition-opacity duration-300 hover:opacity-50">Careers</a></span>
                  <span className=""></span>
                  </li>
                 </ul>
                  <ul className=" md:hidden lg:hidden space-y-3 w-[118px] h-[540px] text-[16px] mx-auto mt-6 ml-0">
                  <li className="grid grid-rows-5 text-customBlue gap-5">
                  <span className=" text-start font-medium text-[18px]">Services</span>
                  <span>Email Marketing</span>
                  <span>Compaigns</span>
                  <span>Branding</span>
                  <span>Offline</span>
                  </li>

                    <li className="grid grid-rows-5  text-customBlue gap-5">
                  <span className=" text-start font-medium text-[18px]">About</span>
                  <span>Our Story</span>
                  <span>Benefits</span>
                  <span>Teams</span>
                  <span>Careers</span>
                  </li>

                  <li className="grid grid-rows-3 items-center text-customBlue gap-5">
                  <span className=" text-start font-medium text-[18px]">Help</span>
                  <span>FAQS</span>
                  <span>Contact Us</span>
                  </li>
                 </ul>
              </div>
              <div className="bg-customBlue text-white md:ml-10 lg:ml-10 pl-5 h-[38px] w-[390px] flex items-center md:w-full lg:w-full ">
                <a href="#" className="transition-opacity duration-300 hover:opacity-50 md:text-[20px] lg:text-[20px] md:w-[200px] lg:w-[200px] w-[96px] text-[10px]">Terms and Conditions</a>
                <span className="md:ml-24 lg:ml-24 ml-7 "><a href="#" className="transition-opacity duration-300 hover:opacity-50 md:text-[20px] lg:text-[20px] md:w-[200px] lg:w-[200px] w-[94px] text-[10px]">Privacy Policy</a></span>

                 <a href="#" className="md:ml-auto lg:ml-auto ml-20 transition-opacity duration-300 hover:opacity-50"><img src="src\assets\icons\facebook.png" alt="" className="lg:w-[10px] lg-h[20px] md:w-[10px] md-h[20px] h-[14px] w-[7px]"/></a>
                <a href="#" className="md:ml-10 lg:ml-10  ml-5 transition-opacity duration-300 hover:opacity-50"><img src="src\assets\icons\twitter.png" alt="" className="lg:w-[22px] lg-h[18px] md:w-[10px] md-h[20px] h-[12px] w-[16px]"/></a>
                <a href="#" className="md:ml-10 lg:ml-10  ml-5 transition-opacity duration-300 hover:opacity-50"><img src="src\assets\icons\instagram.png" alt="" className="lg:w-[22px] lg:h[22px] md:w-[10px] md-h[20px] h-[15px] w-[15px]"/></a>

              </div>

               
             
      
    </section>
  )
}

export default Footersection
