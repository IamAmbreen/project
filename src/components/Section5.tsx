

const Section5 = () => {
  const handleOrderClick = () => {
    console.log()
  }
  return (
   <section className="h-100 bg-customBlue text-white px-16 py-24">
    <div className="w-full max-w-7xl mx-auto">
 <div>
        <ul className="space-y-4 w-full max-w-7xl mx-auto mt-10">
    <li className="grid grid-cols-3 items-center font-medium text-white">
      <span className=" text-start">Service</span>
       <span className="  mx-auto ">Availability</span>
      <span className=" text-end">Turnaround</span>
    </li>
    </ul>
        <div className=" w-full max-w-7xl h-[1px] bg-white mt-2 mb-16 mx-auto"></div>
       <ul className="space-y-6 w-full max-w-7xl mx-auto text-white font-light">
    <li className="grid grid-cols-3 items-center ">
      <span className=" text-start">Dry cleaning</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="w-6 h-4 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start ">Laundary Service</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="w-6 h-4 mx-auto" />
      <span className=" text-end">24hrs</span>
    </li>

     <li className="grid grid-cols-3 items-center ">
      <span className="text-start">Clothing alterations & repair</span>
      <img src="src\assets\icons\Vector 4.png" alt="" className="w-6 h-4 mx-auto" />
      <span className=" text-end">48hrs</span>
    </li>
  </ul>
  
   <div className=" w-full max-w-7xl h-[1px] bg-white mb-2 mt-16 mx-auto"></div>
   <div className="flex justify-between">
     <p className="text-start font-medium">Collection and delivery </p>
     <div className="space-y-4 mt-12">
        <p>
            Monday-Friday-7:00am-8:30pm
        </p>
        <p>
            Saturday-8:00am-7:00pm
        </p>
        <p>
            Sunday-4:00pm-8:30pm
        </p>
    </div>
   </div>
    </div>
     
      <div className=" flex px-32 py-16 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold text-2xl rounded-full px-16 py-4 text-center transition-colors duration-300 hover:bg-yellow-600 " onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
   
    </div>
   

   </section>
  )
}

export default Section5
