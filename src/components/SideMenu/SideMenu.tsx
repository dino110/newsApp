import { useState } from "react";

import home from "../../assets/SideMenuIcons/Home.svg?inline";
import sports from "../../assets/SideMenuIcons/Sports.svg?inline";
import business from "../../assets/SideMenuIcons/Business.svg?inline";
import general from "../../assets/SideMenuIcons/General.svg?inline";
import health from "../../assets/SideMenuIcons/Health.svg?inline";
import science from "../../assets/SideMenuIcons/Science.svg?inline";
import technology from "../../assets/SideMenuIcons/Technology.svg?inline";

type menuCategory = { displayName: string; searchName: string; icon: string };

const categories: menuCategory[] = [
  {
    displayName: "Home",
    searchName: "Home",
    icon: home,
  },
  {
    displayName: "General",
    searchName: "General",
    icon: general,
  },
  {
    displayName: "Business",
    searchName: "Business",
    icon: business,
  },
  {
    displayName: "Healt",
    searchName: "Healt",
    icon: health,
  },
  {
    displayName: "Science",
    searchName: "Science",
    icon: science,
  },
  {
    displayName: "Sports",
    searchName: "Sports",
    icon: sports,
  },
  {
    displayName: "Technology",
    searchName: "Technology",
    icon: technology,
  },
];

function SideMenu() {
  const [active, setActive] = useState(0);
  return (
    <div className="SideMenu">
      {categories.map((category, index) => (
        <div
          className={`CategoryBox ${active == index ? "active" : ""}`}
          key={index}
          onClick={() => setActive(index)}
        >
          <img
            src={category.icon}
            className={`Icon ${active == index ? "active" : ""}`}
          />
          <div className={`CategoryName ${active == index ? "active" : ""}`}>
            {category.displayName}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideMenu;
