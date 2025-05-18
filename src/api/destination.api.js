import ENDPOINTS from "@/constants/endPoints";
import { get } from "@/services/apiClient";


// to fetch all destinations list
export const getDestinations = () => get(ENDPOINTS.DESTINATIONS.GET_ALL);

// fetch destination detail by id
export const getDestinationById = (id) => get(ENDPOINTS.DESTINATIONS.GET_DESTINATION_DETAILS(id));
