

const Services = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
    <section className="h-100  bg-customBlue text-white py-12">
        <div className="md:w-[1192px] lg:w-[1192px] md:p-16 mx-auto lg:p-16 ">
            <h2 className="text-center md:text-5xl lg:text-5xl text-[33px] md:w-[739px] lg:w-[729px] w-[316px] mx-auto font-semibold md: lg:mt-20 md:m-20 lg:m-20 m-10">
               Other service loctations
            </h2> 
        </div>
        <div className="md:flex md:flex-row lg:flex lg:flex-row flex flex-col md:w-[1192px] lg:w-[1192px] md:h-[298px] lg:h-[298px] w-[305px] h-[1044px] mx-auto md:mb-14 lg:mb-14">
            <div className="md:w-[397px] lg:w-[397px] w-[306px] md:p-12 lg:p-12 p-8 md:border-l-0 lg:border-l-0 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0 ">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className=" uppercase text-[30px] lg:w-[300px] md:w-[300px] w-[240px] font-semibold justify-start"> Esher dry cleaners</h2>
            </div>
            <div className="md:w-[397px] lg:w-[397px] w-[306px] md:p-12 lg:p-12 p-8 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-[32px] lg:w-[300px] md:w-[300px] w-[240px] font-semibold"> oxshott dry <br/>cleaners</h2>
            </div>
            <div className="md:w-[397px] lg:w-[397px] w-[306px] md:p-12 lg:p-12 p-8 md:border-r-0 lg:border-r-0 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-[32px] lg:w-[300px] md:w-[300px] w-[240px] font-semibold"> weybridge <br/>cleaners</h2>
            </div>
             <div className=" md:hidden lg:hidden md:w-[397px] lg:w-[397px] w-[306px] md:p-12 lg:p-12 p-8 border border-white-200 text-white mb-10 md:mb-0 lg:mb-0">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-[32px] lg:w-[300px] md:w-[300px] w-[240px] font-semibold"> leatherhead dry <br/>cleaners</h2>
        </div>
        </div>
        <div className=" hidden md:block w-[397px] p-12 mx-auto border border-white-200 text-white">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-[32px] lg:w-[300px] md:w-[300px] w-[240px] font-semibold"> leatherhead dry <br/>cleaners</h2>
        </div>
        
               <div className=" flex md:px-32 lg:px-32 md:py-16 lg:py-16 justify-center md:mt-0 lg:mt-0 mt-20 ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold md:text-2xl lg:text-2xl text-[13px] md:rounded-full lg:rounded-full px-8 py-4 rounded-md text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600" onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
    </section>
  )
}

export default Services

                