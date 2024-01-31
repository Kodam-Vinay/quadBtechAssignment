import { useContext } from "react";
import DetailsContext from "../context/DetailsContext";
import { useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const { completeDetails } = useContext(DetailsContext);
  const navigate = useNavigate();
  const onClickBookTicket = () => {
    navigate("/bookTicket");
  };
  return (
    <div className="d-flex flex-column pb-2 pt-3">
      <h1 className="show-page-heading text-white fw-bold">Summary</h1>
      <div
        className="Container mt-5 w-75 align-self-center text-white opacity-75"
        dangerouslySetInnerHTML={{ __html: completeDetails?.summary }}
      ></div>
      <button
        className="btn btn-outline-dark text-white mx-0 align-self-center book-button"
        onClick={onClickBookTicket}
      >
        Book Ticket
      </button>
    </div>
  );
};

export default SummaryPage;
