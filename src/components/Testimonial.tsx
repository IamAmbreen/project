

interface SectionData {
  title: string;
  description: string;
  alignment: 'justify-start' | 'justify-end';
  titleCenter?: boolean;
  heightClass?: string;
 paragraphPaddingClass?: string;
 innerPaddingClass?: string;
}
const sections: SectionData[] = [
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.",
    alignment: 'justify-end',
    titleCenter: false,
    heightClass : 'xl:h-[38.22rem] lg:h-[22.94rem] lg-m:h-[15.94rem] md:h-[15rem] h-[18.375rem]',
    paragraphPaddingClass : '  pr-4 pl-12 md:pl-12 md:pr-10 lg-m:pr-60 lg-m:pl-18.5 lg:pr-91 lg:pl-18.5 xl:pl-42 xl:pr-72 ',
     innerPaddingClass: 'lg:py-13',
    
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.",
    alignment: 'justify-start',
    titleCenter: true,
    heightClass : 'xl:h-[38.22rem] lg:h-[22.94rem] lg-m:h-[15.94rem] md:h-[15rem] h-[19.375rem]',
    paragraphPaddingClass : '   pl-14 pr-6 md:pl-26 md:pr-12 lg-m:pr-14 lg-m:pl-52  lg:pl-52 lg:pr-56 xl:pl-72 xl:pr-68',
    
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.",
    alignment: 'justify-end',
    titleCenter: false,
    heightClass : 'xl:h-[38.22rem] lg:h-[22.94rem] lg-m:h-[15.94rem] md:h-[15rem] h-[18.375rem] ',
     paragraphPaddingClass : '  pr-4 pl-12 md:pl-12 md:pr-10 lg-m:pr-60 lg-m:pl-18.5 lg:pr-91 lg:pl-18.5 xl:pl-42 xl:pr-72',
      innerPaddingClass: 'lg:py-13',
     

  },
];

const DynamicSection = () => {
  const handleOrderClick = () => {
    console.log();
  };

  return (
    <section className="h-100 text-customBlue bg-white pt-16 lg-m:pt-24 lg:pt-32 xl:pt-40 lg:pb-0 pb-20">
      {sections.map((section, index) => (
        <div key={index} className={`flex ${section.alignment}  mb-15 lg-m:mb-16 lg:mb-24  xl:mb-38 ${index === sections.length - 1 ? '' : ''}`}>
          <div className={` bg-customBlue w-3/4 text-white text-start flex flex-col justify-center ${section.heightClass} `}>
            <h1 className={`mb-4 lg-m:mb-5  lg:mb-5 xl:mb-10  mt-2 lg-m:mt-0 lg:mt-0 xl:mt-0  text-2xl md:text-3xl lg-m:4xl lg:text-6xl xl:text-7xl  font-bold lg-m:font-semibold lg:font-semibold xl:font-semibold font-jakarta ${section.titleCenter ? '' : ''} ${index === 1 ? ' lg:pl-52 pl-14 md:pl-26 lg-m:pl-52 xl:pl-72' : '  pl-12 lg-m:pl-18.5 lg:pl-18.5 xl:pl-42  '}`}>
              {section.title}
            </h1>
            <p className={`text-[0.69rem] md:text-[1rem] lg-m:text-[1rem] lg:text-[1.3rem] xl:text-[2.5rem]  font-normal  lg-m:font-extralight lg:font-extralight  xl:font-extralight font-inter  leading-[19.4px] lg-m:leading-6 lg:leading-7 xl:leading-16  mb-3  ${section.paragraphPaddingClass}`}>
              {section.description}
            </p>
          </div>
        </div>
      ))}
      
      <div className="text-center  ">
        <h1 className="uppercase  text-[2.0625rem] md:text-2xl  lg-m:text-4xl lg:px-0 lg:text-7xl xl:text-9xl  px-16 lg:font-semibold lg-m:font-semibold mt-22  lg-m:mt-32 lg:mt-40 xl:mt-52 font-bold  lg-m:mb-10 lg:mb-10  xl:mb-20 leading-8  lg-m:leading-none lg:leading-none xl:leading-none lg-m:tracking-tight lg:tracking-tight xl:tracking-tight ">
          Our promise to you
        </h1>
         <p className="  text-center text-sm md:text-base lg-m:text-base  lg:text-[1.25rem] xl:text-[2.8rem] mb-24 lg-m:mb-20 lg:mb-24 xl:mb-46 leading-[1.3125rem] lg-m:leading-8  lg:leading-9 xl:leading-16  mt-10  lg:mt-0  tracking-wide lg:tracking-0 lg-m:tracking-none font-medium  lg:font-normal lg-m:font-normal  px-22 md:px-25 lg-m:px-64 lg:px-72 xl:px-96   ">
         We do everything to minimise any risk, but on the very rare occasion an item is damaged, we’ll hold our hands up and admit the mistake and either fix it or compensate you for any damage or loss    </p>
   
      </div>
  
      
      <div className="flex  lg:px-32 lg:mb-38 xl:mt-39 justify-center">
       <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow text-[0.875rem] lg-m:text-[1rem] lg:text-[1.75rem] xl:text-[2rem]  rounded-md lg-m:rounded-full lg:rounded-full xl:rounded-full  px-8.5 lg-m:px-15 lg:px-20  xl:px-24 py-2.5 lg-m:py-5 lg:py-3 xl:py-7 lg-m:font-inter font-medium  lg:font-inter lg-m:font-bold lg:font-bold   text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600"
          onClick={handleOrderClick}>
          <span className="hidden lg:block lg-m:block   ">Order Now</span>
          <span className="uppercase lg:hidden lg-m:hidden ">Book Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg-m:block lg:block xl:block  w-3 h-3 lg-m:w-4 lg-m:h-4 lg:w-5 lg:h-5 xl:w-8 xl:h-7 " />
        </button>
      </div>
    </section>
  );
};

export default DynamicSection;