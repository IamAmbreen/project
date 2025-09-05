

const WorkingHours = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
   <section className="h-100 bg-customBlue text-white md:px-16 lg:px-16 px-8 py-20">
    <div className="md:w-full md:max-w-7xl lg:w-full lg:max-w-7xl w-[317px] mx-auto">
 <div>
        <ul className="m:space-y-4 lg:space-y-4 space-y-2 md:w-full lg:w-full md:max-w-7xl lg:max-w-7xl mx-auto w-full  md:mt-10 lg:mt-10 md:text-[24px]  lg:text-[24px] text-[12px]">
    <li className="grid grid-cols-3 items-center font-medium text-white">
      <span className=" text-start">Service</span>
       <span className="  mx-auto ">Availability</span>
      <span className=" text-end">Turnaround</span>
    </li>
    </ul>
        <div className="md:w-full lg:w-full md:max-w-7xl lg:max-w-7xl h-[1px] w-[317px] bg-white mt-2 md:mb-16 mb-8 lg:mb-16 mx-auto"></div>
       <ul className="md:space-y-6 lg:space-y-6 space-y-2 md:w-full lg:w-full md:max-w-7xl lg:max-w-7xl mx-auto  md:text-[24px]  lg:text-[24px] text-[12px] text-white font-light">
    <li className="grid grid-cols-3 items-center ">
      <span className=" text-start">Dry cleaning</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="md:w-6 lg:w-6 md:h-4 lg:h-4 w-4 h-3 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start ">Laundary Service</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="md:w-6 lg:w-6 md:h-4 lg:h-4 w-4 h-3 mx-auto" />
      <span className=" text-end">24hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start">Clothing alterations & repair</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="md:w-6 lg:w-6 md:h-4 lg:h-4 w-4 h-3 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>
  </ul>
  
   <div className=" md:w-full lg:w-full md:max-w-7xl lg:max-w-7xl h-[1px] bg-white mb-2 md:mt-16 lg:mt-16 mt-10 mx-auto"></div>
   <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between mb-12">
     <p className="text-start  md:text-[24px] lg:text-[24px] text-[12px] font-medium">Collection and delivery </p>
     <div className="space-y-2 md:space-y-4 lg:space-y-4 md:mt-12 lg:mt-12 text-[13px]  md:text-[24px]  lg:text-[24px] mt-6">
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
     
      <div className=" flex md:px-32 lg:px-32 md:py-16 lg:py-16 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold md:text-2xl lg:text-2xl text-[13px] md:rounded-full lg:rounded-full px-8 py-4 rounded-md text-center transition-colors duration-300 hover:bg-yellow-600 " onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
   
    </div>
   

   </section>
  )
}

export default WorkingHours
