import { useEffect } from "react";
import { useSignal } from "@preact/signals-react";

function NewsCard(props: {
  category: string;
  newsTitle: string;
  newsAuthor: string;
  imgUrl: string;
  order: number;
  url: string;
}) {
  const fill = useSignal("none");

  const toggleFavourite = () => {
    let favourites = localStorage.favourites
      ? JSON.parse(localStorage.favourites)
      : [];
    let index = favourites.indexOf(props.url);
    if (index !== -1) {
      favourites.splice(index, 1);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } else {
      favourites.push(props.url);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
    isFavourite();
  };

  const isFavourite = () => {
    let favourites = localStorage.favourites
      ? JSON.parse(localStorage.favourites)
      : [];
    let index = favourites.indexOf(props.url);
    if (index !== -1) {
      fill.value = "yellow";
    } else {
      fill.value = "none";
    }
  };

  useEffect(() => {
    isFavourite();
  }, [isFavourite, fill.value]);

  return (
    <div className="NewsCard" style={{ order: props.order }}>
      <img className="NewsImage" src={props.imgUrl}></img>
      <div className="NewsInfo">
        <div className="Category">{props.category}</div>
        <a href={props.url} style={{ textDecoration: "none" }}>
          <div className="NewsTitle">{props.newsTitle}</div>
        </a>
        <div className="LastRow">
          <div className="NewsAuthor">{props.newsAuthor}</div>
          <div className="Favourite" onClick={() => toggleFavourite()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <defs></defs>
              <g
                stroke="none"
                strokeWidth="0"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                fill="none"
                fillRule="nonzero"
                opacity="1"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 69.671 88.046 c -0.808 0 -1.62 -0.195 -2.37 -0.59 L 45 75.732 L 22.7 87.456 c -1.727 0.907 -3.779 0.757 -5.356 -0.388 c -1.577 -1.146 -2.352 -3.052 -2.023 -4.972 l 4.259 -24.832 L 1.539 39.678 c -1.396 -1.361 -1.889 -3.358 -1.287 -5.213 c 0.603 -1.854 2.176 -3.181 4.105 -3.461 l 24.932 -3.622 L 40.44 4.79 C 41.303 3.041 43.05 1.955 45 1.955 c 0 0 0 0 0.001 0 c 1.949 0 3.696 1.086 4.559 2.834 l 11.15 22.592 l 24.932 3.623 c 1.93 0.28 3.503 1.606 4.105 3.461 c 0.603 1.854 0.109 3.851 -1.287 5.213 L 70.419 57.264 l 4.26 24.832 c 0.329 1.921 -0.446 3.827 -2.023 4.972 C 71.764 87.717 70.721 88.046 69.671 88.046 z " //M 7.055 36.676 l 17.058 16.628 c 1.198 1.167 1.746 2.85 1.462 4.502 l -4.027 23.479 l 21.086 -11.086 c 1.481 -0.779 3.25 -0.779 4.732 0 l 21.085 11.086 l -4.027 -23.48 c -0.283 -1.649 0.264 -3.333 1.463 -4.501 l 17.058 -16.628 L 59.372 33.25 c -1.658 -0.242 -3.089 -1.282 -3.829 -2.783 L 45 9.106 L 34.457 30.468 c -0.74 1.5 -2.171 2.54 -3.827 2.782 L 7.055 36.676 z M 84.779 36.942 h 0.011 H 84.779 z M 44.18 7.444 c 0 0 0 0.001 0.001 0.002 L 44.18 7.444 C 44.18 7.445 44.18 7.445 44.18 7.444 z
                  stroke="rgb(0,0,0)"
                  strokeWidth="1"
                  strokeDasharray="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  fill={fill.value}
                  fillRule="nonzero"
                  opacity="1"
                  transform=" matrix(1 0 0 1 0 0) "
                  //stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsCard;

/*
 */
