

interface ProcessStep {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    imageSrc: "src/assets/icons/Asset 2.png",
    altText: "Book icon",
    title: "Book",
    description: "Choose a convenient date, time and location for pickup.",
  },
  {
    imageSrc: "src/assets/icons/Asset 3.png",
    altText: "Collect icon",
    title: "Collect",
    description: "We will collect your bag, clean your garments in house and invoice you.",
  },
  {
    imageSrc: "src/assets/icons/asset5 1.png",
    altText: "Deliver icon",
    title: "Deliver",
    description: "Your cleaning will be delivered back on the scheduled date & time.",
  },
];

const WorkingProcess = () => {
  const handleOrderNowClick = () => {
    console.log();
  };

  return (
    <section className='bg-white text-customBlue'>
      <div className='mt-8 text-center  lg:mt-[7.44rem] lg:mb-11 '>
        <p className='uppercase text-[0.875rem] lg:text-2xl  lg:tracking-tight lg:font-normal font-medium'>dry cleaning & Laundry</p>
        <h1 className='text-[2.0625rem] lg:text-6xl  lg:font-semibold font-bold lg:leading-tight leading-8 lg:tracking-tight'>
          How it works
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row  items-center justify-evenly lg:px-29.5 text-center max-w-full w-full">
        {steps.map((step, index) => (
          <div key={index} className="contents">
            <div className="w-full lg:w-1/3 mb-8   lg:p-12 lg:mt-0 mt-18.5">
              <img src={step.imageSrc} alt={step.altText} className="mx-auto w-30 h-31 lg:w-28  lg:h-28 " />
              <h2 className="lg:font-semibold font-bold text-[1.5rem] lg:text-black lg:text-2xl  tracking-tight lg:leading-none leading-10.5 mt-4">
                <a href="#">{step.title}</a>
              </h2>
              <p className="lg:tracking-none lg:text-black  leading-5 mt-4 text-sm font-normal lg:text-base px-20 lg:px-7  ">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden relative flex-col items-center  lg:flex ">
                <div className="h-40 lg:h-72  w-1 bg-customBlue rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-30 h-31  lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center border border-customGray">
                  <img src="src/assets/icons/arrow-right.png" alt="arrow" className=" lg:h-[1.87rem] lg:w-[1.87rem]" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center  lg:px-32 lg:py-18.5 lg:mt-12.5 mt-11 mb-11">
        <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow lg:text-[1.75rem]  text-[0.875rem] rounded-md lg:rounded-full  px-8.5 lg:px-20 lg:py-5 lg:font-inter lg:font-bold font-medium py-2.5  text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600"
          onClick={handleOrderNowClick}>
          <span className="hidden lg:block  ">Order Now</span>
          <span className="uppercase lg:hidden ">Book Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block  w-3 h-3  lg:w-5 lg:h-5" />
        </button>
      </div>
    </section>
  );
};

export default WorkingProcess;