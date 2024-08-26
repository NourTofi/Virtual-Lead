import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
const Navbar = () => {

  const SignInButton = () => (
    <a
      href="#"
      className="py-2 px-3 border rounded-md"
    >
      Sign In
    </a>
  );

  const CreateAccount=()=>(
    <a
      href="#"
      className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
    >
      Create an account
    </a>
  );

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <dir className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src={logo}
              alt=""
            />
            <span className="text-xl tracking-tight">Virtual Lead</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <SignInButton />
            <CreateAccount />
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="flex ring-0 z-20 bg-neutral-900 w-full p-12 fixed flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py4"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <SignInButton />
              <CreateAccount />
            </div>
          </div>
        )}
      </dir>
    </nav>
  );
};

export default Navbar;
