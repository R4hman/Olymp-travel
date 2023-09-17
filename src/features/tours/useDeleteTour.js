import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTourApi } from "../../services/apiTours";
import toast from "react-hot-toast";

const useDeleteTour = () => {
  const queryClient = useQueryClient();

  const { isLoading: tourDeleteLoading, mutate: deleteTour } = useMutation({
    mutationFn: deleteTourApi,
    onSuccess: () => {
      toast.success("Tur silindi");

      //   queryClient.invalidateQueries(["hotels"]);
      queryClient.invalidateQueries({
        queryKey: ["tours"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    tourDeleteLoading,
    deleteTour,
  };
};

export default useDeleteTour;
