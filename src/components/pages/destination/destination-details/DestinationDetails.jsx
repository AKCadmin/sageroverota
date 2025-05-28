"use client";

import DestinationCard from "@/components/shared/cards/DestinationCard";
import PageTitle from "@/components/shared/PageTitle";
import Spinner from "@/components/shared/Spinner";
import { useFetchDestinations, useGetDestinationDetails } from "@/hooks/useDestination";
import DOMPurify from 'dompurify';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const DestinationDetails = ({ id }) => {
  const [destination, setDestination] = useState([]);
  const [allDestinations, setAllDestinations] = useState([]);
  // Fetch destination data using custom hook
  const { data, isLoading, isError } = useGetDestinationDetails(id);
  const { data: otherDestinations } = useFetchDestinations();
  const router = useRouter();

  const parseVisitStartTime = (visitTimeStr) => {
    const [start, period] = visitTimeStr.split("-"); // "04:00", "09:00 AM"
    const ampm = visitTimeStr.trim().slice(-2); // AM or PM
    let [hour, minute] = start.split(":").map(Number);

    // Convert to 24-hour time for correct sorting
    if (ampm === "PM" && hour !== 12) hour += 12;
    if (ampm === "AM" && hour === 12) hour = 0;

    return hour * 60 + minute; // Convert to minutes for easy comparison
  };

  // Redirect if id is invalid — but do it inside useEffect
  useEffect(() => {
    // checking id is sent or not
    if (!id || id === undefined || id === '' || id === null) {
      // redirecting to destination page
      router.push('/destination');
    }
  }, [id, router]);

  // Update destinations state when the query data changes
  useEffect(() => {
    if (data) {
      setDestination(data);
    }
  }, [data]);

  // filtering destionation list - removing this selected destination
  useEffect(() => {
    if (otherDestinations) {
      // setAllDestinations(otherDestinations.filter((dest) => Number(dest.id) !== Number(id)));
    }
  }, [otherDestinations, id])


  if (isLoading) return <Spinner />;
  if (isError) return <div>Error loading destinations details</div>

  return (

    <>
      {destination && (
        <>
          <PageTitle title={destination?.destination_name} image={`${destination?.primary_image}`} />
          <div className="single-tour-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single-tour-inner">
                    <h2>{destination?.destination_name?.toUpperCase()}</h2>
                    {destination?.primary_image ? (
                      <figure className="feature-image">
                        <Image
                          src={destination.primary_image}
                          alt="image"
                          width={1366}
                          height={766}
                        />
                      </figure>
                    ) : null}

                    <div className="tab-container">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">OVERVIEW</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="accomodation-tab" data-toggle="tab" href="#accomodation" role="tab" aria-controls="accomodation" aria-selected="false">ACCOMODATION</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="places-tab" data-toggle="tab" href="#places" role="tab" aria-controls="places" aria-selected="false">PLACES TO VISIT</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="restaurants-tab" data-toggle="tab" href="#restaurants" role="tab" aria-controls="restaurants" aria-selected="false">RESTAURANT</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="adventures-tab" data-toggle="tab" href="#adventures" role="tab" aria-controls="adventures" aria-selected="false">ADVENTURES</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="how_to_reach-tab" data-toggle="tab" href="#how_to_reach" role="tab" aria-controls="how_to_reach" aria-selected="false">HOW TO REACH</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                          <div className="overview-content">
                            <p>
                              {destination?.overview && destination?.overview !== "undefined"
                                ? destination.overview
                                : "No data found"}
                            </p>
                          </div>
                        </div>
                        <div className="tab-pane" id="accomodation" role="tabpanel" aria-labelledby="accomodation-tab">
                          <div
                            className="itinerary-content"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                destination?.accommodation_type !== "undefined"
                                  ? destination?.accommodation_type
                                  : "No data found"
                              )
                            }}
                          />
                        </div>
                        <div className="tab-pane" id="places" role="tabpanel" aria-labelledby="places-tab">
                          <div className="main-timeline-2">
                            {destination?.places && destination?.places?.length > 0 ? (
                              [...destination.places]
                                .sort((a, b) => {
                                  const timeA = parseVisitStartTime(a.visit_time);
                                  const timeB = parseVisitStartTime(b.visit_time);
                                  return timeA - timeB;
                                })
                                .map((item, index) => (
                                  <div className={`timeline-2 ${index % 2 === 0 ? 'left-2' : 'right-2'}`} key={item?.id}>
                                    <div className="card">
                                      <div className="card-body p-4">
                                        <h4 className="fw-bold mb-4">{item?.name}</h4>
                                        {item?.visit_time && (
                                          <p className="text-muted mb-4">
                                            <i className="far fa-clock" aria-hidden="true"></i> {item?.visit_time}
                                          </p>
                                        )}
                                        {item?.description && <p className="mb-0">{item?.description}</p>}
                                        {item?.ticket_cost && (
                                          <p className="mt-4">
                                            <strong className="mr-2">Ticket:</strong>&#8377; {parseFloat(item?.ticket_cost).toFixed(2)} per person
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))
                            ) : (
                              <p>No data found</p>
                            )}
                          </div>
                        </div>

                        <div className="tab-pane" id="restaurants" role="tabpanel" aria-labelledby="restaurants-tab">
                          <div className="itinerary-timeline-wrap">
                            <div className="row">
                              {destination?.restaurants && destination?.restaurants?.length > 0
                                ? destination?.restaurants?.map((item, index) => (
                                  <div className="col-sm-6 mb-3 mb-sm-0" key={item?.id}>
                                    <div className="card text-bg-light">
                                      <div className="card-body">
                                        <h4 className="card-title text-center">{item?.name}</h4>
                                        <p className="card-text">{item?.description?.replace(/\n/g, ', ').replace(/\s*,\s*/g, ', ').trim()}</p>
                                        {item?.approximate_price && <p><strong className="mr-2">Approximate Price:</strong>&#8377; {parseFloat(item?.approximate_price).toFixed(2)} /per person</p>}
                                      </div>
                                    </div>
                                  </div>
                                )) : 'No data found'}
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="adventures" role="tabpanel" aria-labelledby="adventures-tab">
                          <div className="itinerary-timeline-wrap">
                            <ul>
                              {destination?.adventures && destination?.adventures?.length > 0
                                ? destination?.adventures?.map((item, index) => (
                                  <li key={item?.id}>
                                    <div className="timeline-content">
                                      <div className="day-count"><span>{index + 1}</span></div>
                                      <h4>{item?.name}</h4>
                                      <p>{item?.description}</p>
                                      {item?.approximate_price && <p><strong className="mr-2">Ticket:</strong>&#8377; {parseFloat(item?.approximate_price).toFixed(2)} /per person</p>}
                                    </div>
                                  </li>
                                )) : 'No data found'}
                            </ul>
                          </div>
                        </div>
                        <div className="tab-pane" id="how_to_reach" role="tabpanel" aria-labelledby="how_to_reach-tab">
                          <div
                            className="overview-content"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                destination?.how_to_reach !== "undefined"
                                  ? destination?.how_to_reach
                                  : "No data found"
                              )
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="single-tour-gallery">
                      <h3 className="">Other Popular Destinations</h3>
                      <div className="package-inner">
                        <div className="row">
                          {allDestinations?.map((item) => (
                            <DestinationCard key={item.id} destination={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default DestinationDetails