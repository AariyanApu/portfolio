import { toast } from "react-toastify";

export const deletePost = async (slug: string, mutate: any) => {
  try {
    const response = await fetch(`/api/${slug}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast.success("Item Deleted Susscessfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      mutate();
    } else {
      const errorResult = await response.json();
      console.error("Error deleting post:", errorResult);
      // setDeleteMessage('Error deleting post')
    }
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
