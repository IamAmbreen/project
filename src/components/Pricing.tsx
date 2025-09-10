

const Pricing = () => {
  const handlePriceListClick = () => {
    console.log()
  }
  return (
    <section className="h-100 py-14 md:py-28 lg:py-28 bg-customBlue text-white ">
             <h1 className=' uppercase  text-center md:text-6xl lg:text-6xl text-3xl font-bold md:mb-10 lg:mb-10 mb-4'>
                Pricing
            </h1>   
             <p className=' text-center md:text-[1.25rem] lg:text-[1.25rem] text-sm font-light mb-6'> Here are some of Our Most Popular Services</p>
         <div className="hidden md:flex lg:flex md:px-32 md:py-16 md:justify-center md:mb-4 ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold text-2xl rounded-md lg:rounded-full md:rounded-full px-16 py-4 text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600 " onClick={handlePriceListClick}><span>View Full Price List</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
              <div className="flex flex-col md:flex-row lg:w-[73.88rem] lg:h-[30.37rem] md:w-[55.88rem] md:h-[23.37rem] md:mx-auto lg:mx-auto lg:flex-row md:gap-4 lg:gap-4 ">
                <div className="lg:w-[23.88rem] md:w-[17.75rem] mx-auto p-7 border-4 border-white-200 md:border border-white-200 lg:border border-white-200 text-white mb-5 md:mb-0 lg:mb-0">
  <h2 className="lg:text-2xl md:text-xl text-xl font-semibold mb-10 text-customGray">Most Popular</h2>
 

  <ul className="space-y-5 md:text-xs lg:text-xl text-xs">
    <li className="font-medium lg:w-[8.125rem] md:w-[6.25rem] w-[6.25rem]"> Cleaned and ironed</li>
    <li className="flex justify-between font-light">
      <span className="flex items-center gap-3">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Shirt Hanger</span>
      </span>
      <span className="md:ml-auto lg:ml-auto ml-28">From £3</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Trousers</span>
      </span>
      <span>£8</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Dress</span>
      </span>
      <span>£13</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Two-Piece Suit</span>
      </span>
      <span>£16</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Knitwear</span>
      </span>
      <span>£9</span>
    </li>
  </ul>
</div>      
 <div className="lg:w-[23.88rem] md:w-[17.75rem] mb-5 md:mb-0 lg:mb-0 mx-auto p-7 border border-white-200  md:border-4 border-white-200 lg:border-4 border-white-200 text-white">
  <h2 className="text-xl font-semibold mb-10 text-customGray">Service Wash</h2>


  <ul className="space-y-5 md:text-xs lg:text-xl text-xs">
    <li className="font-medium lg:w-[8.125rem] md:w-[6.25rem] w-[6.25rem]"> Wash,dry and fold</li>
    <li className="flex justify-between  font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Shirt (Hanger)</span>
      </span>
      <span className="md:ml-auto lg:ml-auto ml-28">From £3</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Trousers</span>
      </span>
      <span>£8</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Dress</span>
      </span>
      <span>£13</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Two-Piece Suit</span>
      </span>
      <span>£16</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Knitwear</span>
      </span>
      <span>£9</span>
    </li>
  </ul>
</div>      
 <div className="lg:w-[23.88rem] md:w-[17.75rem] mb-5 md:mb-0 lg:mb-0 mx-auto p-7 border border-white-200 text-white">
  <h2 className="text-xl font-semibold mb-10 text-customGray">HouseHold</h2>


  <ul className="space-y-5 md:text-xs lg:text-xl text-xs">
    <li className="font-medium lg:w-[8.125rem] md:w-[6.25rem] w-[6.25rem]"> Wash,dry and fold</li>
    <li className="flex justify-between  font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Shirt (Hanger)</span>
      </span>
      <span className="md:ml-auto lg:ml-auto ml-28">From £3</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Trousers</span>
      </span>
      <span>£8</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Dress</span>
      </span>
      <span>£13</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Two-Piece Suit</span>
      </span>
      <span>£16</span>
    </li>

    <li className="flex justify-between font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Knitwear</span>
      </span>
      <span>£9</span>
    </li>
  </ul>
</div>      
            </div>
             <div className=" flex justify-center md:mb-4 ">
               <p className='hidden md:text-center md:text-[1.625rem] md:font-light lg:text-center lg:text-[26px] lg:font-light md:text-white lg:text-white'> Free Collecting Laundry £20 Min Spend</p>
             <button type="button" className=" md:hidden flex gap-2 text-customBlue bg-customYellow items-center font-semibold text-2xl rounded-md lg:rounded-full md:rounded-full px-10 py-4 text-center  md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600 " onClick={handlePriceListClick}><span>View Full Price List</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
  
    </section>
  )
}

export default Pricing
