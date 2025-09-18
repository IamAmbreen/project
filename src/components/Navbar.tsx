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
    <nav className="w-full bg-customBlue text-customGray border-b-2 border-customGray lg:px-22 lg-m:px-20 md:px-10 px-4  py-4 lg:h-[7.125rem] lg-m:h-[7.125rem] md:h-[5.125rem]  items-center">
      <div className="flex justify-between text-xl lg:text-xl lg:ml-10   ">
        <div className="flex item-center">
          <button
            id="hamburger-button"
            className=" lg:hidden lg-m:hidden mr-[0.844rem]"
            onClick={() => setIsOpen(!isOpen)}>
            <img src="src/assets/icons/hamburger.png" alt="menu" />
          </button>
          <img
            src="src/assets/images/Logo.png"
            alt="logo"
            className="item-center h-[3.125rem] w-auto  lg:h-[5.625rem] lg:w-[13.375rem]  lg-m:h-[5.625rem] lg-m:w-[13.375rem] "/>
        <ul className="hidden lg:flex lg-m:flex flex-row items-center gap-[2rem] font-normal text-[1rem] font-inter ml-[2rem]">
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
          <a href="#" className=" lg:hidden lg-m:hidden text-white md:text-[1rem] text-[0.69rem] mr-[0.625rem]">
            Login
          </a>
           <button
          type="button"
          className="flex items-center text-customBlue bg-customYellow lg:text-[1.75rem] lg-m:text-[1rem]  text-[0.875rem] rounded-md lg:rounded-full lg-m:rounded-full  px-8.5 lg:px-20 lg-m:px-10 lg:py-3 lg-m:py-3 lg:font-inter lg-m:font-inter lg:font-bold lg-m:font-bold font-medium py-2.5  text-center  lg:transition-colors  lg:duration-300  lg:hover:bg-yellow-600 lg-m:transition-colors  lg-m:duration-300  lg-m:hover:bg-yellow-600"
          onClick={handleBookNowClick}>
          <span className="uppercase lg:normal-case lg-m:normal-case ">Book Now</span>
        </button>
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