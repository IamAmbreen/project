

interface SectionData {
  title: string;
  description: string;
  alignment: 'justify-start' | 'justify-end';
  titleCenter?: boolean;
}
const sections: SectionData[] = [
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo.",
    alignment: 'justify-end',
    titleCenter: false,
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo.",
    alignment: 'justify-start',
    titleCenter: true,
  },
  {
    title: 'Your Title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, turpis ac feugiat tincidunt, ante orci sagittis erat, vitae dictum diam mi id velit. Nam condimentum, orci vitae feugiat imperdiet, massa tellus laoreet augue, id mattis velit lacus congue leo.",
    alignment: 'justify-end',
    titleCenter: false,
  },
];

const DynamicSection = () => {
  const handleOrderClick = () => {
    console.log();
  };

  return (
    <section className="h-100 text-customBlue bg-white pt-20">
      {sections.map((section, index) => (
        <div key={index} className={`flex ${section.alignment} py-9 ${index === sections.length - 1 ? 'mb-28' : ''}`}>
          <div className="bg-customBlue md:h-[21.88rem] lg:h-[23.5rem] md:w-[30.93rem] lg:w-[59.06rem] md:px-16 lg:px-16 lg:py-10 md:py-10 h-[12.5rem] w-[17.625rem] px-8 py-8 text-white text-start">
            <h1 className={`md:text-5xl lg:text-6xl text-2xl font-semibold ${section.titleCenter ? 'text-center' : ''}`}>
              {section.title}
            </h1>
            <p className="md:mt-10 lg:mt-10 md:text-[1rem] lg:text-[1.3rem] font-light md:max-w-[30.93rem] lg:max-w-[34.38rem] text-[0.59rem] ">
              {section.description}
            </p>
          </div>
        </div>
      ))}
      
      <div className="text-center">
        <h1 className="uppercase md:text-4xl lg:text-5xl text-3xl md:w-[60rem] lg:w-[64rem] w-[19.75rem] font-bold mb-4 mx-auto">
          Our promise to you
        </h1>
      </div>
      
      <div className="m-10 md:w-[50.19rem] lg:w-[64.19rem] w-[16.17rem] mx-auto text-center md:text-[1rem] lg:text-[1.3rem] text-[0.59rem]">
        <p>
          ihateironing offers professional dry cleaning services in Battersea and the surrounding areas. Our dedicated team in Battersea ensures that your garments are treated with care and attention to detail, and returned to your doorstep in as little as 24 hours.
        </p>
      </div>
      
      <div className="flex md:px-32 lg:px-32 md:py-16 px-16 py-8 lg:py-16 justify-center">
        <button type="button" className="flex gap-2 text-customBlue bg-customYellow items-center font-semibold lg:text-[1rem] md:text-[1rem] text-xs md:rounded-full lg:rounded-full rounded-md px-10 py-4 md:px-16 lg:px-16 md:py-4 lg:py-4 text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-600" onClick={handleOrderClick}>
          <span>Order Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default DynamicSection;