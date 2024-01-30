import { useMemo } from "react";
import { NavLink } from "react-router-dom";

const HeaderLinks = () => {
  const headerLinks: Links = useMemo(
    () => [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Surfing",
        link: "/surfing",
      },
      {
        name: "Hula",
        link: "/hula",
      },
      {
        name: "Vulcano",
        link: "/vulcano",
      },
    ],
    []
  );

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
type Links = { name: string; link: string }[] | [];

export default HeaderLinks;
