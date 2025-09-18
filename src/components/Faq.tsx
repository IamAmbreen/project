import { useState } from 'react';

import minusIcon from '../assets/icons/minus.png';
import plusIcon from '../assets/icons/plus.png';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do I place an order with ihateironing?",
    answer: "It's simple to place a dry cleaning or laundry collection in Battersea. Simply choose the most convenient time slots for you using the form above, and our drivers will be on their way to take your laundry off your hands."
  },
  {
    question: "Do you offer next day delivery in Battersea?",
    answer: "Yes, we do. Our team of expert drivers provides a reliable next-day delivery service for all dry cleaning and laundry orders."
  },
  {
    question: "What other services do you offer?",
    answer: "In addition to dry cleaning, we also offer a wide range of services including laundry, ironing, and repairs and alterations."
  },
  {
    question: "How does ihateironing clean my clothes?",
    answer: "We partner with local, professional cleaners who are experts in their craft. They use a combination of traditional techniques and modern equipment to ensure your clothes are returned in pristine condition."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-100 bg-white text-customBlue lg:pt-20 lg-m:pt-20 md:pt-10">
      <div className="bg-white">
        <h2 className="text-center px-9 mt-15  lg:mt-0 lg-m:mt-0 md:mt-0 lg:px-80 lg-m:px-60 md:px-60 lg:text-7xl lg-m:text-5xl md:text-3xl text-[2.0625rem] leading-10 lg:leading-normal lg-m:leading-normal font-bold lg:font-semibold lg-m:font-semibold mb-20 lg:mb-18 lg-m:mb-15 ">
          Frequently asked questions
        </h2>
        <div className=" lg:px-56 lg-m:px-47 md:px-16 px-11 w-full  lg:mb-30 lg-m:mb-26 mb-19 text-center lg:text-[1.32rem] lg-m:text-[1.10rem]">
          <ul className="lg:space-y-4 space-y-1">
            {faqData.map((faq, index) => (
              <li key={index} className="py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)} >
                  <span
                    className={`uppercase text-start lg:text-[1.15rem] lg-m:text-[1.15rem] text-[0.91875rem] font-bold ${
                      openIndex === index ? 'text-black' : 'text-customGray'}`} >
                    {faq.question}
                  </span>
                  <img
                    src={openIndex === index ? minusIcon : plusIcon}
                    alt={openIndex === index ? 'minus icon' : 'plus icon'}
                    className={`w-6 h-6 ml-auto transition-transform duration-1000 ${
                      openIndex === index ? 'rotate-180' : '' }`}/>
                </div>

            
                <div 
                  className={`
                    mt-4 text-start text-black transition-all ease-in-out overflow-hidden duration-700
                    ${openIndex === index ? 'max-h-40' : 'max-h-0'} `}>
                  <span className="lg:text-[1rem] lg-m:text-[1rem] font-medium font-inter leading-6 text-[0.85rem]">
                    {faq.answer}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;