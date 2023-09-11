import { useQuery } from "@tanstack/react-query";
import { fetchHotelsApi } from "../../services/apiHotels";

const useHotels = () => {
  const { isLoading: isHotelsLoading, data: hotels } = useQuery(
    ["hotels"],
    fetchHotelsApi
  );

  return {
    isHotelsLoading,
    hotels,
  };
};

export default useHotels;
