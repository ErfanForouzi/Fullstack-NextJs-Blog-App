import { createCategoryApi } from "@/services/categoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateCategory = () => {
    const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: (data) => {
    toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey:["categories"]
      })
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isCreating, createCategory };
};
export default useCreateCategory;
