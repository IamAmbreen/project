

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
    heightClass : 'h-[22.94rem]',
    paragraphPaddingClass : 'lg:pr-72 lg:pl-18.5',
     innerPaddingClass: 'lg:py-13',
    
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat Curabitur turpis ac feugiat  tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim,  laoreet enim quis quam.",
    alignment: 'justify-start',
    titleCenter: true,
    heightClass : 'h-[26.94rem]',
    paragraphPaddingClass : 'lg:pl-52 lg:pr-30',
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo. Duis vehicula, libero vel ultrices varius, massa magna mattis enim, at laoreet enim elit quis quam.",
    alignment: 'justify-end',
    titleCenter: false,
    heightClass : 'h-[22.94rem]',
     paragraphPaddingClass : 'lg:pr-72 lg:pl-18.5',
      innerPaddingClass: 'lg:py-13',
     

  },
];

const DynamicSection = () => {
  const handleOrderClick = () => {
    console.log();
  };

  return (
    <section className="h-100 text-customBlue bg-white lg:pt-32">
      {sections.map((section, index) => (
        <div key={index} className={`flex ${section.alignment} lg:mb-24 ${index === sections.length - 1 ? '' : ''}`}>
          <div className={`bg-customBlue md:w-[30.93rem] lg:w-[63.375rem]  text-white text-start flex flex-col justify-center ${section.heightClass} `}>
            <h1 className={`md:text-5xl lg:mb-5 lg: lg:text-6xl text-2xl lg:pl-16 font-semibold ${section.titleCenter ? '' : ''} ${index === 1 ? 'lg:pl-52' : 'lg:pl-18.5'}`}>
              {section.title}
            </h1>
            <p className={` md:text-[1rem] lg:text-[1.3rem] font-extralight font-inter  lg:leading-7  text-[0.59rem] ${section.paragraphPaddingClass}`}>
              {section.description}
            </p>
          </div>
        </div>
      ))}
      
      <div className="text-center  ">
        <h1 className="uppercase md:text-4xl lg:text-7xl text-3xl  font-semibold lg:mt-40 mx-auto lg:mb-10 lg:tracking-tight">
          Our promise to you
        </h1>
         <p className="  text-center lg:text-[1.25rem] lg:mb-24 lg:leading-9 lg:px-72 ">
         We do everything to minimise any risk, but on the very rare occasion an item is damaged, we’ll hold our hands up and admit the mistake and either fix it or compensate you for any damage or loss    </p>
   
      </div>
  
      
      <div className="flex md:px-32 lg:px-32 lg:mb-38 justify-center">
        <button type="button" className="flex gap-2 text-customBlue bg-customYellow items-center lg:text-[1.75rem] md:text-[1rem] text-xs md:rounded-full lg:rounded-full rounded-md px-10 py-4 md:px-16 lg:px-16 md:py-4 lg:py-7 lg:font-inter lg:font-bold text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600" onClick={handleOrderClick}>
          <span>Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>
    </section>
  );
};

export default DynamicSection;