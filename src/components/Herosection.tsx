
const Herosection = () => {
    const handleSchedulePickupClick = () => {

    console.log();
  };

  return (
   <section className="lg:h-[32.25rem] md:h-[22.125rem] flex flex-col lg:flex-row md:flex-row items-center bg-customBlue text-white">
  <div className="lg:mt-9 lg:ml-12 flex flex-col py-6 items-center md:items-start lg:items-start text-center md:text-left px-8 md:ml-6 md:w-[25.5rem] lg:w-[43rem] w-[24.12rem]">
    <p className="mb-3 md:mb-none uppercase md:mt-8 lg:mt-4 lg:w-[42.5rem] md:w-[28rem] w-[23.75rem] text-3xl lg:text-6xl md:text-4xl font-bold tracking-wider leading-tight">
     Cobhem's dry
     cleaning & 
     laundary service
</p>
 <p className="md:hidden lg:hidden w-[13.69rem] text-xl font-light">
  Collected and delivered to your door
 </p>
    <div className="mt-4 md:mt-14">
      <button type="button" className="text-customBlue bg-customYellow items-center font-medium rounded-md lg:text-[1rem] md:text-[1rem] text-xs px-6 py-4 text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600 md:rounded-full " onClick={handleSchedulePickupClick}>Schedule Your Pickup</button>
    </div>
  </div>

  <div className="hidden lg:h-[32.25rem] lg:w-[44rem] md:h-[22.125rem] md:w-[30.125rem] lg:flex md:flex ml-auto">
    <img src="src\assets\images\image.png" alt="Laundry Service" className="  md:h-full lg:h-full"/>
  </div>
</section>

  )
}

export default Herosection
