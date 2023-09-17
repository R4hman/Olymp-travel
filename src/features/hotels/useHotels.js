import { useQuery } from "@tanstack/react-query";
import { fetchHotelsApi } from "../../services/apiHotels";

const useHotels = () => {
  const {
    isLoading: isHotelsLoading,
    data: hotels,
    error: errorHotels,
  } = useQuery(["hotels"], fetchHotelsApi);

  return {
    isHotelsLoading,
    hotels,
    errorHotels,
  };
};

export default useHotels;
