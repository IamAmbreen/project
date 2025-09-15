

const WorkingHours = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
   <section className="h-100 bg-customBlue text-white ">
    <div className="lg:px-31 lg:pt-42">
 <div>
        <ul className="m:space-y-4 lg:space-y-4 space-y-2 md:w-full lg:w-full  mx-auto w-full  md:mt-10 lg:mt-10 md:text-[1rem]  lg:text-[1.5rem] text-[0.6rem]">
    <li className="grid grid-cols-3 items-center font-medium text-white">
      <span className=" text-start">Service</span>
       <span className="  mx-auto ">Availability</span>
      <span className=" text-end">Turnaround</span>
    </li>
    </ul>
        <div className="md:w-full lg:w-full h-[1px] w-[19.812rem] bg-white mt-2 md:mb-16 mb-8 lg:mb-16 mx-auto"></div>
       <ul className="md:space-y-6 lg:space-y-6 space-y-2 md:w-full lg:w-full mx-auto  md:text-[1rem]  lg:text-[1.5rem] text-[0.6rem] text-white font-light">
    <li className="grid grid-cols-3 items-center ">
      <span className=" text-start">Dry cleaning</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="md:w-6 lg:w-6 md:h-4 lg:h-4 w-3 h-2 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start ">Laundary Service</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="md:w-6 lg:w-6 md:h-4 lg:h-4 w-3 h-2 mx-auto" />
      <span className=" text-end">24hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start">Clothing alterations & repair</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="md:w-6 lg:w-6 md:h-4 lg:h-4 w-3 h-2 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>
  </ul>
  
   <div className=" md:w-full lg:w-full h-[1px] bg-white mb-2 md:mt-16 lg:mt-16 mt-10 mx-auto"></div>
   <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between ">
     <p className="text-start  md:text-[1rem] lg:text-[1.5rem] text-[0.6rem] font-medium">Collection and delivery </p>
     <div className="space-y-2 md:space-y-4 lg:space-y-4 md:mt-12 lg:mt-12 text-[0.6rem]  md:text-[1rem]  lg:text-[1.5rem] mt-6">
        <p>
            Monday-Friday-7:00am-8:30pm
        </p>
        <p>
            Saturday-8:00am-7:00pm
        </p>
        <p>
            Sunday-4:00pm-8:30pm
        </p>
    </div>
   </div>
    </div>
     
      <div className=" flex lg:py-30 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center lg:text-[1.75rem] md:text-[1rem] text-xs md:rounded-full lg:rounded-full lg:font-inter lg:font-bold lg:px-16 lg:py-7 rounded-md text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600 " onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4 lg:w-5 lg:h-5" /></button>
            </div>
   
    </div>
   

   </section>
  )
}

export default WorkingHours
