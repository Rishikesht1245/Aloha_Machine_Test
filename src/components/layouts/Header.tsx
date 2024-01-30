import { brandLogo } from "../../assets/images";
import Button from "../UI/Button";
import HeaderLinks from "./HeaderLinks";
const Header = () => {
  return (
    <header className="p-[24px] flex items-center justify-between absolute top-[24px] left-[50%] -translate-x-[50%] h-[80px] section-container rounded-[12px] bg-white">
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
    </header>
  );
};
export default Header;
