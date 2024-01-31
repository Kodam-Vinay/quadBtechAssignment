import { useContext, useState } from "react";
import DetailsContext from "../context/DetailsContext";

const Form = () => {
  const { completeDetails } = useContext(DetailsContext);
  const { name, image, language } = completeDetails;
  const [personName, setPersonName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isTicketBooked, setIsTicketBooked] = useState(false);
  const details = {
    name: personName,
    mobile: mobileNumber,
    movieName: name,
    language: language,
  };
  const onClickBookTicket = () => {
    personName &&
      mobileNumber &&
      sessionStorage.setItem("userDetails", JSON.stringify(details));
    const data = JSON.parse(sessionStorage.getItem("userDetails"));
    if (data) {
      setIsTicketBooked(true);
    }
  };
  return (
    <div className="p-2 d-flex flex-column">
      <h1 className="fw-bold text-white text-center mb-5">Ticket Booking</h1>
      {!isTicketBooked ? (
        <form
          className="border form-width rounded p-2 align-self-center text-white d-flex flex-column"
          onSubmit={(e) => e.preventDefault()}
        >
          <img
            src={
              image?.original
                ? image?.original
                : "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
            }
            alt={name}
            className="align-self-center mt-auto image-size-in-form"
          />
          <h4 className="mt-3">Movie: {name}</h4>
          <p>Language: {language}</p>
          <div className="d-flex align-items-center my-2">
            <label className="mb-1 w-25">Name:</label>
            <input
              onChange={(e) => setPersonName(e.target.value)}
              type="text"
              className="input-group bg-dark w-75 text-white"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="d-flex align-items-center my-2">
            <label className="mb-1 w-25">Mobile:</label>
            <input
              onChange={(e) => setMobileNumber(e.target.value)}
              type="text"
              className="input-group bg-dark w-75  text-white"
              placeholder="Enter Your Name"
            />
          </div>
          <button
            className="btn btn-outline-dark text-white mx-0 align-self-center book-button"
            onClick={onClickBookTicket}
          >
            Book Ticket
          </button>
        </form>
      ) : (
        <div className="text-white fw-bold align-self-center">
          Ticket Booked Successfully ✅
        </div>
      )}
    </div>
  );
};

export default Form;
