

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
      <h1 className='uppercase text-center  lg:text-6xl lg-m:4xl text-3xl lg:font-semibold lg-m:font-semibold font-bold  lg:mb-10.5 lg-m:mb-6 mb-3'>
        Pricing
      </h1>
      <p className='text-center  lg:text-[1.25rem] lg-m:text-[1rem] text-sm lg:font-light lg-m:font-light font-medium px-24  lg:px-0 lg-m:px-0 md:px-0 lg:mb-20 lg-m:mb-16 md:mb-10'> Here are some of Our Most Popular Services</p>

      <div className="hidden  lg:flex lg-m:flex md:flex lg:justify-center lg-m:justify-center md:justify-center lg:mb-20 lg-m:mb-18 md:mb-16">
        <button
          type="button"
          className="flex gap-2 text-customBlue md:uppercase lg:normal-case lg-m:normal-case bg-customYellow items-center lg:font-inter lg-m:font-inter lg:font-bold lg-m:font-bold md:font-medium lg:text-[1.5062rem] lg-m:text-[1rem] md:text-[0.875rem] lg:rounded-full lg-m:rounded-full md:rounded-md  lg:px-18.5 lg-m:px-18.5 lg:py-5.5 lg-m:py-5.5 md:px-8.5 md:py-2.5 text-center transition-colors duration-300 hover:bg-yellow-600"
          onClick={handlePriceListClick}
        >
          <span>View Full Price List</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="md:hidden lg:flex lg-m:flex lg:h-5 lg:w-5 lg-m:w-4 lg-m:h-4" />
        </button>
      </div>

      <div className="flex flex-col  lg:w-full lg-m:w-full  lg:gap-4 lg-m:gap-3  lg:flex-row lg-m:flex-row md:flex-row lg:px-31.5 lg-m:px-20 md:px-6 px-16 lg:mb-18 lg-m:mb-16 md:mb-12">
        {pricingData.map((card, cardIndex) => (
          <div 
            key={cardIndex} 
            className={`
              lg:w-1/3 lg-m:w-1/3 md:w-1/3  mx-auto py-8 px-4 mb-3 lg:mb-0 lg-m:mb-0 md:mb-0 lg:p-9 lg-m:p-6 md:p-4
              ${cardIndex === 0 ? 'border-8'  : 'border-2 '} 
              ${cardIndex === 1 ? 'lg:border-8 lg-m:border-4 md:border' : 'lg:border-2 lg-m:border-2 md:border'}
              border-white-200`} >
            <h2 className="lg:text-2xl lg-m:text-2xl md:text-xl text-xl font-semibold lg:mb-22 lg-m:mb-12 md:mb-10 mb-8 text-customGray">{card.title}</h2>
            <p className="font-medium lg:w-full lg-m:w-full md:w-full lg:text-xl lg-m:text-sm md:text-xs text-[0.6875rem] lg:pr-32 lg-m:pr-18 md:pr-22 lg:pl-5 pl-5 pr-37  w-full"> {card.subtitle}</p>
            <ul className="space-y-5  lg:text-xl text-[0.6875rem] lg:mb-5 mb-4 lg:font-extralight font-normal">
              
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <img src="src/assets/icons/Vector.png" alt="" />
                    <span>{item.name}</span>
                  </span>
                  <span className=" lg:ml-auto ml-28 lg-m:ml-22 md:ml-18">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 lg:mt-0">
        <p className='hidden  lg:block lg-m:block lg:py-8 lg:text-center lg:text-[26px] lg:font-light lg:text-white'> Free Collecting Laundry £20 Min Spend</p>
        <button
          type="button"
          className=" lg:hidden lg-m:hidden md:hidden uppercase flex gap-2 text-customBlue bg-customYellow items-center rounded-md font-medium leading-6 text-[0.875rem] px-9 py-3 text-center"
          onClick={handlePriceListClick}>
          <span>View Full Price List</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden  w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Pricing;