
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

  const [openIndex, setOpenIndex] = useState<number | null>(0);


  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-100 bg-white text-customBlue">
      <div className="lg:w-[62.125rem] md:w-[994px] mx-auto bg-white py-6 w-[330px]">
        <h2 className="text-center mx-auto text-[33px] lg:w-[650px] md:w-[584px] w-[316px] lg:text-7xl md:text-7x1 font-semibold mt-20 md:m-20 lg:m-20">
          Frequently asked questions
        </h2>
        <div className="m-10 text-center lg:text-[20px] md:text-[20px] md:w-[994px] lg:w-[994px] w-[310px]">
          <ul className="lg:space-y-6 md:space-y-6 space-y-4">
            {faqData.map((faq: FaqItem, index: number) => (
              <li key={index} className=" py-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <span className={`text-start font-bold transition-colors duration-300 ${openIndex === index ? 'text-black' : 'text-customGray'}`}>
                    {faq.question}
                  </span>
                  <a onClick={() => toggleAnswer(index)}>
                    <img
                      src={openIndex === index ? minusIcon : plusIcon}
                      alt={openIndex === index ? "minus icon" : "plus icon"}
                      className="w-6 h-6 ml-auto transition-transform duration-300"
                    />
                  </a>
                </div>
           
                {openIndex === index && (
                  <div className="mt-4 text-start text-black">
                    <span className="lg:text-[18px] md:text-[18px] text-[13px]">{faq.answer}</span>
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
