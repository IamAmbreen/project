
const Herosection = () => {
    const handleSchedulePickupClick = () => {

    console.log();
  };

  return (
   <section className="flex flex-col md:flex-row items-center bg-customBlue text-white">
  <div className="flex flex-col items-center md:items-start text-center md:text-left px-8 md:pl-16 w-full md:w-1/2">
    <p className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight">
     Cobhem's dry<br/>
     cleaning & <br/>
     laundary service
</p>
    <div className="mt-14">
      <button type="button" className="text-black bg-customYellow items-center font-medium rounded-full text-sm px-6 py-4 text-center transition-colors duration-300 hover:bg-yellow-600" onClick={handleSchedulePickupClick}>Schedule Your Pickup</button>
    </div>
  </div>

  <div className="w-full md:w-1/2 h-full flex justify-end">
    <img src="src\assets\images\image.png" alt="Laundry Service" className="w-full h-auto object-cover"/>
  </div>
</section>

  )
}

export default Herosection
