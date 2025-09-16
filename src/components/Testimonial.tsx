

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
    heightClass : 'lg:h-[22.94rem] h-[19.375rem]',
    paragraphPaddingClass : 'lg:pr-72 lg:pl-18.5 pr-10 pl-12',
     innerPaddingClass: 'lg:py-13',
    
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat Curabitur turpis ac feugiat  tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim,  laoreet enim quis quam.",
    alignment: 'justify-start',
    titleCenter: true,
    heightClass : 'lg:h-[26.94rem] h-[19.375rem]',
    paragraphPaddingClass : 'lg:pl-52 lg:pr-30 pl-15 pr-8',
    
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.",
    alignment: 'justify-end',
    titleCenter: false,
    heightClass : 'lg:h-[22.94rem] h-[19.375rem] ',
     paragraphPaddingClass : 'lg:pr-72 lg:pl-18.5 pr-10 pl-12',
      innerPaddingClass: 'lg:py-13',
     

  },
];

const DynamicSection = () => {
  const handleOrderClick = () => {
    console.log();
  };

  return (
    <section className="h-100 text-customBlue bg-white lg:pb-0 lg:pt-32  pt-16 pb-20">
      {sections.map((section, index) => (
        <div key={index} className={`flex ${section.alignment} lg:mb-24 mb-15 ${index === sections.length - 1 ? '' : ''}`}>
          <div className={` bg-customBlue md:w-[30.93rem] lg:w-[63.375rem] w-[21.9375rem] text-white text-start flex flex-col justify-center ${section.heightClass} `}>
            <h1 className={`md:text-5xl lg:mb-5 lg:mt-0 mt-2 mb-2 lg:text-6xl text-2xl lg:font-semibold font-bold ${section.titleCenter ? '' : ''} ${index === 1 ? 'lg:pl-52 pl-15' : 'lg:pl-18.5 pl-12'}`}>
              {section.title}
            </h1>
            <p className={` md:text-[1rem] lg:text-[1.3rem] lg:font-extralight font-inter font-normal lg:leading-7 text-[0.88rem] ${section.paragraphPaddingClass}`}>
              {section.description}
            </p>
          </div>
        </div>
      ))}
      
      <div className="text-center  ">
        <h1 className="uppercase md:text-4xl lg:text-7xl text-[2.0625rem] lg:px-0 px-16 lg:font-semibold lg:mt-40 mt-22 font-bold  lg:mb-10 lg:leading-none leading-8 lg:tracking-tight">
          Our promise to you
        </h1>
         <p className="  text-center lg:text-[1.25rem] text-[0.875rem] lg:mb-24 lg:leading-9 mt-10 mb-15 lg:mt-0 leading-5 tracking-wide lg:tracking-0 font-medium  lg:font-normal lg:px-72 px-22 ">
         We do everything to minimise any risk, but on the very rare occasion an item is damaged, we’ll hold our hands up and admit the mistake and either fix it or compensate you for any damage or loss    </p>
   
      </div>
  
      
      <div className="flex md:px-32 lg:px-32 lg:mb-38 justify-center">
        <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow lg:text-[1.75rem] md:text-[1rem] text-[0.875rem] rounded-md lg:rounded-full md:rounded-full px-8 md:px-16 lg:px-22 lg:py-9 lg:font-inter lg:font-bold font-medium py-3 md:py-4 text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600"
          onClick={handleOrderClick}>
          <span className="lg:normal-case uppercase ">Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block md:block w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </button> 
      </div>
    </section>
  );
};

export default DynamicSection;