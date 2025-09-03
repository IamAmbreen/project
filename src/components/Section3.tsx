

const Section3 = () => {
  const handlePriceListClick = () => {
    console.log()
  }
  return (
    <section className="h-100 bg-customBlue text-white ">
        <div className="py-6 text-center ">
             <h1 className=' uppercase text-6xl font-bold mt-28 mb-4'>
                Pricing
            </h1>
        </div>
        <div>
             <p className=' text-center text-[20px] font-light mb-6'> Here are some of Our Most Popular Services</p>
        </div>
         <div className=" flex px-32 py-16 justify-center mb-4 ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold text-2xl rounded-full px-16 py-4 text-center transition-colors duration-300 hover:bg-yellow-600 " onClick={handlePriceListClick}><span>View Full Price List</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
            <div className="flex px-48 ">
                <div className="max-w-sm mx-auto p-7 border border-white-200 text-white">
  <h2 className="text-2xl font-semibold mb-10 text-neutral-600">Most Popular</h2>


  <ul className="space-y-3 mb-10">
    <li className="font-medium"> Cleaned and <br/> ironed</li>
    <li className="flex justify-between  font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Shirt Hanger</span>
      </span>
      <span className="ml-28">From £3</span>
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
 <div className="max-w-sm mx-auto p-7  border-4 border-white-200 text-white">
  <h2 className="text-2xl font-semibold mb-10 text-neutral-600">Service Wash</h2>


  <ul className="space-y-3 mb-10">
    <li className="font-medium"> Wash,dry and <br/> fold</li>
    <li className="flex justify-between  font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Shirt (Hanger)</span>
      </span>
      <span className="ml-28">From £3</span>
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
 <div className="max-w-sm mx-auto p-7 border border-white-200 text-white">
  <h2 className="text-2xl font-semibold mb-10 text-neutral-600">Household</h2>


  <ul className="space-y-3 mb-10">
    <li className="font-medium"> Household and <br/> bedding</li>
    <li className="flex justify-between  font-light">
      <span className="flex items-center gap-2">
        <img src="src\assets\icons\Vector.png" alt="" /> <span>Shirt Hanger</span>
      </span>
      <span className="ml-28">From £3</span>
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
           
              <div className="py-16">
             <p className=' text-center text-[26px] font-light mb-6'> Free Collecting Laundry £20 Min Spend</p>
        </div>
  
    </section>
  )
}

export default Section3
