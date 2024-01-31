import "../css/ShowPage.css";
import useGetData from "../hooks/useGetData";
import EachShow from "./EachShow";
import { v4 as uniqueId } from "uuid";

const ShowPage = () => {
  const data = useGetData();
  return (
    <div className="d-flex flex-column pt-2 pb-4 row">
      <h1 className="show-page-heading text-white fw-bold mb-3">Shows List</h1>

      {data.length > 0 ? (
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {data?.map((each) => (
            <EachShow key={uniqueId()} showDetails={each} />
          ))}
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowPage;
