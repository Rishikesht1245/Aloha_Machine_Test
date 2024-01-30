import { whiteLogo } from "../../assets/images";
const Footer = () => {
  return (
    <footer className="w-full h-[80px] bg-secondary py-[24px]">
      <div className="section-container">
        <img src={whiteLogo} alt="Logo" className="brand-logo" />
      </div>
    </footer>
  );
};
export default Footer;
