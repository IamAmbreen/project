
const Faq = () => {
  return (
    <section className="h-100 bg-white text-customBlue ">
        <div className="max-w-6xl mx-auto bg-white px-10 py-6 ">
      <h2 className="text-center text-5xl font-semibold mt-20 m-20">
               Frequently asked <br/> questions
            </h2>  
            <h3 className="font-bold uppercase">how do i place an order with ihateironing</h3>    
           <div className="m-10 max-w-7xl mx-auto text-center text-[16px]">

            <ul className="space-y-4 w-full max-w-6xl mx-auto ">
     <li className="grid grid-cols-2 items-center text-black ">
      <span className="text-start text-[14px]">It's simple to place a dry cleaning or laundry collection in Battersea. Simply choose the most convenient time slots for you using the form above, and our drivers will be on their way to take your laundry off your hands.</span>
      <a href="#"><img src="src\assets\icons\minus.png" alt="" className="w-6 h-6 mx-auto transition-opacity duration-300 hover:opacity-50" /></a>
    </li>

    <li className="grid grid-cols-2 items-center text-[12px]  text-neutral-600 ">
      <span className="text-start uppercase font-bold ">Do you offer next day delivery in battersea?</span>
      <a href="#"><img src="src\assets\icons\plus.png" alt="" className="w-6 h-6 mx-auto transition-opacity duration-300 hover:opacity-50 " /></a>
    </li>
    <li className="grid grid-cols-2 items-center text-[12px] text-neutral-600">
      <span className="text-start uppercase font-bold ">What other services do you offer?</span>
      <a href="#"><img src="src\assets\icons\plus.png" alt="" className="w-6 h-6 mx-auto transition-opacity duration-300 hover:opacity-50" /></a>
    </li>
    <li className="grid grid-cols-2 items-center text-[12px] text-neutral-600">
      <span className="text-start uppercase font-bold">How does ihateironing clean my clothes?</span>
      <a href="#"><img src="src\assets\icons\plus.png" alt="" className="w-6 h-6 mx-auto transition-opacity duration-300 hover:opacity-50" /></a>
    </li>
            </ul>

        </div>
    </div>

    </section>
  )
}

export default Faq
