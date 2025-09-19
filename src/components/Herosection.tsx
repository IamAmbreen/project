
const Herosection = () => {
    const handleSchedulePickupClick = () => {

    console.log();
  };

  return (
<section className="h-100 flex flex-col md:flex-row lg-m:flex-row lg:flex-row xl:flex-row  items-center bg-customBlue text-white">
   <div className=" max-w-full w-full flex flex-col  md:flex-row lg-m:flex-row lg:flex-row  items-center md:items-center lg-m:items-center lg:items-center   text-center  md:text-left lg-m:text-left lg:text-left  ">
 <div className="  w-full md:w-1/2 lg-m:w-1/2 lg:w-1/2  lg-m:flex lg-m:flex-col lg-m:justify-center lg:flex lg:flex-col lg:justify-center item-center py-8 md:py-0 lg-m:py-0 lg:py-0 px-6 md:px-8 lg-m:px-9  lg:px-14 xl:px-33  ">
 <p className=" uppercase items-center text-[2.063rem] md:text-[2.2rem] lg-m:text-[3rem] lg:text-[4.2rem] xl:text-[7rem] md:mb-10 lg-m:mb-12 lg:mb-20 xl:mb-36 font-bold leading-9 md:leading-11 lg-m:leading-16 lg:leading-extra xl:leading-36 md:tracking-tighter lg-m:tracking-tighter lg:tracking-tighter xl:tracking-tighter  ">
 Cobhem's dry cleaning & laundary service
 </p>
 <p className=" lg:hidden lg-m:hidden md:hidden text-[1.0625rem] px-26 mb-3 mt-2 font-light">
  Collected and delivered to your door
 </p>
 <div className="">
  <button type="button" className=" lg-m:normal-case lg:normal-case xl:normal-case uppercase text-customBlue bg-customYellow items-center rounded-md md:round-md lg-m:rounded-full lg:rounded-full xl:rounded-full  text-xl md:text-[1rem] lg-m:text-[1rem] lg:text-[1rem] xl:text-[2rem]  px-6.5 md:px-7 lg-m:px-7 lg:px-7 xl:px-11 py-4.5 md:py-4 lg-m:py-4 lg:py-4 xl:py-9  font-inter font-medium md:font-bold lg-m:font-bold lg:font-bold xl:font-bold text-center  md:transition-colors md:duration-300  lg-m:transition-colors lg-m:duration-300  lg:transition-colors lg:duration-300 xl:transition-colors xl:duration-300  " onClick={handleSchedulePickupClick}>Schedule Your Pickup</button>
 </div>
   </div>

   <div className="hidden  md:flex lg-m:flex lg:flex   ml-auto md:w-1/2 lg-m:w-1/2 lg:w-1/2 xl:w-1/2  ">
 <img src="src\assets\images\image.png" alt="Laundry Service" className=" md:w-full md:h-full lg-m:w-full lg-m:h-full lg:w-full lg:h-full xl:h-full xl:w-full  "/>
   </div>
   </div>
  </section> 
  )
}

export default Herosection
