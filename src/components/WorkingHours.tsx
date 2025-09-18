

const WorkingHours = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
   <section className="h-100 bg-customBlue text-white ">
    <div className="lg:px-31 lg-m:px-28 md:px-22 lg:pt-42 lg-m:pt-28 md:pt-12  lg:py-0 lg-m:py-0 md:py-12 py-10 px-9">
 <div>
        <ul className="m:space-y-4 lg:space-y-4 space-y-2  lg:w-full  mx-auto w-full   lg:mt-10 lg-m:mt-10  lg:text-[1.5rem] lg-m:text-[1rem] leading-6 text-[0.875rem]">
    <li className="grid grid-cols-3 items-center font-medium text-white">
      <span className=" text-start">Service</span>
       <span className="  mx-auto ">Availability</span>
      <span className=" text-end">Turnaround</span>
    </li>
    </ul>
        <div className=" lg:w-full w-full h-[1px] bg-white mt-2  mb-8 lg:mb-16 mx-auto"></div>
       <ul className=" lg:space-y-6 lg-m:space-y-6 space-y-2  lg:w-full mx-auto    lg:text-[1.5rem] lg-m:text-[1rem] text-[0.75rem] text-white font-light">
    <li className="grid grid-cols-3 items-center ">
      <span className=" text-start">Dry cleaning</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className=" lg:w-6  lg:h-4  lg-m:w-6  lg-m:h-4 w-3 h-2 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start ">Laundary Service</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className=" lg:w-6 lg:h-4 lg-m:w-6  lg-m:h-4 w-3 h-2 mx-auto" />
      <span className=" text-end">24hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start">Clothing alterations & repair</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className=" lg:w-6  lg:h-4 lg-m:w-6  lg-m:h-4 w-3 h-2 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>
  </ul>
  
   <div className="  lg:w-full h-[1px] bg-white mb-2  lg:mt-16 lg-m:mt-14 mt-10 mx-auto"></div>
   <div className="flex flex-col  lg:flex-row lg-m:flex-row lg-m:justify-between lg:justify-between  ">
     <p className="text-start   lg:text-[1.5rem] lg-m:text-[1rem] mt-6 lg:mb-0 text-[0.875rem] font-medium">Collection and delivery </p>
     <div className="space-y-2  lg:space-y-4 lg-m:space-y-4  lg:mt-12 lg-m:mt-12 text-[0.875rem] lg-m:text-[1rem]  lg:text-[1.5rem] mt-6">
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
     
      <div className=" flex lg:py-30 lg-m:py-28 justify-center lg:mt-0 lg-m:mt-0 lg:mb-0 lg-m:mb-0 mt-20 ">
             <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow lg:text-[1.75rem] lg-m:text-[1rem]  text-[0.875rem] rounded-md lg:rounded-full lg-m:rounded-full  px-8.5 lg:px-20 lg-m:px-15 lg:py-3 lg-m:py-5 lg:font-inter lg-m:font-inter lg:font-bold lg-m:font-bold font-medium py-2.5  text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600"
          onClick={handleOrderClick}>
          <span className="hidden lg:block lg-m:block   ">Order Now</span>
          <span className="uppercase lg:hidden lg-m:hidden ">Book Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block lg-m:block  w-3 h-3 lg:w-5 lg:h-5 lg-m:w-4 lg-m:h-4" />
        </button>
        </div>
   
    </div>
   

   </section>
  )
}

export default WorkingHours
