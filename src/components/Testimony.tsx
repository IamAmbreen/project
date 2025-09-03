

const Testimony = () => {
  return (
   <section className="h-100 bg-customBlue text-white px-16 py-20">
      <div className="text-center">
            <h1 className=" text-5xl font-bold mt-5 mb-4">
                Why Savilles?
            </h1>
        </div>
        <div className="w-[550px] h-[267px] m-8 max-w-2xl mx-auto font-thin text-center text-[16px] tracking-wider leading-normal">
            <p>
We are committed to offering reliable, efficient, and professional service, ensuring your garments are returned looking their best. When you choose Savilles, you're choosing a service that values your clothes as much as you do.
                  </p>
        </div>
       
             <div className="">
 
  <div className="flex w-[550px] m-2 mx-auto gap-4">
    <img src="src/assets/icons/quote.open.png" alt="" className="h-[68px] w-[90px]"/>
    <p className="max-w-3xl font-thin text-center text-[22px]">
      They are always on time, and as I have little time for myself I use their
      services through during working hours.
    </p>
    <img src="src/assets/icons/quote.close.png"alt=""className="h-[68px] w-[90px]"/>
  </div>

  
  <div className="w-[550px] ml-auto">
    <img src="src\assets\images\Google-Review-Logo 1.png" alt="" className="  block mt-4"/>
  </div>

  
  <div className="flex px-32 py-16 justify-center">
    <button
      type="button"
      className="flex gap-2 text-customBlue bg-customYellow items-center font-semibold text-2xl rounded-full px-16 py-4 text-center transition-colors duration-300 hover:bg-yellow-600">
      <span>Book Now</span>
      <img src="src/assets/icons/arrow-up-right.png" alt="" className="w-4 h-4" />
    </button>
  </div>
</div>

   </section>
  )
}

export default Testimony
