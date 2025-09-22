

const WorkingHours = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
   <section className="h-100 bg-customBlue text-white ">
    <div className="    md:pt-12 lg-m:pt-28 lg:pt-42 xl:pt-52   px-9 md:px-22 lg-m:px-28 lg:px-31 xl:px-60 py-10 md:py-12 lg-m:py-0 lg:py-0 xl:py-0   ">
 <div>
        <ul className="space-y-2 md:space-y-4 lg:space-y-4  w-full  mx-auto lg-m:mt-10 lg:mt-10 text-[0.875rem] lg-m:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem]  leading-6 ">
    <li className="grid grid-cols-3 items-center font-medium text-white">
      <span className=" text-start">Service</span>
       <span className="  mx-auto ">Availability</span>
      <span className=" text-end">Turnaround</span>
    </li>
    </ul>
        <div className=" w-full h-[1px] bg-white mt-2 xl:mt-8  mb-8 lg:mb-16 mx-auto"></div>
       <ul className=" lg-m:space-y-6 lg:space-y-6  xl:space-y-10 space-y-2  mx-auto  text-[0.75rem] lg-m:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] text-white font-light">
    <li className="grid grid-cols-3 items-center ">
      <span className=" text-start">Dry cleaning</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className=" w-3 h-2 lg-m:w-6  lg-m:h-4 lg:w-6  lg:h-4 xl:w-8 xl:h-6  mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start ">Laundary Service</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className=" w-3 h-2 lg-m:w-6  lg-m:h-4 lg:w-6  lg:h-4 xl:w-8 xl:h-6  mx-auto" />
      <span className=" text-end">24hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start">Clothing alterations & repair</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className=" w-3 h-2 lg-m:w-6  lg-m:h-4 lg:w-6  lg:h-4 xl:w-8 xl:h-6  mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>
  </ul>
  
   <div className="  lg:w-full h-[1px] bg-white mb-2  mt-10 lg-m:mt-14 lg:mt-16 xl:mt-20 mx-auto"></div>
   <div className="flex flex-col  lg-m:flex-row lg:flex-row  lg-m:justify-between lg:justify-between  ">
     <p className="text-start  text-[0.875rem] lg-m:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem]  mt-6 xl:mt-8 lg:mb-0 font-medium">Collection and delivery </p>
     <div className="space-y-2 lg-m:space-y-4  lg:space-y-4 xl:space-y-6 lg:mt-12 lg-m:mt-12 text-[0.875rem] lg-m:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] mt-6 xl:mt-20">
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
     
      <div className=" flex lg-m:py-28 lg:py-30 justify-center  mt-20  lg-m:mt-0 lg:mt-0 lg-m:mb-0 lg:mb-0 ">
             <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow text-[0.875rem] lg-m:text-[1rem] lg:text-[1.75rem] xl:text-[2rem]  rounded-md lg-m:rounded-full lg:rounded-full xl:rounded-full  px-8.5 lg-m:px-15 lg:px-20  xl:px-24 py-2.5 lg-m:py-5 lg:py-3 xl:py-7 lg-m:font-inter font-medium  lg:font-inter lg-m:font-bold lg:font-bold   text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600"
          onClick={handleOrderClick}>
          <span className="hidden lg:block lg-m:block   ">Order Now</span>
          <span className="uppercase lg:hidden lg-m:hidden ">Book Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg-m:block lg:block xl:block  w-3 h-3 lg-m:w-4 lg-m:h-4 lg:w-5 lg:h-5 xl:w-8 xl:h-7 " />
        </button>
        </div>
   
    </div>
   

   </section>
  )
}

export default WorkingHours
