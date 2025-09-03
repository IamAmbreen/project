

const Services = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
    <section className="h-100 bg-customBlue text-white">
        <div className="p-16">
            <h2 className="text-center text-5xl font-semibold mt-20 m-20">
               Other service <br/> loctations
            </h2> 
        </div>
        <div className="flex w-[1192px] h-[298px] mx-auto mb-14">
            <div className="w-[397px]  p-12 border-l-0 border border-white-200 text-white">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className=" uppercase text-[30px] font-semibold justify-start"> Esher dry <br/>cleaners</h2>
            </div>
            <div className="w-[397px]  p-12 border border-white-200 text-white">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-[32px] font-semibold"> oxshott dry <br/>cleaners</h2>
            </div>
            <div className="w-[397px]  p-12 border-r-0 border border-white-200 text-white">
              <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-[32px] font-semibold"> weybridge <br/>cleaners</h2>
            </div>
        </div>
        <div className=" w-[397px] p-12 mx-auto border border-white-200 text-white">
          <img src="src\assets\icons\number.png" alt="" className="justify-start mb-4"/>
              <h2 className="uppercase text-[32px] font-semibold"> leatherhead dry <br/>cleaners</h2>
        </div>
        <div className=" flex px-32 py-16 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold text-2xl rounded-full px-16 py-4 text-center transition-colors duration-300 hover:bg-yellow-600 " onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
             
    </section>
  )
}

export default Services

                