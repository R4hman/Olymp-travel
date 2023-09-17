import { useQuery } from "@tanstack/react-query";
import { fetchToursApi } from "../../services/apiTours";

const useTours = (url) => {
  const {
    isLoading: isToursLoading,
    data: tours,
    error: errorTours,
    refetch,
  } = useQuery(["tours", url], () => fetchToursApi(url));

  return {
    isToursLoading,
    tours,
    errorTours,
    refetch,
  };
};

export default useTours;
