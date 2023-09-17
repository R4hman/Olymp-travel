import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTourApi } from "../../services/apiTours";
import toast from "react-hot-toast";

export function useCreateTour() {
  const queryClient = useQueryClient();
  const { isLoading: isTourCreating, mutate: createTour } = useMutation({
    mutationFn: createTourApi,
    onSuccess: () => {
      toast.success("Yenit  tur yaradıldı");
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isTourCreating, createTour };
}
