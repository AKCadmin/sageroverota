import PageTitle from "@/components/shared/PageTitle"

const PropertiesList = ({ properties = [] }) => {
  return (
    <>
      <PageTitle title="Properties" image="/assets/images/destination/banner.jpeg" />
      <section className="destination-section destination-page">
        <div className="container py-4">
          <div className="row">
            {/* Filter Sidebar */}
            <div className="col-lg-3 mb-4">
              <form>
                <div className="p-3 mb-3 bg-light border rounded" style={{ backgroundColor: '#ddd' }}>
                  <h6 className="fw-bold mb-3">Filter by Price</h6>
                  <select name="filter-price" className="form-select">
                    <option value="0">Price: Low to High</option>
                    <option value="1">Price: High to Low</option>
                  </select>
                </div>

                <div className="p-3 mb-3 bg-light border rounded" style={{ backgroundColor: '#ddd' }}>
                  <h6 className="fw-bold mb-3">Filter by Property Type</h6>
                  <select name="filter_property_type" className="form-select">
                    <option value="0">Select Property Type</option>
                    <option value="Urban Homestays">Urban Homestays</option>
                    <option value="Rural or Village Homestays">Rural or Village Homestays</option>
                    <option value="Luxury Homestays">Luxury Homestays</option>
                    <option value="Heritage Homestays">Heritage Homestays</option>
                    <option value="Family-Friendly Homestays">Family-Friendly Homestays</option>
                    <option value="Eco-Friendly Homestays">Eco-Friendly Homestays</option>
                    <option value="Remote and Offbeat Homestays">Remote and Offbeat Homestays</option>
                    <option value="Pet-Friendly Homestays">Pet-Friendly Homestays</option>
                    <option value="Wellness Homestays">Wellness Homestays</option>
                    <option value="Backpacker Homestay">Backpacker Homestay</option>
                    <option value="Caravan Homestays">Caravan Homestays</option>
                    <option value="Volunteer-Based Homestays">Volunteer-Based Homestays</option>
                  </select>
                </div>

                <div className="p-3 mb-3 bg-light border rounded" style={{ backgroundColor: '#ddd' }}>
                  <h6 className="fw-bold mb-3">Filter by Location</h6>
                  <select name="filter_location" className="form-select">
                    <option value="0">Select Location</option>
                    <option value="USA">USA</option>
                    <option value="Kanatal">Kanatal</option>
                    <option value="Darjeeling">Darjeeling</option>
                    <option value="Sundarbans, West Bengal">Sundarbans, West Bengal</option>
                    <option value="Kolkata, West Bengal">Kolkata, West Bengal</option>
                    <option value="Kalimpong, West Bengal">Kalimpong, West Bengal</option>
                    <option value="Shantiniketan, West Bengal">Shantiniketan, West Bengal</option>
                    <option value="Digha, West Bengal">Digha, West Bengal</option>
                    <option value="Dooars, West Bengal">Dooars, West Bengal</option>
                    <option value="Jaipur, Rajasthan">Jaipur, Rajasthan</option>
                    <option value="Kerala Backwaters, Kerala">Kerala Backwaters, Kerala</option>
                    <option value="Goa Beaches, Goa">Goa Beaches, Goa</option>
                    <option value="Manali, Himachal Pradesh">Manali, Himachal Pradesh</option>
                    <option value="Leh-Ladakh, Jammu & Kashmir">Leh-Ladakh, Jammu & Kashmir</option>
                    <option value="Hampi, Karnataka">Hampi, Karnataka</option>
                    <option value="Rann of Kutch, Gujarat">Rann of Kutch, Gujarat</option>
                    <option value="Bhanderhati">Bhanderhati</option>
                  </select>
                </div>

                <div className="p-3 mb-3 bg-light border rounded" style={{ backgroundColor: '#ddd' }}>
                  <h6 className="fw-bold mb-3">Room Amenities</h6>
                  {['Telephone', 'Refridgerator', 'Fan', 'Wifi'].map((amenity, index) => (
                    <div className="form-check" key={index}>
                      <input className="form-check-input" type="checkbox" name="filter_animity[]" value={amenity} id={`amenity-${index}`} />
                      <label className="form-check-label" htmlFor={`amenity-${index}`}>{amenity}</label>
                    </div>
                  ))}
                </div>

                <div className="p-3 mb-3 bg-light border rounded" style={{ backgroundColor: '#ddd' }}>
                  <h6 className="fw-bold mb-3">Property Facilities</h6>
                  {['Play area', 'Fitness center', 'Elevator', 'Laundry services'].map((facility, index) => (
                    <div className="form-check" key={index}>
                      <input className="form-check-input" type="checkbox" name="filter_facility[]" value={facility} id={`facility-${index}`} />
                      <label className="form-check-label" htmlFor={`facility-${index}`}>{facility}</label>
                    </div>
                  ))}
                </div>

                <div className="p-3 mb-3 bg-light border rounded" style={{ backgroundColor: '#ddd' }}>
                  <h6 className="fw-bold mb-3">Cancellation Policy</h6>
                  <select name="filter_policy" className="form-select">
                    <option value="0">Select Cancellation Policy</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="col-lg-9">
              <div className="row g-4">
                {properties.length > 0
                  ? (
                    properties.map((property, index) => (
                      <div className="col-12">
                        <div className="card shadow">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <a href="#">
                                <img
                                  src={property?.primary_property_image || "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg"}
                                  alt="Property"
                                  className="img-fluid rounded-start"
                                />
                              </a>
                            </div>
                            <div className="col-md-5">
                              <div className="card-body">
                                <a href="#" className="text-decoration-none">
                                  <h5 className="card-title">{property?.property_name} <span className="text-warning">★★★★★</span></h5>
                                </a>
                                <p className="mb-1">{property?.property_address}</p>
                                <p className="mb-1">
                                  {property?.property_city}
                                  {property?.property_state ? ", " + property?.property_state : ""}
                                  {property?.property_country ? ", " + property?.property_country : ""}
                                </p>
                                {property?.offers?.length > 0 && (
                                  <>
                                    <p className="text-success mb-1">Offers: avail our offers</p>
                                    <ul className="mb-1">
                                      {property.offers.map((offer) => (
                                        <li key={offer?.offer_id}>{offer?.offer_name} - {offer?.offer_value}</li>
                                      ))}
                                    </ul>
                                  </>
                                )}

                                {property?.cancellation_policy?.length > 0 && (
                                  <>
                                    <p className="text-success mb-1">Cancellation Policy:</p>
                                    <ul>
                                      {property.cancellation_policy.map((policy) => (
                                        <li key={policy?.cancellation_policy_id}>{policy?.cancellation_policy_name}</li>
                                      ))}
                                    </ul>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="col-md-3 text-center d-flex flex-column justify-content-center align-items-center p-3">
                              <h4 className="text-primary">₹0</h4>
                              <p className="mb-1">({property?.reviews[0]?.total_reviews} Reviews)</p>
                              {/* <p className="text-muted small mb-2">+ ₹0 taxes & fees<br />Per Night</p> */}
                              <a href="#" className="btn btn-primary btn-sm">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <div className="card shadow">
                        <div className="card-body">
                          <p>No properties found.</p>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PropertiesList