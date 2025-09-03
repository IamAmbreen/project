

const Section6 = () => {
    const handleOrderClick = () => {
        console.log()
    }
  return (
    <section className="h-100 text-customBlue bg-white pt-20">
        <div className="flex justify-end py-9">
            <div className="bg-customBlue h-[376px] w-[975px] px-16 py-16 text-white text-start">
                <h1 className=" text-6xl font-semibold ">Your Title</h1>
                <p className="mt-10 text-[16px] font-light max-w-[550px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.</p>
            </div>

        </div>

         <div className="flex justify-start py-9">
            <div className="bg-customBlue h-[376px] w-[975px] px-16 py-16 text-white text-start">
                <h1 className=" text-6xl font-semibold text-center ">Your Title</h1>
                <p className="mt-10 text-[16px] font-light max-w-[550px] mx-auto ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.</p>
            </div>

        </div>
         <div className="flex justify-end py-9 mb-28">
            <div className="bg-customBlue h-[340px] w-[975px] px-16 py-16 text-white text-start">
                <h1 className=" text-6xl font-semibold ">Your Title</h1>
                <p className="mt-10 text-[16px] font-light max-w-[550px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.</p>
            </div>

        </div>
          <div className="text-center">
            <h1 className=" uppercase text-5xl font-bold mb-4">
                Our promise to you
            </h1>
        </div>
        <div className="m-10 max-w-2xl mx-auto text-center text-[16px]">
            <p>
                ihateironing offers professional dry cleaning services in Battersea and the surrounding areas. Our dedicated team in Battersea ensures that your garments are treated with care and attention to detail, and returned to your doorstep in as little as 24 hours.            </p>
        </div>
        <div className=" flex px-32 py-16 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold text-2xl rounded-full px-16 py-4 text-center transition-colors duration-300 hover:bg-yellow-600 " onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
           
    </section>
  )
}

export default Section6
