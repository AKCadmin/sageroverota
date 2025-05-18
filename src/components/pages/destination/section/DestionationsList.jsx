"use client";
import DestinationMasonry from "@/components/shared/grids/DestinationMasonry";
import Spinner from "@/components/shared/Spinner";
import { useFetchDestinations } from "@/hooks/useDestination";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DestionationsList = () => {

  const [destinations, setDestinations] = useState([]);
  // Fetch data using custom hook
  const { data, isLoading, isError } = useFetchDestinations();

  // Update destinations state when the query data changes
  useEffect(() => {
    if (data) {
      // filtering data for active destinations
      setDestinations(data);
    }
  }, [data]);

  if (isLoading) return <Spinner />;
  if (isError) {
    // Move toast inside useEffect or use a proper error boundary
    toast.error("Destinations cannot be fetched.");
    return <div>Error loading destinations</div>;
  }
  return (
    <section className="destination-section destination-page">
      <div className="container">
        <div className="destination-inner destination-three-column">
          <div className="row">
            <DestinationMasonry destinations={destinations} />;
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestionationsList