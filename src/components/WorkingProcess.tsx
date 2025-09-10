
const WorkingProcess = () => {
 const handleOrderNowClick = () => {
  console.log()

 }
  return (
<section className='h-100 bg-white text-customBlue mt-12 md:mt-28'>
 
  <div className='text-center leading-tight mb-8'>
    <p className='uppercase text-lg lg:text-2xl md:text-2xl tracking-tight font-normal'> dry cleaning & Laundry</p>
    <h1 className='text-4xl lg:text-6xl md:text-6xl font-bold tracking-tight'>
      How it works
    </h1>
  </div>


  <div className="py-8 flex flex-col px-20 lg:flex-row md:flex-row items-center justify-evenly text-center">
 
    <div className="w-full lg:w-60 mb-8 md:mb-0 md:w-60">
      <img src="src\assets\icons\Asset 2.png" alt="Book" className="mx-auto w-20 h-20 lg:w-28 md:w-28 lg:h-28 md:h-28" />
      <h2 className="font-semibold text-sm lg:text-2xl md:text-2xl tracking-tight mt-4">
        <a href="#">Book</a>
      </h2>
      <p className="tracking-tight mt-4 text-sm lg:text-base px-4 lg:px-0 md:text-base md:px-0">
        Choose a convenient date, time and location for pickup.
      </p>
    </div>


    <div className="relative flex-col items-center hidden lg:flex md:flex">
      <div className="h-40 lg:h-80 md:h-80 w-1 bg-customBlue rounded-full"></div>
      <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center border border-customGray">
        <img src="src\assets\icons\arrow-right.png" alt="" className=" md:h-[1.87rem] md:w-[1.87rem] lg:h-[1.87rem] lg:w-[1.87rem]" />
      </div>
    </div>

    <div className="w-full md:w-60 lg:w-62 mb-8 md:mb-0 lg:mb-0 ">
      <img src="src\assets\icons\Asset 3.png" alt="Collect" className="mx-auto w-20 h-20 md:w-28 md:h-28 lg:w-28 lg:h-28" />
      <h2 className="font-semibold text-sm md:text-2xl lg:text-2xl tracking-tight mt-4">
        <a href="#">Collect</a>
      </h2>
      <p className="tracking-tight mt-4 text-sm lg:text-base px-4 lg:px-0 md:text-base md:px-0">
        We will collect your bag, clean your garments in house and invoice you.
      </p>
    </div>


    <div className="relative flex-col items-center hidden md:flex lg:flex">
      <div className="h-40 md:h-80 w-1 bg-customBlue rounded-full"></div>
      <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center border border-customGray">
        <img src="src\assets\icons\arrow-right.png" alt="" className=" md:h-[1.87rem] md:w-[1.87rem] lg:h-[1.87rem] lg:w-[1.87rem]" />
      </div>
    </div>
    
  
    <div className="w-full md:w-60 lg:w-62 mb-8 md:mb-0 lg:mb-0">
      <img src="src/assets/icons/asset5 1.png" alt="Deliver" className="mx-auto w-20 h-20 md:w-28 md:h-28 lg:w-28 lg:h-28" />
      <h2 className="font-semibold text-sm lg:text-2xl md:text-2xl tracking-tight mt-4">
        <a href="#">Deliver</a>
      </h2>
      <p className="tracking-tight mt-4 text-sm lg:text-base px-4 lg:px-0 md:text-base md:px-0">
        We will deliver your fresh garments back to your chosen location.
      </p>
    </div>
  </div>


  <div className="flex justify-center px-4 py-8 md:px-32 md:py-16 lg:px-32 lg:py-16">
    <button
      type="button"
      className="flex gap-2 items-center text-customBlue bg-customYellow font-semibold text-base lg:text-2xl md:text-2xl rounded-md lg:rounded-full md:rounded-full px-8 md:px-16 lg:px-16 py-3 md:py-4 text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600"
      onClick={handleOrderNowClick}>
      <span>Order Now</span>
      <img src="src\assets\icons\arrow-up-right.png" alt="" className="w-3 h-3 md:w-4 md:h-4" />
    </button>
  </div>
</section>
  )
}

export default WorkingProcess
