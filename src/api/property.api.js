import ENDPOINTS from "@/constants/endPoints";
import { post } from "@/services/apiClient";

// fetch properties list by destination id and check in date and check out date
export const getPropertiesByDestination = (formData) => {
  console.log("getPropertiesByDestination called with:", formData);
  return post(ENDPOINTS.PROPERTY.SEARCH_BY_DESTINATION, formData);
};
