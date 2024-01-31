import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ShowPage from "./components/ShowPage";
import SummaryPage from "./components/SummaryPage";
import DetailsContext from "./context/DetailsContext";
import { useState } from "react";
import Form from "./components/Form";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ShowPage />,
  },
  {
    path: "/summary",
    element: <SummaryPage />,
  },
  {
    path: "/bookTicket",
    element: <Form />,
  },
]);

function App() {
  const [completeDetails, setCompleteDetails] = useState({});

  return (
    <div className="container-fluid main-container font-monospace">
      <DetailsContext.Provider
        value={{
          completeDetails: completeDetails,
          setCompleteDetails: setCompleteDetails,
        }}
      >
        <RouterProvider router={appRouter} />
      </DetailsContext.Provider>
    </div>
  );
}

export default App;
