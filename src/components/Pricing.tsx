

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCardData {
  title: string;
  subtitle: string;
  items: PriceItem[];
}

const pricingData: PriceCardData[] = [
  {
    title: 'Most Popular',
    subtitle: 'Cleaned and ironed',
    items: [
      { name: 'Shirt Hanger', price: 'From £3' },
      { name: 'Trousers', price: '£8' },
      { name: 'Dress', price: '£13' },
      { name: 'Two-Piece Suit', price: '£16' },
      { name: 'Knitwear', price: '£9' },
    ],
  },
  {
    title: 'Service Wash',
    subtitle: 'Wash , dry and fold',
    items: [
      { name: 'Shirt Hanger', price: 'From £3' },
      { name: 'Trousers', price: '£8' },
      { name: 'Dress', price: '£13' },
      { name: 'Two-Piece Suit', price: '£16' },
      { name: 'Knitwear', price: '£9' },
    ],
  },
  {
    title: 'HouseHold',
    subtitle: 'Household and bedding',
    items: [
      { name: 'Shirt Hanger', price: 'From £3' },
      { name: 'Trousers', price: '£8' },
      { name: 'Dress', price: '£13' },
      { name: 'Two-Piece Suit', price: '£16' },
      { name: 'Knitwear', price: '£9' },
    ],
  },
];
const Pricing = () => {
  const handlePriceListClick = () => {
    console.log();
  };

  return (
    <section className="py-14 lg:py-30 bg-customBlue text-white">
      <h1 className='uppercase text-center  text-3xl lg-m:4xl lg:text-6xl xl:text-7xl font-bold  lg-m:font-semibold lg:font-semibold xl:font-semibold  mb-3 lg-m:mb-6 lg:mb-10.5 xl:mb-14.5 '>
        Pricing
      </h1>
      <p className='text-center text-sm lg-m:text-[1rem] lg:text-[1.25rem] xl:text-[2.5rem] font-medium lg-m:font-light lg:font-light xl:font-light  px-24  md:px-0 lg-m:px-0 lg:px-0 xl:px-0 mb-10 md:mb-10 lg-m:mb-16 lg:mb-20 xl:mb-24  '> Here are some of Our Most Popular Services</p>

      <div className="hidden md:flex lg-m:flex lg:flex xl:flex md:justify-center lg-m:justify-center lg:justify-center md:mb-16 lg-m:mb-18  lg:mb-20 xl:mb-28 ">
        <button
          type="button"
          className="flex gap-2 text-customBlue md:uppercase lg-m:normal-case lg:normal-case xl:normal-case bg-customYellow items-center lg-m:font-inter lg:font-inter xl:font-inter md:font-medium lg-m:font-bold lg:font-bold xl:font-bold md:text-[0.875rem] lg-m:text-[1rem] lg:text-[1.5062rem] xl:text-[2rem] md:rounded-md  lg-m:rounded-full lg:rounded-full xl:rounded-full md:px-8.5 lg-m:px-18.5 lg:px-18.5 xl:px-26  md:py-2.5 lg-m:py-5.5 lg:py-5.5 xl:py-7  text-center transition-colors duration-300 hover:bg-yellow-600"
          onClick={handlePriceListClick} >
          <span>View Full Price List</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className=" hidden lg-m:flex lg:flex xl:flex   lg-m:w-4 lg-m:h-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7" />
        </button>
      </div>

      <div className="flex flex-col  md:w-full lg-m:w-full lg:w-full xl:w-full lg-m:gap-3 lg:gap-4 xl:gap-7 md:flex-row lg-m:flex-row lg:flex-row xl:flex-row px-16 md:px-8 lg-m:px-20  lg:px-31.5 xl:px-60 md:mb-12 lg-m:mb-16 lg:mb-18 xl:mb-24 ">
        {pricingData.map((card, cardIndex) => (
          <div 
            key={cardIndex} 
            className={`
            md:w-1/3 lg-m:w-1/3 lg:w-1/3 xl:w-1/3 mx-auto py-8 px-4 md:py-3 mb-3 md:mb-0 lg-m:mb-0 lg:mb-0 xl:mb-0 md:p-6 lg-m:p-6 lg:p-9 xl:p-14
              ${cardIndex === 0 ? 'border-8'  : 'border-2 '} 
              ${cardIndex === 1 ? ' md:border lg-m:border-4 lg:border-8 xl:border-8' : ' md:border lg-m:border-2 lg:border-2 xl:border-2 '}
              border-white-200`} >
            <h2 className=" text-xl md:text-xl lg-m:text-2xl lg:text-2xl xl:text-4xl  font-semibold  mb-8 md:mb-10 lg-m:mb-12 lg:mb-22 xl:mb-26  text-customGray">{card.title}</h2>
            <p className="font-medium w-full md:w-full lg-m:w-full lg:w-full xl:w-full text-[0.6875rem]  md:text-xs  lg-m:text-sm lg:text-xl xl:text-3xl pr-38 md:pr-21.5 lg-m:pr-18 lg:pr-32 xl:pr-65 pl-5 lg:pl-5  xl:pl-12 mb-3  "> {card.subtitle}</p>
            <ul className="space-y-5 xl:space-y-10 text-[0.6875rem] lg:text-xl xl:text-3xl mb-4 lg:mb-5  font-normal md:font-extralight lg-m:font-extralight lg:font-extralight ">
              
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between">
                  <span className="flex items-center gap-2 xl:gap-4">
                    <img src="src/assets/icons/Vector.png" alt=""  className="xl:h-7 xl:w-8"/>
                    <span>{item.name}</span>
                  </span>
                  <span className="ml-28 md:ml-3 lg-m:ml-22 lg:ml-auto ">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 lg:mt-0">
        <p className='hidden lg-m:block lg:block xl:block lg:py-8 lg:text-center lg:text-[26px] xl:text-4xl lg:font-light lg:text-white'> Free Collecting Laundry £20 Min Spend</p>
        <button
          type="button"
          className="  md:hidden lg-m:hidden lg:hidden xl:hidden  uppercase flex gap-2 text-customBlue bg-customYellow items-center rounded-md font-medium leading-6 text-[0.875rem] px-9 py-3 text-center"
          onClick={handlePriceListClick}>
          <span>View Full Price List</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden  w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Pricing;