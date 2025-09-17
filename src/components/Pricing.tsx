

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
      { name: 'Shirt (Hanger)', price: 'From £3' },
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
      { name: 'Shirt (Hanger)', price: 'From £3' },
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
      <h1 className='uppercase text-center  lg:text-6xl text-3xl lg:font-semibold font-bold  lg:mb-10.5 mb-3'>
        Pricing
      </h1>
      <p className='text-center  lg:text-[1.25rem] text-sm lg:font-light font-medium px-24 lg:px-0 lg:mb-20 mb-16'> Here are some of Our Most Popular Services</p>

      <div className="hidden  lg:flex lg:justify-center lg:mb-20">
        <button
          type="button"
          className="flex gap-2 text-customBlue bg-customYellow items-center font-bold lg:text-[1.5062rem]  lg:rounded-full  lg:px-16 lg:py-7  text-center transition-colors duration-300 hover:bg-yellow-600"
          onClick={handlePriceListClick}
        >
          <span>View Full Price List</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="w-4 h-4 lg:h-5 lg:w-5" />
        </button>
      </div>

      <div className="flex flex-col  lg:w-full lg:gap-4 lg:flex-row lg:px-31.5 px-16 lg:mb-18">
        {pricingData.map((card, cardIndex) => (
          <div 
            key={cardIndex} 
            className={`
              lg:w-1/3  mx-auto py-8 px-4 mb-3 lg:mb-0 lg:p-9 
              ${cardIndex === 0 ? 'border-8' : 'border-2'} 
              ${cardIndex === 1 ? 'lg:border-8' : 'lg:border-2'}
              border-white-200`} >
            <h2 className="lg:text-2xl  text-xl font-semibold lg:mb-22 mb-10 text-customGray">{card.title}</h2>
            <p className="font-medium lg:w-full lg:text-xl text-[0.6875rem] lg:pr-32 lg:pl-5 pl-5 pr-37  w-full"> {card.subtitle}</p>
            <ul className="space-y-5  lg:text-xl text-[0.6875rem] lg:mb-5 mb-4 lg:font-extralight font-normal">
              
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between">
                  <span className="flex items-center gap-3">
                    <img src="src/assets/icons/Vector.png" alt="" />
                    <span>{item.name}</span>
                  </span>
                  <span className=" lg:ml-auto ml-28">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 lg:mt-0">
        <p className='hidden  lg:block lg:py-8 lg:text-center lg:text-[26px] lg:font-light lg:text-white'> Free Collecting Laundry £20 Min Spend</p>
        <button
          type="button"
          className=" lg:hidden uppercase flex gap-2 text-customBlue bg-customYellow items-center rounded-md font-medium leading-6 text-[0.875rem] px-10 py-4 text-center"
          onClick={handlePriceListClick}>
          <span>View Full Price List</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Pricing;