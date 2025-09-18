
const Herosection = () => {
    const handleSchedulePickupClick = () => {

    console.log();
  };

  return (
<section className="h-100 flex flex-col lg:flex-row lg-m:flex-row md:flex-row items-center bg-customBlue text-white">
   <div className=" max-w-full w-full flex flex-col lg:flex-row lg-m:flex-row md:flex-row lg:ml-30 lg-m:ml-8 items-center lg:items-start lg-m:items-start md:items-start text-center lg:text-left lg-m:text-left md:text-left ">
 <div className=" lg:w-1/2 lg-m:w-1/2 md:w-1/2 w-full lg:flex lg:flex-col lg:justify-center item-center lg-m:flex lg-m:flex-col lg-m:justify-center py-8 lg:py-0 lg-m:py-0 md:py-3 md:ml-10 ">
 <p className=" uppercase items-center lg:mt-14 lg:mb-12   lg-m:mt-10 lg-m:mb-4 text-[2.063rem] lg:px-0 md:px-0 lg-m:px-0 px-6 lg:text-[4.25rem] lg-m:text-[3rem] md:text-[2.25rem] font-bold lg:leading-extra lg:tracking-tighter  lg-m:leading-normal lg-m:tracking-tighter  md:leading-normal md:tracking-tighter leading-9">
 Cobhem's dry cleaning & laundary service
 </p>
 <p className=" lg:hidden lg-m:hidden md:hidden text-[1.0625rem] px-26 mb-3 mt-2 font-light">
  Collected and delivered to your door
 </p>
 <div className="">
  <button type="button" className="lg:normal-case lg-m:normal-case md:normal-case uppercase text-customBlue bg-customYellow items-center rounded-md md:round-md lg:text-[1rem] lg-m:text-[1rem] md:text-[1rem] text-xl px-6.5 py-4.5 lg:py-4 lg-m:px-7 lg-m:py-4 md:px-7 md:py-4 lg:px-7 font-inter lg:font-bold lg-m:font-bold md:font-bold font-medium text-center lg:transition-colors lg:duration-300  lg:rounded-full lg-m:transition-colors lg-m:duration-300  lg-m:rounded-full md:transition-colors md:duration-300 " onClick={handleSchedulePickupClick}>Schedule Your Pickup</button>
 </div>
   </div>

   <div className="hidden lg:flex lg-m:flex  md:flex  ml-auto lg:w-1/2 lg-m:w-1/2 md:w-1/2 ">
 <img src="src\assets\images\image.png" alt="Laundry Service" className=" lg:w-full lg:h-full lg-m:w-full lg-m:h-full md:w-full md:h-full"/>
   </div>
   </div>
  </section> 
  )
}

export default Herosection
