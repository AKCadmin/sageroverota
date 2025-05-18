'use client';

import { getDestinationById, getDestinations } from "@/api/destination.api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

/**
 * Custom hook to fetch destination data using React Query.
 * Automatically handles loading, success, and error states.
 */
export const useFetchDestinations = () => {
  return useQuery({
    queryKey: ["destination"],
    queryFn: getDestinations,
    onSuccess: (data) => {
      console.log("Fetched destinations successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching destinations:", error);
      toast.error(error.message); // Show error in toast
    },
  });
};

/**
 * fetch destination details  by id
 * @param {*} id 
 * @returns 
 */
export const useGetDestinationDetails = (id) => {
  return useQuery({
    queryKey: ["destination", id],
    queryFn: () => getDestinationById(id),
    // enabled: Boolean(id),
    onSuccess: (data) => {
      console.log("Fetched destination details successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching destination details:", error);
      toast.error(error.message);
    },
    onSettled: (data, error) => {
      console.log('Query settled. Data:', data, 'Error:', error);
    },
  });
};

