import ENDPOINTS from "@/constants/endPoints";
import { get } from "@/services/apiClient";

// get all tour packages list
export const getAllPackages = () => get(ENDPOINTS.TOUR_PACKAGE.GET_PACKAGES);