import { useNavigate } from "react-router-dom";
import "../css/EachShow.css";
import StarSvg from "../svgs/StarSvg";
import { useContext } from "react";
import DetailsContext from "../context/DetailsContext";

const EachShow = ({ showDetails }) => {
  const { name, image, language, officialSite, genres, rating } =
    showDetails?.show;

  const { setCompleteDetails } = useContext(DetailsContext);
  const navigate = useNavigate();

  const onClickShowSummary = () => {
    setCompleteDetails(showDetails?.show);
    navigate("/summary");
  };

  return (
    <div className="rounded p-2 shadow-lg bg-black col-12 col-sm-5 col-md-3 d-flex flex-column my-2 mw-25 each-show-container">
      {officialSite && (
        <a
          href={officialSite}
          className="text-white my-1 link-underline link-underline-opacity-0 opacity-75 position-absolute"
          target="_blank"
        >
          🔗
        </a>
      )}
      <img
        src={
          image?.original
            ? image?.original
            : "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
        }
        alt={name}
        className="h-50 w-50 mb-0 align-self-center mt-auto"
      />
      <div className="d-flex align-items-center justify-content-between mt-auto">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center mb-0">
            <StarSvg />
            <p className="text-white mt-3 mx-2">
              {rating?.average ? rating?.average : 5.5}
            </p>
          </div>
          <p className="text-white mt-0 opacity-75">
            {genres.slice(0, 2).toString(",")}
          </p>
        </div>
        <p className="text-bg-info text-white opacity-75 language-p-tag p-1 rounded">
          {language}
        </p>
      </div>
      <h3 className="each-show-name text-white fw-bold mt-auto">{name}</h3>

      <button
        className="btn btn-outline-dark text-white mx-0 mt-auto"
        onClick={onClickShowSummary}
      >
        Show Summary
      </button>
    </div>
  );
};

export default EachShow;
