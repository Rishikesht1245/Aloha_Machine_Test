import { whiteLogo } from "../../assets/images";
const Footer = () => {
  return (
    <footer className="w-full h-[80px] bg-secondary py-auto">
      <div className="section-container h-full 2xl:px-0 px-[18px]">
        <img src={whiteLogo} alt="Logo" className="brand-logo" />
      </div>
    </footer>
  );
};
export default Footer;
