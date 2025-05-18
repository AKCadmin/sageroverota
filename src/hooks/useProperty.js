import { getPropertiesByDestination } from "@/api/property.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

/**
 * Fetching properties by destination
 * @param {Object} formData - The search parameters (e.g., destination, check-in, check-out dates).
 * @returns {Object} - The response of the properties search.
 */
export const usePropertySearchByDestination = (formData) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (formData) => getPropertiesByDestination(formData),
    onSuccess: (data) => {
      console.log("Fetched properties successfully:", data);
      if (data?.data?.length > 0) {
        console.log("Properties found:", data.data);

        // Save the data in sessionStorage for the next page
        sessionStorage.setItem("propertySearchResult", JSON.stringify(data.data));
        // Redirect to results page
        router.push(`/property-list`);
      } else {
        toast.error("No properties found.");
      }
    },
    onError: (error) => {
      console.error("Error fetching properties:", error);
      toast.error(error.message); // Show error in toast
    },
  });
}