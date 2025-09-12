import { useState } from "react";

interface NavItem {
  name: string;
  url: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { name: "About", url: "/about" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
  ];

  const [activeLink, setActiveLink] = useState<string>("About");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = (itemName: string) => {
    setActiveLink(itemName);
    setIsOpen(false);
    console.log('Navigating to: ${itemName}');
  };

  const handleBookNowClick = () => {
    console.log();
  };

  return (
    <nav className="w-full bg-customBlue text-customGray border-b-2 border-customGray px-4 lg:px-22 md:px-12  py-4 lg:h-[7.125rem] md:h-[6.125rem] items-center">
      <div className="flex justify-between text-xl lg:text-xl lg:pl-20 md:text-[1rem] ">
        <div className="flex item-center">
          <button
            id="hamburger-button"
            className="md:hidden lg:hidden mr-[1rem]"
            onClick={() => setIsOpen(!isOpen)}>
            <img src="src/assets/icons/hamburger.png" alt="menu" />
          </button>
          <img
            src="src/assets/images/Logo.png"
            alt="logo"
            className="item-center h-[3rem] w-auto md:h-[4.25rem] lg:h-[5.625rem] lg:w-[13.375rem] md:w-[10.6rem]"/>
          <ul className="hidden md:flex items-center gap-[2rem] font-normal lg:text-[1rem] font-inter ml-[2rem]">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeLink === item.name ? "text-white" : "hover:text-white"
                }`}
                onClick={() => handleLinkClick(item.name)}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center ">
          <a href="#" className="md:hidden lg:hidden text-white text-sm mr-[1rem]">
            Login
          </a>
          <button
            type="button"
            className="text-customBlue bg-customYellow  font-medium rounded-md lg:text-[1rem] md:text-[1rem] text-xs md:px-[1.5rem] py-[0.5rem] px-[0.5rem] md:py-[1rem] lg:px-8 lg:py-5 text-center md:transition-colors lg:transition-colors md:duration-300 lg:duration-300 md:hover:bg-yellow-600 lg:hover:bg-yellow-6000 md:rounded-full"
            onClick={handleBookNowClick}>
            Book Now
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-auto w-[16rem] py-[2.75rem] bg-customBlue text-neutral-200 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}>
        <button
          className="absolute top-[1rem] right-[1rem] text-white"
          onClick={() => setIsOpen(false)}>
          {" "}
          ✕{" "}
        </button>
        <div className="px-[1.5rem]">
          <ul className="flex flex-col gap-[1.5rem] font-light font-inter text-customGray">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeLink === item.name ? "text-white" : "hover:text-white"
                }`}
                onClick={() => handleLinkClick(item.name)}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;