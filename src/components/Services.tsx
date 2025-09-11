

const Services = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
    <section className="h-100  bg-customBlue text-white py-12">
           <div className="max-w-full  md:w-[35.125rem] lg:w-[46.13rem] w-[19.75rem] mx-auto">
             <h2 className=" mx-auto text-center md:text-[3rem] lg:text-[4.5rem] text-[2.01rem]  font-semibold md:mt-20 lg:mt-20 md:m-20 lg:m-20 m-10 ">
               Other service loctations
            </h2>
            </div> 
        <div className="md:flex md:flex-row lg:flex items-center lg:flex-row flex flex-col md:w-[48.34rem] lg:w-[74.75rem] md:h-[17.63rem] lg:h-[19.63rem] w-[18rem] h-[65.25rem] mx-auto item-center justify-center md:mb-14 lg:mb-14">
            <div className="md:w-[18.94rem] lg:w-[24.81rem] md:h-[17.63rem] lg:h-[19.63rem] w-[15.63rem] h-[20rem] md:p-12 lg:p-12 p-8 md:border-l-0 lg:border-l-0 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0 ">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className=" uppercase lg:text-[2.2rem] md:text-[1.8rem]   lg:w-[18.75rem] md:w-[15.75rem] w-[11rem] text-[1.5rem] font-semibold justify-start"> Esher dry cleaners</h2>
            </div>
            <div className="md:w-[18.94rem] lg:w-[24.81rem] md:h-[17.63rem] lg:h-[19.63rem] w-[15.63rem] h-[20rem] md:p-12 lg:p-12 p-8 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase lg:text-[2.2rem] md:text-[1.8rem] lg:w-[18.75rem] md:w-[15.75rem] w-[11rem] text-[1.5rem] font-semibold"> oxshott dry cleaners</h2>
            </div>
            <div className="md:w-[18.94rem] lg:w-[24.81rem] md:h-[17.63rem] lg:h-[19.63rem] w-[15.63rem] h-[20rem] md:p-12 lg:p-12 p-8 md:border-r-0 lg:border-r-0 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-start lg:text-[2.2rem] md:text-[1.8rem] lg:w-[18.75rem] md:w-[15.75rem]  w-[11rem] text-[1.5rem] font-semibold"> weybridge cleaners</h2>
            </div>
             <div className=" md:hidden lg:hidden  w-[15.63rem] h-[20rem]  p-8 border border-white-200 text-white mb-10 ">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase  w-[11rem] text-[1.5rem] font-semibold"> leatherhead dry cleaners</h2>
        </div>
        </div>
        <div className=" hidden md:block lg:block md:w-[18.94rem] md:h-[17.63rem] lg:w-[24.81rem] lg:h-[19.63rem] p-10 mx-auto border border-white-200 text-white">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase lg:text-[2.2rem] md:text-[1.7rem]  lg:w-[18.75rem] md:w-[15.75rem] font-semibold"> leatherhead dry cleaners</h2>
        </div>
        
               <div className=" flex md:px-32 lg:px-32 md:py-16 lg:py-16 justify-center md:mt-0 lg:mt-0 mt-20 ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold lg:text-[1rem] md:text-[1rem] text-xs md:rounded-full lg:rounded-full px-8 py-4 rounded-md text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600" onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
    </section>
  )
}

export default Services

                