import { useState } from "react";
import { brandLogo } from "../../assets/images";
import Button from "../UI/Button";
import HeaderLinks from "./HeaderLinks";
import { headerLinks } from "../../data/headerLinks";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <header className="p-[24px] hidden sm:flex items-center justify-between absolute top-[24px] left-[50%] -translate-x-[50%] h-[80px] section-container rounded-[12px] bg-white">
        {/* Image and nav links */}
        <div className="flex justify-between items-center w-full">
          <img src={brandLogo} alt="Logo" className="brand-logo" />
          <HeaderLinks />
        </div>

        {/* Button */}
        <div className="w-full flex justify-end">
          <Button
            type="button"
            className="bg-primary w-auto h-[40px]  text-white"
          >
            Book a trip
          </Button>
        </div>

        {/* For Mobile screens */}
      </header>

      {/* Header for mobile screens */}
      <header className="p-[24px] flex sm:hidden justify-between items-center w-full h-[80px] fixed z-[10] bg-white">
        <img src={brandLogo} alt="Logo" className="brand-logo" />
        {!menu && (
          <i
            className="fa-solid fa-bars text-[32px]"
            onClick={() => setMenu(true)}
          ></i>
        )}
      </header>

      {/* Small devices left nav bar */}
      <div
        className={`w-[100%] h-full px-[24px] min-h-content py-4 bg-white rounded-md z-40 fixed top-0 transition-all duration-700 flex flex-col justify-start gap-[40px] ${
          menu ? "translate-x-[20px]" : "translate-x-[120%]"
        }`}
      >
        <i
          className={`fa-solid fa-xmark text-[32px] cursor-pointer flex justify-end mt-3 me-3`}
          onClick={() => setMenu(false)}
        ></i>
        <ul className="flex flex-col gap-[40px] tracking-wider mt-3">
          {headerLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                className={`text-[16px] leading-[20px] text-secondary font-[400]`}
                key={link.name}
                style={({ isActive }) => ({
                  color: isActive ? "#008080" : "",
                })}
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Button
              type="button"
              className="bg-primary w-auto h-[40px]  text-white"
            >
              Book a trip
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
