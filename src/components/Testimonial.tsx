

const Testimonial = () => {
    const handleOrderClick = () => {
        console.log()
    }
  return (
    <section className="h-100 text-customBlue bg-white pt-20">
        <div className="flex justify-end py-9">
            <div className="bg-customBlue md:h-[376px] lg:h-[376px] md:w-[975px] lg:w-[975px] md:px-16 lg:px-16 lg:py-10 md:py-10 h-[294px] w-[360px] px-8 py-8 text-white text-start">
                <h1 className=" md:text-6xl lg:text-6xl text-[24px] font-semibold ">Your Title</h1>
                <p className="md:mt-10 lg:mt-10 md:text-[20px] lg:text-[20px] font-light md:max-w-[550px] lg:max-w-[550px] text-[14px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.</p>
            </div>

        </div>

         <div className="flex justify-start py-9">
            <div className="bg-customBlue md:h-[376px] lg:h-[376px] md:w-[975px] lg:w-[975px] md:px-16 lg:px-16 lg:py-10 md:py-10 h-[294px] w-[360px] px-8 py-8 text-white text-start">
                <h1 className=" md:text-6xl lg:text-6xl text-[24px] font-semibold text-center ">Your Title</h1>
                <p className="md:mt-10 lg:mt-10 md:text-[20px] lg:text-[20px] font-light md:max-w-[550px] lg:max-w-[550px] text-[14px] mx-auto ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.</p>
            </div>

        </div>
         <div className="flex justify-end py-9 mb-28">
            <div className="bg-customBlue md:h-[376px] lg:h-[376px] md:w-[975px] lg:w-[975px] md:px-16 lg:px-16 lg:py-10 md:py-10 h-[294px] w-[360px] px-8 py-8 text-white text-start">
                <h1 className="md:text-6xl lg:text-6xl text-[24px] font-semibold ">Your Title</h1>
                <p className="md:mt-10 lg:mt-10 md:text-[20px] lg:text-[20px] font-light md:max-w-[550px] lg:max-w-[550px] text-[14px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.</p>
            </div>

        </div>
          <div className="text-center">
            <h1 className=" uppercase md:text-5xl lg:text-5xl text-3xl md:w-[1025px] lg:w-[1025px] w-[316px] font-bold mb-4 mx-auto">
                Our promise to you
            </h1>
        </div>
        <div className="m-10 md:w-[803px] lg:w-[803px] w-[271px] mx-auto text-center md:text-[20px] lg:text-[20px] text-[14px]">
            <p>
                ihateironing offers professional dry cleaning services in Battersea and the surrounding areas. Our dedicated team in Battersea ensures that your garments are treated with care and attention to detail, and returned to your doorstep in as little as 24 hours.            </p>
        </div>
        <div className=" flex md:px-32 lg:px-32 md:py-16 px-16 py-8 lg:py-16 justify-center ">
             <button type="button" className=" flex gap-2 text-customBlue bg-customYellow items-center font-semibold md:text-2xl lg:text-2xl text-[16px] md:rounded-full lg:rounded-full rounded-md px-10 py-4 md:px-16 lg:px-16 md:py-4 lg:py-4  text-center transition-colors duration-300 hover:bg-yellow-600 " onClick={handleOrderClick}><span>Order Now</span><img src="src\assets\icons\arrow-up-right.png" alt="" className="w-4 h-4" /></button>
            </div>
           
    </section>
  )
}

export default Testimonial
