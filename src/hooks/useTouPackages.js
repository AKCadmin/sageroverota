"use client";

import { getAllPackages } from "@/api/tourPackages.ai";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

/**
 * fetch tourPackages data using React Query.
 * Automatically handles loading, success, and error states.
 * @returns 
 */
export const useFetchTourPackages = () => {
  return useQuery({
    queryKey: ["tourPackages"],
    queryFn: getAllPackages,
    onSuccess: (data) => {
      console.log("Fetched tourPackages successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching tourPackages:", error);
      toast.error(error.message); // Show error in toast
    },
  });
}