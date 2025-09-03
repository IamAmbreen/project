

const Footersection = () => {
  return (
    <section className="h-100 bg-customBlue text-white px-32 py-14">
      <div className="flex w-full  ">
                <div className="w-[409px] h-[296px] mr-40">
                  <img src="src\assets\images\Logo small.png" alt="" className="w-[140] h-[66]"/>
                  <p className="text-[16px] font-light">Indulge in refined dry cleaning services with Savilles Dry Cleaning & Laundry. With over six decades of expertise, we cater to discerning clients in Cobham, Oxshott, Esher, Weybridge, and the surrounding areas.</p>
                </div>
                  <ul className=" space-y-3 w-[600px] h-[182px] mx-auto ml-48 mt-12">
                  <li className="grid grid-cols-3 items-center font-medium text-white">
                  <span className=" text-start">Services</span>
                  <span>About</span>
                  <span className="">Help</span>
                  </li>

                   <li className="grid grid-cols-3 items-center font-extralight text-white">
                  <span className=" text-start transition-opacity duration-300 hover:opacity-50"><a href="#">Email Marketing</a></span>
                  <span><a href="#" className="transition-opacity duration-300 hover:opacity-50">Our Story</a></span>
                  <span className="transition-opacity duration-300 hover:opacity-50"><a href="#">FAQs</a></span>
                  </li>

                  <li className="grid grid-cols-3 items-center font-extralight text-white">
                  <span className=" text-start transition-opacity duration-300 hover:opacity-50"><a href="#">Campaigns</a></span>
                  <span><a href="#" className="transition-opacity duration-300 hover:opacity-50">Benefits</a></span>
                  <span className="transition-opacity duration-300 hover:opacity-50"><a href="#">Benefits</a></span>
                  </li>

                  <li className="grid grid-cols-3 items-center font-extralight text-white">
                  <span className=" text-start transition-opacity duration-300 hover:opacity-50"><a href="#">Branding</a></span>
                  <span><a href="#" className="transition-opacity duration-300 hover:opacity-50">Team</a></span>
                  <span className=""></span>
                  </li>

                  <li className="grid grid-cols-3 items-center font-extralight text-white">
                  <span className=" text-start"><a href="#">Offline</a></span>
                  <span><a href="#">Careers</a></span>
                  <span className=""></span>
                  </li>
                 </ul>
              </div>
              <div className="flex w-full">
                <a href="#" className="transition-opacity duration-300 hover:opacity-50">Terms and Conditions</a>
                <span className="ml-24"><a href="#" className="transition-opacity duration-300 hover:opacity-50">Privacy Policy</a></span>

                <a href="#" className="ml-auto transition-opacity duration-300 hover:opacity-50"><img src="src\assets\icons\facebook.png" alt="" /></a>
                <a href="#" className="ml-10  transition-opacity duration-300 hover:opacity-50"><img src="src\assets\icons\twitter.png" alt="" /></a>
                <a href="#" className="ml-10  transition-opacity duration-300 hover:opacity-50"><img src="src\assets\icons\instagram.png" alt="" /></a>
              

              </div>

               
             
      
    </section>
  )
}

export default Footersection
