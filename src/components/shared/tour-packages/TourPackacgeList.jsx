"use client";

import PackageCard from "@/components/shared/cards/PackageCard";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { useFetchTourPackages } from "@/hooks/useTouPackages";
import { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import Spinner from "../Spinner";

const ITEMS_PER_LOAD = 6;

const TourPackacgeList = () => {
  const [tours, setTours] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  // fetching packages
  const { data, isLoading } = useFetchTourPackages();

  // updating state
  useEffect(() => {
    if (data) {
      setTours(data?.data || []);
    }
  }, [data]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_LOAD);
  };

  const visibleTours = tours.slice(0, visibleCount);

  const shouldShowButton = tours.length > visibleCount;

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageTitle title={"Tour Packages"} image="/assets/images/destination/banner.jpeg" />
      <section className="package-section">
        <div className="container">
          <div className="package-inner">
            <div className="row">
              {visibleTours.map(item => (
                <PackageCard key={item.id} tour={item} />
              ))}
            </div>
            {shouldShowButton && (
              <div className="btn-wrap text-center">
                <PrimaryButton title="LOAD MORE PACKAGES" onClick={handleLoadMore} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackacgeList;
