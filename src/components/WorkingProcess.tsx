

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
      <div className=' text-center mt-8 md:mt-22 lg-m:mt-24 lg:mt-[7.44rem] xl:mt-36  md:mb-7 lg-m:mb-9 lg:mb-11 xl:mb-22 '>
        <p className='uppercase text-[0.875rem]  md:text-base lg-m:text-xl lg:text-2xl xl:text-4xl  md:tracking-tight lg-m:tracking-tight lg:tracking-tight xl:tracking-tight  font-medium lg-m:font-normal lg:font-normal xl:font-normal'>dry cleaning & Laundry</p>
        <h1 className='text-4xl lg-m:text-5xl lg:text-6xl xl:text-8xl font-bold lg-m:font-semibold lg:font-semibold xl:font-semibold  leading-8 lg-m:leading-tight lg:leading-tight xl:leading-tight lg-m:tracking-tight lg:tracking-tight xl:tracking-tight '>
          How it works
        </h1>
      </div>

      <div className="flex flex-col  md:flex-row lg-m:flex-row lg:flex-row xl:flex-row items-center justify-evenly md:px-5 lg-m:px-14 lg:px-29.5 xl:px-44 text-center max-w-full w-full">
        {steps.map((step, index) => (
          <div key={index} className="contents">
            <div className="w-full  md:w-1/3 lg-m:1/3 lg:w-1/3 xl:w-1/3 mb-8  md:p-0 lg-m:p-0 lg:p-12 xl:p-20 mt-18.5 lg-m:mt-0 lg:mt-0 xl:mt-0">
              <img src={step.imageSrc} alt={step.altText} className="mx-auto w-30 h-31 md:h-20 md:w-20 lg-m:h-28 lg-m:w-28  lg:w-28 lg:h-28 xl:w-48 xl:h-48" />
              <h2 className="font-bold lg-m:semibold lg:font-semibold xl:font-semibold  text-[1.5rem] md:text-base lg-m:text-2xl  lg:text-2xl xl:text-5xl lg-m:text-customBlack lg:text-customBlack xl:text-customBlack  tracking-tight leading-10.5 lg-m:leading-none lg:leading-none xl:leading-none mt-7">
                <a href="#">{step.title}</a>
              </h2>
              <p className=" lg-m:text-customBlack lg:text-customBlack xl:text-customBlack leading-5 mt-7  font-normal text-sm md:text-xs lg-m:text-base lg:text-base xl:text-3xl  px-20 md:px-1 lg-m:px-3  lg:px-7 xl:px-10">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:hidden relative flex-col items-center lg-m:flex  lg:flex xl:flex ">
                <div className=" h-40 lg-m:h-64 lg:h-72  xl:h-96 w-1 bg-customBlue rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-30 h-31 lg-m:w-10 lg-m:h-10 lg:h-12 lg:w-12 xl:h-24 xl:w-24  bg-white rounded-full flex items-center justify-center border border-customGray">
                  <img src="src/assets/icons/arrow-right.png" alt="arrow" className=" lg-m:h-[1rem] lg-m:w-[1rem] lg:h-[1.87rem] lg:w-[1.87rem] xl:h-[3rem] xl:w-[3rem] " />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center lg-m:px-30 lg:px-32 lg-m:py-13 lg:py-18.5 xl:py-26 mt-11 lg-m:mt-8 lg:mt-12.5 xl:mt-20 mb-11">
        <button
          type="button"
          className="flex gap-2 items-center text-customBlue bg-customYellow text-[0.875rem] lg-m:text-[1rem]  lg:text-[1.75rem] xl:text-[2rem] rounded-md lg-m:rounded-full  lg:rounded-full xl:rounded-full  px-8.5 lg-m:px-15 lg:px-20 xl:px-26 lg-m:py-5 lg:py-3 xl:py-7 lg-m:font-inter lg:font-inter xl:font-inter font-medium  lg-m:font-bold lg:font-bold xl:font-bold  py-2.5  text-center lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600 lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 xl:transition-colors  xl:duration-300  xl:hover:bg-yellow-600 "
          onClick={handleOrderNowClick}>
          <span className="hidden lg:block lg-m:block xl:block   ">Order Now</span>
          <span className="uppercase lg:hidden lg-m:hidden xl:hidden ">Book Now</span>
          <img src="src/assets/icons/arrow-up-right.png" alt="" className="hidden lg:block lg-m:block xl:block w-3 h-3 lg-m:w-4 lg-m:h-4  lg:w-5 lg:h-5 xl:w-7 xl:h-7 " />
        </button>
      </div>
    </section>
  );
};

export default WorkingProcess;