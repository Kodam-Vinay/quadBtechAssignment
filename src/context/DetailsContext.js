import { createContext } from "react";
const DetailsContext = createContext({
  completeDetails: null,
  setCompleteDetails: () => {},
});

export default DetailsContext;
