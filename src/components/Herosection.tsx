
const Herosection = () => {
    const handleSchedulePickupClick = () => {

    console.log();
  };

  return (
   <section className="h-100 flex flex-col lg:flex-row  items-center bg-customBlue text-white">
      <div className=" max-w-full w-full flex flex-col lg:flex-row  lg:ml-30 items-center  lg:items-start text-center lg:text-left ">
        <div className=" lg:w-1/2 w-full py-8 lg:py-0 ">
        <p className=" uppercase  lg:mt-14 lg:mb-12 text-[2.063rem] lg:px-0 px-6 lg:text-[4.25rem]  font-bold lg:leading-extra lg:tracking-tighter leading-9">
          Cobhem's dry
          cleaning & 
          laundary service
        </p>
        <p className=" lg:hidden  text-[1.0625rem] px-26 mb-3 mt-2 font-light">
          Collected and delivered to your door
        </p>
        <div className="">
          <button type="button" className="lg:normal-case uppercase text-customBlue bg-customYellow items-center  rounded-md lg:text-[1rem]  text-xl px-6 py-5 lg:py-4  lg:px-7 font-inter lg:font-bold font-medium text-center  lg:transition-colors  lg:duration-300   lg:rounded-full" onClick={handleSchedulePickupClick}>Schedule Your Pickup</button>
        </div>
      </div>

      <div className="hidden lg:flex ml-auto  lg:w-1/2 ">
        <img src="src\assets\images\image.png" alt="Laundry Service" className=" lg:w-full lg:h-full"/>
      </div>
      </div>
    </section>

  )
}

export default Herosection
