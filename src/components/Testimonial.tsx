

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
    heightClass : 'lg:h-[22.94rem] lg-m:h-[15.94rem] md:h-[15rem] h-[18.375rem]',
    paragraphPaddingClass : 'lg:pr-91 lg:pl-18.5 lg-m:pr-60 lg-m:pl-18.5 pr-10 pl-12',
     innerPaddingClass: 'lg:py-13',
    
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.",
    alignment: 'justify-start',
    titleCenter: true,
    heightClass : 'lg:h-[26.94rem] lg-m:h-[15.94rem] md:h-[15rem] h-[19.375rem]',
    paragraphPaddingClass : 'lg:pl-52 lg:pr-56 lg-m:pr-14 lg-m:pl-52  pl-26 pr-12',
    
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.",
    alignment: 'justify-end',
    titleCenter: false,
    heightClass : 'lg:h-[22.94rem] lg-m:h-[15.94rem] md:h-[15rem] h-[18.375rem] ',
     paragraphPaddingClass : 'lg:pr-91 lg:pl-18.5 lg-m:pr-60 lg-m:pl-18.5  pr-10 pl-12',
      innerPaddingClass: 'lg:py-13',
     

  },
];

const DynamicSection = () => {
  const handleOrderClick = () => {
    console.log();
  };

  return (
    <section className="h-100 text-customBlue bg-white  lg:pb-0 lg:pt-32 lg-m:pt-24 pt-16 pb-20">
      {sections.map((section, index) => (
        <div key={index} className={`flex ${section.alignment} lg:mb-24 lg-m:mb-16 mb-15 ${index === sections.length - 1 ? '' : ''}`}>
          <div className={` bg-customBlue w-3/4 text-white text-start flex flex-col justify-center ${section.heightClass} `}>
            <h1 className={` lg:mb-5 lg-m:mb-5 lg:mt-0 lg-m:mt-0 mt-2 mb-4 lg:text-6xl lg-m:4xl md:text-3xl text-2xl lg:font-semibold lg-m:font-semibold font-jakarta font-bold ${section.titleCenter ? '' : ''} ${index === 1 ? 'lg:pl-52 lg-m:pl-52 pl-26' : 'lg:pl-18.5 lg-m:pl-18.5 pl-12'}`}>
              {section.title}
            </h1>
            <p className={`  lg:text-[1.3rem]  lg-m:text-[1rem] md:text-[1rem] lg:font-extralight lg-m:font-extralight font-inter font-normal leading-[19.4px] lg:leading-7 lg-m:leading-6 mb-3 text-[0.875rem] ${section.paragraphPaddingClass}`}>
              {section.description}
            </p>
          </div>
        </div>
      ))}
      
      <div className="text-center  ">
        <h1 className="uppercase lg:text-7xl lg-m:text-4xl md:text-2xl text-[2.0625rem] lg:px-0 px-16 lg:font-semibold lg-m:font-semibold  lg:mt-40 lg-m:mt-32  mt-22 font-bold lg:mb-10 lg-m:mb-10 lg:leading-none lg-m:leading-none leading-8 lg:tracking-tight lg-m:tracking-tight">
          Our promise to you
        </h1>
         <p className="  text-center lg:text-[1.25rem] lg-m:text-base md:text-base text-sm lg:mb-24 lg-m:mb-20 lg:leading-9 lg-m:leading-8 mt-10 mb-24 lg:mt-0 leading-[1.3125rem] tracking-wide lg:tracking-0 lg-m:tracking-none font-medium  lg:font-normal lg-m:font-normal lg:px-72 lg-m:px-64 md:px-25 px-22 ">
         We do everything to minimise any risk, but on the very rare occasion an item is damaged, we’ll hold our hands up and admit the mistake and either fix it or compensate you for any damage or loss    </p>
   
      </div>
  
      
      <div className="flex  lg:px-32 lg:mb-38 justify-center">
        <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow lg:text-[1.75rem] lg-m:text-[1rem]  text-[0.875rem] rounded-md lg:rounded-full lg-m:rounded-full  px-8.5 lg:px-20 lg-m:px-15 lg:py-3 lg-m:py-5 lg:font-inter lg-m:font-inter lg:font-bold lg-m:font-bold font-medium py-2.5  text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600"
          onClick={handleOrderClick}>
          <span className="">Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block lg-m:block  w-3 h-3 lg:w-5 lg:h-5 lg-m:w-4 lg-m:h-4" />
        </button>
      </div>
    </section>
  );
};

export default DynamicSection;