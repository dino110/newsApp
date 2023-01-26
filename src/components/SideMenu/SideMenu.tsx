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
    searchName: "home",
    icon: home,
  },
  {
    displayName: "General",
    searchName: "general",
    icon: general,
  },
  {
    displayName: "Business",
    searchName: "business",
    icon: business,
  },
  {
    displayName: "Health",
    searchName: "health",
    icon: health,
  },
  {
    displayName: "Science",
    searchName: "science",
    icon: science,
  },
  {
    displayName: "Sports",
    searchName: "sports",
    icon: sports,
  },
  {
    displayName: "Technology",
    searchName: "technology",
    icon: technology,
  },
];

function SideMenu({ categorySignal }: { categorySignal: { value: string } }) {
  return (
    <div className="SideMenu">
      {categories.map((category, index) => (
        <div
          className={`CategoryBox ${
            category.searchName == categorySignal.value ? "active" : ""
          }`}
          key={index}
          onClick={() => {
            console.log(category.searchName);
            categorySignal.value = category.searchName;
          }}
        >
          <img
            src={category.icon}
            className={`Icon ${
              category.searchName == categorySignal.value ? "active" : ""
            }`}
          />
          <div
            className={`CategoryName ${
              category.searchName == categorySignal.value ? "active" : ""
            }`}
          >
            {category.displayName}
          </div>
        </div>
      ))}
    </div>
  );
}

/*
function SideMenu(props: { categorySignal: any }) {
  const [active, setActive] = useState(0);

  return (
    <div className="SideMenu">
      {categories.map((category, index) => (
        <div
          className={`CategoryBox ${active == index ? "active" : ""}`}
          key={index}
          onClick={() => {
            setActive(index);
            props.categorySignal.value = category.searchName;
          }}
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
*/
export default SideMenu;
