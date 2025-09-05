
const Faq = () => {
  return (
    <section className="h-100 bg-white text-customBlue ">
        <div className="lg:w-[994px] md:w-[994px] mx-auto bg-white py-6 w-[330px] ">
      <h2 className="text-center mx-auto text-[33px] lg:w-[584px] md:w-[584px] w-[316px] lg:text-7xl md:text-7x1 font-bold mt-20 md:m-20 lg:m-20">
               Frequently asked questions
            </h2>  
              
           <div className="m-10 text-center lg:text-[20px] md:text-[20px] md:w-[994px] lg:w-[994px] w-[310px]">
            <h3 className="font-bold uppercase lg:text-[18px] md:[18px] text-[16px] text-start mb-4">how do i place an order with ihateironing</h3>  

            <ul className="lg:space-y-6 md:space-y-6 space-y-4">
     <li className="grid grid-cols-2 items-center  text-black ">
      <span className="text-start lg:text-[18px] md:text-[18px] text-[13px]">It's simple to place a dry cleaning or laundry collection in Battersea. Simply choose the most convenient time slots for you using the form above, and our drivers will be on their way to take your laundry off your hands.</span>
      <a href="#"><img src="src\assets\icons\minus.png" alt="" className="w-6 h-6 ml-auto transition-opacity duration-300 hover:opacity-50" /></a>
    </li>

    <li className="grid grid-cols-2 lg:text-[16px] md:text-[16px] text-[12px]  text-neutral-600 ">
      <span className="text-start uppercase font-bold ">Do you offer next day delivery in battersea?</span>
      <a href="#"><img src="src\assets\icons\plus.png" alt="" className="w-6 h-6 ml-auto transition-opacity duration-300 hover:opacity-50 " /></a>
    </li>
    <li className="grid grid-cols-2  lg:text-[16px] md:text-[16px] text-[12px] text-neutral-600">
      <span className="text-start uppercase font-bold ">What other services do you offer?</span>
      <a href="#"><img src="src\assets\icons\plus.png" alt="" className="w-6 h-6 ml-auto transition-opacity duration-300 hover:opacity-50" /></a>
    </li>
    <li className="grid grid-cols-2  lg:text-[16px] md:text-[16px] text-[12px] text-neutral-600">
      <span className="text-start uppercase font-bold">How does ihateironing clean my clothes?</span>
      <a href="#"><img src="src\assets\icons\plus.png" alt="" className="w-6 h-6 ml-auto transition-opacity duration-300 hover:opacity-50" /></a>
    </li>
            </ul>

        </div>
    </div>

    </section>
  )
}

export default Faq
