import { useEffect, useState } from "react";
import { API_CALL } from "../constants/constants";

const useGetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(API_CALL);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  }
  return data;
};

export default useGetData;
