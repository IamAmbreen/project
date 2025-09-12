
const Herosection = () => {
    const handleSchedulePickupClick = () => {

    console.log();
  };

  return (
   <section className="flex flex-col lg:flex-row md:flex-row items-center bg-customBlue text-white">
      <div className=" max-w-full w-full flex flex-col lg:flex-row md:flex-row lg:ml-12 items-center md:items-start lg:items-start text-center md:text-left md:ml-6">
        <div className="md:w-1/2 lg:w-1/2 w-full  ">
        <p className=" uppercase md:mt-8 lg:mt-14 lg:mb-14 lg:ml-16 text-3xl lg:text-[4rem] md:text-5xl font-bold lg:leading-extra tracking-tight">
          Cobhem's dry
          cleaning & 
          laundary service
        </p>
        <p className="md:hidden lg:hidden w-[13.69rem] text-xl  mx-auto font-light">
          Collected and delivered to your door
        </p>
        <div className="lg:ml-16">
          <button type="button" className="text-customBlue bg-customYellow items-center font-medium rounded-md lg:text-[1rem] md:text-[1rem] text-xs px-6 py-4 text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600 md:rounded-full" onClick={handleSchedulePickupClick}>Schedule Your Pickup</button>
        </div>
      </div>

      <div className="hidden md:flex lg:flex ml-auto md:w-1/2 lg:w-1/2 object-fill">
        <img src="src\assets\images\image.png" alt="Laundry Service" className="md:h-full md:w-full lg:w-full lg:h-full object-cover"/>
      </div>
      </div>
    </section>

  )
}

export default Herosection
