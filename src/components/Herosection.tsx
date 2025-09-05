
const Herosection = () => {
    const handleSchedulePickupClick = () => {

    console.log();
  };

  return (
   <section className="flex flex-col lg:flex-row md:flex-row items-center bg-customBlue text-white">
  <div className="lg:ml-28 flex flex-col py-6 items-center md:items-start lg:items-start text-center md:text-left px-8 md:pl-16 md:w-[680px] md:h-[546px] lg:h-[546px] lg:w-[680px] w-[386px]">
    <p className="mb-3 md:mb-none uppercase md:mt-10 lg:mt-10 lg:w-[680px] text-xl lg:text-6xl md:text-6xl font-bold tracking-wider leading-tight">
     Cobhem's dry
     cleaning & 
     laundary service
</p>
 <p className="md:hidden lg:hidden w-[219px] text-xl font-light">
  Collected and delivered to your door
 </p>
    <div className="mt-4 md:mt-14">
      <button type="button" className="text-customBlue bg-customYellow items-center font-medium rounded-md text-xl px-8 py-4 text-center transition-colors duration-300 hover:bg-yellow-600 md:rounded-full " onClick={handleSchedulePickupClick}>Schedule Your Pickup</button>
    </div>
  </div>

  <div className="hidden  lg:h-[546px] md:h-[546px] lg:flex ml-auto">
    <img src="src\assets\images\image.png" alt="Laundry Service" className="  md:h-[546px] lg:h-[546px]"/>
  </div>
</section>

  )
}

export default Herosection
