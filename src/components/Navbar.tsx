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
    <nav className="bg-customBlue text-neutral-600 border-b-2 border-neutral-600 px-4 md:px-16 lg:px-16 py-4 ">
      <div className="flex items-center justify-between lg:ml-28 text-[16px]">
        
        <div className="flex items-center">
         
          <button
            id="hamburger-button"
            className="md:hidden lg:hidden mr-4"
            onClick={() => setIsOpen(!isOpen)}>
            <img src="src/assets/icons/hamburger.png" alt="menu" />
          </button>

         
          <img
            src="src/assets/images/Logo.png"
            alt="logo"
            className="h-12 w-auto md:h-[100px] lg:h-[100px]" />

        
          <ul className="hidden md:flex items-center gap-8 font-normal font-inter ml-8">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer transition-colors duration-300 ${
                activeLink === item.name? "text-white" : "hover:text-white"}`}
                onClick={() => handleLinkClick(item.name)}
              >
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <a href="#" className="md:hidden lg:hidden text-white text-sm mr-4">
            Login
          </a>
                <button type="button" className="text-customBlue bg-customYellow items-center font-medium rounded-md md:text-xl lg:text-xl text-[16px] md:px-8 lg:px-8 py-2 px-4 md:py-4 lg:py-4 text-center transition-colors duration-300 hover:bg-yellow-600 md:rounded-full " onClick={handleBookNowClick}>Book Now</button>

        </div>
      </div>


      <div
        className={`fixed top-0 left-0 h-auto w-64 py-11  bg-customBlue text-neutral-200 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}> ✕ </button>
        <div className=" px-6">
          <ul className="flex flex-col gap-6 font-light font-inter text-neutral-600">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer transition-colors duration-300 ${ activeLink === item.name ? "text-white" : "hover:text-white"}`}
                onClick={() => handleLinkClick(item.name)} >
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)} ></div>
      )}
    </nav>
  );
};

export default Navbar;