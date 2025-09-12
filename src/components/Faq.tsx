
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
    <section className="h-100 bg-white text-customBlue">
      <div className="lg:w-[62.125rem] md:w-[52.125rem] mx-auto bg-white py-6 w-[15.62rem]">
        <h2 className="text-center mx-auto text-[1.5rem] lg:w-[40.625rem] md:w-[30.425rem] w-[15.75rem] lg:text-[3.75rem] md:text-[3rem] font-semibold mb-12 mt-10 ">
          Frequently asked questions
        </h2>
        <div className=" mx-auto text-center lg:text-[1.32rem] md:text-[1.32rem] md:w-[44.255rem] lg:w-[62.13rem] w-[15.60rem]">
          <ul className="lg:space-y-4 md:space-y-4 space-y-1">
            {faqData.map((faq, index) => (
              <li key={index} className="py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <span
                    className={`uppercase text-start lg:text-[1.3rem] md:text-[1rem] text-[0.7rem] font-bold ${
                      openIndex === index ? 'text-black' : 'text-customGray'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <img
                    src={openIndex === index ? minusIcon : plusIcon}
                    alt={openIndex === index ? 'minus icon' : 'plus icon'}
                    className={`w-6 h-6 ml-auto transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <div className="mt-4 text-start text-black">
                    <span className="lg:text-[1.1rem] md:text-[1rem] text-[0.7rem]">
                      {faq.answer}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;