import { NavLink } from "react-router-dom";
import { headerLinks } from "../../data/headerLinks";

const HeaderLinks = () => {
  const displayLinks =
    headerLinks &&
    headerLinks.map((item: { name: string; link: string }) => (
      <NavLink
        className={`text-[16px] leading-[20px] text-secondary font-[400]`}
        key={item.name}
        style={({ isActive }) => ({
          color: isActive ? "#008080" : "",
        })}
        to={item.link}
      >
        {item.name}
      </NavLink>
    ));
  return <>{displayLinks}</>;
};

export default HeaderLinks;
