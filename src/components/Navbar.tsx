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
    <nav className="w-full bg-customBlue text-customGray border-b-2 border-customGray  px-6 md:px-8 lg-m:px-9 lg:px-14 xl:px-33 py-4  md:h-[5.125rem] lg-m:h-[7.125rem] lg:h-[7.125rem] xl:h-[8.9rem] items-center">
      <div className="flex justify-between text-xl lg:text-xl xl:text-3xl   ">
        <div className="flex item-center">
          <button
            id="hamburger-button"
            className=" lg-m:hidden  lg:hidden xl:hidden mr-[0.844rem]"
            onClick={() => setIsOpen(!isOpen)}>
            <img src="src/assets/icons/hamburger.png" alt="menu" />
          </button>
          <img
            src="src/assets/images/Logo.png"
            alt="logo"
            className="item-center h-[3.125rem] w-auto lg-m:h-[5.625rem] lg-m:w-[13.375rem]  lg:h-[5.625rem] lg:w-[13.375rem] xl:h-[7.625rem] xl:w-[16.375rem]   "/>
        <ul className="hidden lg-m:flex lg:flex xl:flex  flex-row items-center gap-[2rem] font-normal text-[1rem] xl:text-[2rem] font-inter ml-[2rem]">
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
          <a href="#" className="lg-m:hidden lg:hidden xl:hidden text-white md:text-[1rem]  text-[0.69rem] mr-[0.625rem]">
            Login
          </a>
             <button type="button" className=" uppercase lg-m:normal-case lg:normal-case xl:normal-case text-customBlue bg-customYellow items-center rounded-md md:round-md    text-xl md:text-[1rem] lg-m:text-[1rem] lg:text-[1rem] xl:text-[2rem] px-6.5 py-4.5 md:px-5 md:py-2 lg-m:px-7 lg-m:py-4 lg:px-7 lg:py-3 xl:px-14 xl:py-9   font-inter lg:font-bold lg-m:font-bold md:font-bold font-medium text-center lg:transition-colors lg:duration-300  lg:rounded-full lg-m:transition-colors lg-m:duration-300  lg-m:rounded-full md:transition-colors md:duration-300 " onClick={handleBookNowClick}>Book Now</button>

        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-auto w-[16rem] py-[2.75rem] bg-customBlue text-neutral-200 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-700 ease-in-out z-50`}>
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