const newsApiKey = "dd468e24f9e047a4b73f010ac674cfca";
import { useEffect } from "react";

function Header() {
  const getNews = async () => {};
  useEffect(() => {});

  return (
    <div className="Header">
      <div className="Container">
        <div className="MakeHomepage">Make MyNews your homepage</div>
        <div className="Discover">
          Every day discover what’s trending on the internet!
        </div>
        <div className="RightSection">
          <button className="GetButton">GET</button>
          <div className="NoThanks">No, thanks</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
