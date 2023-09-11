import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHotelApi } from "../../services/apiHotels";
import toast from "react-hot-toast";

export function useCreateHotel() {
  const queryClient = useQueryClient();
  const { isLoading: isHotelCreating, mutate: createHotel } = useMutation({
    mutationFn: createHotelApi,
    onSuccess: () => {
      toast.success("Yeni hotel yaradıldı");
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isHotelCreating, createHotel };
}
