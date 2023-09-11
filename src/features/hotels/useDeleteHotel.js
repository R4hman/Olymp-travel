import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHotelApi } from "../../services/apiHotels";
import toast from "react-hot-toast";

const useDeleteHotel = () => {
  const queryClient = useQueryClient();

  const { isLoading: hotelDeleteLoading, mutate: deleteHotel } = useMutation({
    mutationFn: deleteHotelApi,
    onSuccess: () => {
      toast.success("Hotel silindi");

      //   queryClient.invalidateQueries(["hotels"]);
      queryClient.invalidateQueries({
        queryKey: ["hotels"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    hotelDeleteLoading,
    deleteHotel,
  };
};

export default useDeleteHotel;
