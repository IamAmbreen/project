import { useState } from 'react';

interface NavItem {
  name: string;
  url: string;
}

const Navbar = () => {
   const navItems: NavItem[] = [
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
  ];


  const [activeLink, setActiveLink] = useState<string>('About');

  
  const handleLinkClick = (itemName: string) => {
    setActiveLink(itemName);
    
    console.log(`Navigating to: ${itemName}`);
  };

  
  const handleBookNowClick = () => {
 
    console.log();
  };
  return (
    <nav className=" bg-customBlue text-neutral-600 border-b-2 border-neutral-600 px-4 md:px-16 py-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <img src="src/assets/images/Logo.png" alt="logo" className="h-16 w-auto" />
      
  
      <ul className="hidden md:flex items-center gap-8 font-normal font-inter ml-8">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer transition-colors duration-300 ${activeLink === item.name ? 'text-white font-bold' : 'hover:text-white'}`}
            onClick={() => handleLinkClick(item.name)}
          >
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <a href="#" className=' hidden sm:shown text-neutral-600'>Login</a>
      <button
        type="button"
        className="text-black bg-yellow-400 font-medium rounded-full text-sm px-4 py-2 text-center transition-colors duration-300 hover:bg-yellow-600"
        onClick={handleBookNowClick}
      >
        Book Now
      </button>
    </div>
    
  </div>
</nav>
    
    
  )
}

export default Navbar
