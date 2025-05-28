
const PropertyDetailsTabs = () => {
  return (
    <div className="tab-details">
      <div className="tab-container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="service-tab" data-toggle="tab" href="#services" role="tab" aria-controls="services" aria-selected="false">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link room" id="room-tab" data-toggle="tab" href="#room" role="tab" aria-controls="room" aria-selected="false">Room</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="policy-tab" data-toggle="tab" href="#policy" role="tab" aria-controls="policy" aria-selected="false">Property Policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Review</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="map-tab" data-toggle="tab" href="#map" role="tab" aria-controls="map" aria-selected="false">Nearby Activities</a>
          </li>

        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <div className="overview-content">
              Craving a retreat that whispers of tranquility and boasts a panoramic symphony for the eyes? Then pack your bags, for Mountain Whispers beckons! This charming 3-bedroom chalet isn't just a place to stay, it's an experience. ADD-ON SERVICES - Breakfast is complimentary. - All other vegetarian and non-vegetarian meals (dinner) are available in-house at an additional cost of Rs.550 per person. - The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge. *Prices may vary subject to availability and peak season rates. HOME TRUTHS & HOUSE RULES - All-male groups and unmarried couples are allowed with a refundable deposit of Rs. 10,000. - Consumption of non-vegetarian food is allowed. - Please be mindful and keep noise to a minimum after 9 PM. - There are CCTV cameras that capture the common and external areas for security purposes. - The caretaker stays on the premises of the same property and will be available from 8 AM to 9 PM. - Guests are advised to stay cautious of any wild animals or bugs due to the villa location. POLICIES - The full payment must be made for your booking to be confirmed. - A refundable deposit may be collected before check-in. - This entire amount is refunded within 5 working days, provided the total number of guests does not increase and the check-out time is adhered to. - The number of guests must not exceed the count mentioned at the time of booking. - Only the guests who have been accounted for are allowed at the villa. - All guests must be able to share valid ID proofs when asked. This could be at the time of booking, and also upon arrival. - All foreign nationals must be able to share their passport and visa details prior to their stay. - Any damage to the property caused by the guest will be charged as per the actual cost of repair or replacement. </div>
          </div>
          <div className="tab-pane" id="services" role="tabpanel" aria-labelledby="service-tab">
            <div className="mb-5">
              <h4>Facilites</h4>
              <ol className="facilities">

                <li>
                  <span>
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M383.2 941.6c-4 0-6.4-0.8-9.6-2.4-14.4-9.6-82.4-60-25.6-160 15.2-27.2 19.2-48.8 13.6-66.4-6.4-20-27.2-28-27.2-28-9.6-4-14.4-15.2-10.4-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 3.2 0 36.8 14.4 50.4 50.4 10.4 28.8 4.8 62.4-16.8 100-40 70.4 2.4 101.6 11.2 107.2 8.8 4.8 12 16.8 7.2 26.4-4.8 6.4-12 8.8-17.6 8.8z m129.6-42.4c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16 47.2 48 9.6 27.2 4.8 58.4-15.2 92.8-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4.8 6.4-12 8.8-17.6 8.8z m-265.6 0c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16.8 47.2 48 9.6 27.2 4 58.4-15.2 93.6-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4 5.6-12 8-17.6 8z m487.2-71.2c-6.4 0-11.2-2.4-15.2-6.4s-6.4-9.6-6.4-15.2c0-8.8 5.6-16.8 13.6-20.8h0.8v-43.2l-40.8 23.2v0.8c0 6.4-2.4 14.4-10.4 18.4-3.2 2.4-7.2 3.2-11.2 3.2-8 0-15.2-4-18.4-10.4-3.2-5.6-4-11.2-2.4-16.8 1.6-5.6 4.8-10.4 10.4-12.8 3.2-2.4 7.2-3.2 10.4-3.2 4 0 8 0.8 11.2 3.2l36.8-20.8-36-20.8c-4.8 1.6-8.8 2.4-12 2.4-4 0-7.2-0.8-10.4-2.4-9.6-6.4-13.6-20-8-29.6 4-6.4 11.2-10.4 19.2-10.4 4 0 8 0.8 11.2 3.2 6.4 4 10.4 10.4 10.4 18.4v0.8L728 712v-43.2h-0.8c-8-4-13.6-12-13.6-20.8 0-12 9.6-21.6 21.6-21.6 6.4 0 12 2.4 16 6.4s6.4 9.6 6.4 15.2c0 7.2-4 14.4-11.2 18.4H744v41.6l35.2-20v-0.8c0-6.4 2.4-14.4 10.4-18.4 3.2-2.4 7.2-3.2 11.2-3.2 8 0 15.2 4 18.4 10.4 3.2 5.6 4 11.2 2.4 16.8-1.6 5.6-4.8 10.4-10.4 12.8-3.2 2.4-7.2 3.2-10.4 3.2-4 0-8-0.8-11.2-3.2l-36.8 20.8 36 20.8c4.8-1.6 8.8-2.4 12-2.4 4 0 7.2 0.8 10.4 2.4 9.6 6.4 13.6 20 8 29.6-4 6.4-11.2 10.4-19.2 10.4-4 0-8-0.8-11.2-3.2-6.4-4-10.4-10.4-10.4-18.4v-0.8L744 745.6v41.6h0.8c7.2 3.2 11.2 10.4 11.2 18.4 0 12.8-9.6 22.4-21.6 22.4zM152 575.2c-60.8 0-109.6-48.8-109.6-109.6V204.8c0-60.8 48.8-109.6 109.6-109.6h721.6c60.8 0 109.6 48.8 109.6 109.6v260.8c0 60.8-48.8 109.6-109.6 109.6H152z m-11.2-432c-28.8 0-52 24-52 54.4v278.4c0 29.6 23.2 54.4 52 54.4h743.2c28.8 0 52-24 52-54.4V197.6c0-29.6-23.2-54.4-52-54.4H140.8z m21.6 312c-10.4 0-19.2-8.8-19.2-19.2 0-10.4 8.8-19.2 19.2-19.2h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z m0-80.8c-10.4 0-19.2-8.8-19.2-19.2S152 336 162.4 336h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z" fill="" />
                    </svg>
                  </span>
                  Elevator
                </li>
                <li>
                  <span>
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M383.2 941.6c-4 0-6.4-0.8-9.6-2.4-14.4-9.6-82.4-60-25.6-160 15.2-27.2 19.2-48.8 13.6-66.4-6.4-20-27.2-28-27.2-28-9.6-4-14.4-15.2-10.4-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 3.2 0 36.8 14.4 50.4 50.4 10.4 28.8 4.8 62.4-16.8 100-40 70.4 2.4 101.6 11.2 107.2 8.8 4.8 12 16.8 7.2 26.4-4.8 6.4-12 8.8-17.6 8.8z m129.6-42.4c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16 47.2 48 9.6 27.2 4.8 58.4-15.2 92.8-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4.8 6.4-12 8.8-17.6 8.8z m-265.6 0c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16.8 47.2 48 9.6 27.2 4 58.4-15.2 93.6-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4 5.6-12 8-17.6 8z m487.2-71.2c-6.4 0-11.2-2.4-15.2-6.4s-6.4-9.6-6.4-15.2c0-8.8 5.6-16.8 13.6-20.8h0.8v-43.2l-40.8 23.2v0.8c0 6.4-2.4 14.4-10.4 18.4-3.2 2.4-7.2 3.2-11.2 3.2-8 0-15.2-4-18.4-10.4-3.2-5.6-4-11.2-2.4-16.8 1.6-5.6 4.8-10.4 10.4-12.8 3.2-2.4 7.2-3.2 10.4-3.2 4 0 8 0.8 11.2 3.2l36.8-20.8-36-20.8c-4.8 1.6-8.8 2.4-12 2.4-4 0-7.2-0.8-10.4-2.4-9.6-6.4-13.6-20-8-29.6 4-6.4 11.2-10.4 19.2-10.4 4 0 8 0.8 11.2 3.2 6.4 4 10.4 10.4 10.4 18.4v0.8L728 712v-43.2h-0.8c-8-4-13.6-12-13.6-20.8 0-12 9.6-21.6 21.6-21.6 6.4 0 12 2.4 16 6.4s6.4 9.6 6.4 15.2c0 7.2-4 14.4-11.2 18.4H744v41.6l35.2-20v-0.8c0-6.4 2.4-14.4 10.4-18.4 3.2-2.4 7.2-3.2 11.2-3.2 8 0 15.2 4 18.4 10.4 3.2 5.6 4 11.2 2.4 16.8-1.6 5.6-4.8 10.4-10.4 12.8-3.2 2.4-7.2 3.2-10.4 3.2-4 0-8-0.8-11.2-3.2l-36.8 20.8 36 20.8c4.8-1.6 8.8-2.4 12-2.4 4 0 7.2 0.8 10.4 2.4 9.6 6.4 13.6 20 8 29.6-4 6.4-11.2 10.4-19.2 10.4-4 0-8-0.8-11.2-3.2-6.4-4-10.4-10.4-10.4-18.4v-0.8L744 745.6v41.6h0.8c7.2 3.2 11.2 10.4 11.2 18.4 0 12.8-9.6 22.4-21.6 22.4zM152 575.2c-60.8 0-109.6-48.8-109.6-109.6V204.8c0-60.8 48.8-109.6 109.6-109.6h721.6c60.8 0 109.6 48.8 109.6 109.6v260.8c0 60.8-48.8 109.6-109.6 109.6H152z m-11.2-432c-28.8 0-52 24-52 54.4v278.4c0 29.6 23.2 54.4 52 54.4h743.2c28.8 0 52-24 52-54.4V197.6c0-29.6-23.2-54.4-52-54.4H140.8z m21.6 312c-10.4 0-19.2-8.8-19.2-19.2 0-10.4 8.8-19.2 19.2-19.2h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z m0-80.8c-10.4 0-19.2-8.8-19.2-19.2S152 336 162.4 336h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z" fill="" />
                    </svg>
                  </span>
                  Laundry services
                </li>
              </ol>
            </div>
            <div>
              <h4>Amenities</h4>
              <ol className="facilities">

                <li>
                  <span>
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M383.2 941.6c-4 0-6.4-0.8-9.6-2.4-14.4-9.6-82.4-60-25.6-160 15.2-27.2 19.2-48.8 13.6-66.4-6.4-20-27.2-28-27.2-28-9.6-4-14.4-15.2-10.4-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 3.2 0 36.8 14.4 50.4 50.4 10.4 28.8 4.8 62.4-16.8 100-40 70.4 2.4 101.6 11.2 107.2 8.8 4.8 12 16.8 7.2 26.4-4.8 6.4-12 8.8-17.6 8.8z m129.6-42.4c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16 47.2 48 9.6 27.2 4.8 58.4-15.2 92.8-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4.8 6.4-12 8.8-17.6 8.8z m-265.6 0c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16.8 47.2 48 9.6 27.2 4 58.4-15.2 93.6-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4 5.6-12 8-17.6 8z m487.2-71.2c-6.4 0-11.2-2.4-15.2-6.4s-6.4-9.6-6.4-15.2c0-8.8 5.6-16.8 13.6-20.8h0.8v-43.2l-40.8 23.2v0.8c0 6.4-2.4 14.4-10.4 18.4-3.2 2.4-7.2 3.2-11.2 3.2-8 0-15.2-4-18.4-10.4-3.2-5.6-4-11.2-2.4-16.8 1.6-5.6 4.8-10.4 10.4-12.8 3.2-2.4 7.2-3.2 10.4-3.2 4 0 8 0.8 11.2 3.2l36.8-20.8-36-20.8c-4.8 1.6-8.8 2.4-12 2.4-4 0-7.2-0.8-10.4-2.4-9.6-6.4-13.6-20-8-29.6 4-6.4 11.2-10.4 19.2-10.4 4 0 8 0.8 11.2 3.2 6.4 4 10.4 10.4 10.4 18.4v0.8L728 712v-43.2h-0.8c-8-4-13.6-12-13.6-20.8 0-12 9.6-21.6 21.6-21.6 6.4 0 12 2.4 16 6.4s6.4 9.6 6.4 15.2c0 7.2-4 14.4-11.2 18.4H744v41.6l35.2-20v-0.8c0-6.4 2.4-14.4 10.4-18.4 3.2-2.4 7.2-3.2 11.2-3.2 8 0 15.2 4 18.4 10.4 3.2 5.6 4 11.2 2.4 16.8-1.6 5.6-4.8 10.4-10.4 12.8-3.2 2.4-7.2 3.2-10.4 3.2-4 0-8-0.8-11.2-3.2l-36.8 20.8 36 20.8c4.8-1.6 8.8-2.4 12-2.4 4 0 7.2 0.8 10.4 2.4 9.6 6.4 13.6 20 8 29.6-4 6.4-11.2 10.4-19.2 10.4-4 0-8-0.8-11.2-3.2-6.4-4-10.4-10.4-10.4-18.4v-0.8L744 745.6v41.6h0.8c7.2 3.2 11.2 10.4 11.2 18.4 0 12.8-9.6 22.4-21.6 22.4zM152 575.2c-60.8 0-109.6-48.8-109.6-109.6V204.8c0-60.8 48.8-109.6 109.6-109.6h721.6c60.8 0 109.6 48.8 109.6 109.6v260.8c0 60.8-48.8 109.6-109.6 109.6H152z m-11.2-432c-28.8 0-52 24-52 54.4v278.4c0 29.6 23.2 54.4 52 54.4h743.2c28.8 0 52-24 52-54.4V197.6c0-29.6-23.2-54.4-52-54.4H140.8z m21.6 312c-10.4 0-19.2-8.8-19.2-19.2 0-10.4 8.8-19.2 19.2-19.2h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z m0-80.8c-10.4 0-19.2-8.8-19.2-19.2S152 336 162.4 336h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z" fill=""></path>
                    </svg>
                  </span>
                  Telephone
                </li>
                <li>
                  <span>
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M383.2 941.6c-4 0-6.4-0.8-9.6-2.4-14.4-9.6-82.4-60-25.6-160 15.2-27.2 19.2-48.8 13.6-66.4-6.4-20-27.2-28-27.2-28-9.6-4-14.4-15.2-10.4-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 3.2 0 36.8 14.4 50.4 50.4 10.4 28.8 4.8 62.4-16.8 100-40 70.4 2.4 101.6 11.2 107.2 8.8 4.8 12 16.8 7.2 26.4-4.8 6.4-12 8.8-17.6 8.8z m129.6-42.4c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16 47.2 48 9.6 27.2 4.8 58.4-15.2 92.8-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4.8 6.4-12 8.8-17.6 8.8z m-265.6 0c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16.8 47.2 48 9.6 27.2 4 58.4-15.2 93.6-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4 5.6-12 8-17.6 8z m487.2-71.2c-6.4 0-11.2-2.4-15.2-6.4s-6.4-9.6-6.4-15.2c0-8.8 5.6-16.8 13.6-20.8h0.8v-43.2l-40.8 23.2v0.8c0 6.4-2.4 14.4-10.4 18.4-3.2 2.4-7.2 3.2-11.2 3.2-8 0-15.2-4-18.4-10.4-3.2-5.6-4-11.2-2.4-16.8 1.6-5.6 4.8-10.4 10.4-12.8 3.2-2.4 7.2-3.2 10.4-3.2 4 0 8 0.8 11.2 3.2l36.8-20.8-36-20.8c-4.8 1.6-8.8 2.4-12 2.4-4 0-7.2-0.8-10.4-2.4-9.6-6.4-13.6-20-8-29.6 4-6.4 11.2-10.4 19.2-10.4 4 0 8 0.8 11.2 3.2 6.4 4 10.4 10.4 10.4 18.4v0.8L728 712v-43.2h-0.8c-8-4-13.6-12-13.6-20.8 0-12 9.6-21.6 21.6-21.6 6.4 0 12 2.4 16 6.4s6.4 9.6 6.4 15.2c0 7.2-4 14.4-11.2 18.4H744v41.6l35.2-20v-0.8c0-6.4 2.4-14.4 10.4-18.4 3.2-2.4 7.2-3.2 11.2-3.2 8 0 15.2 4 18.4 10.4 3.2 5.6 4 11.2 2.4 16.8-1.6 5.6-4.8 10.4-10.4 12.8-3.2 2.4-7.2 3.2-10.4 3.2-4 0-8-0.8-11.2-3.2l-36.8 20.8 36 20.8c4.8-1.6 8.8-2.4 12-2.4 4 0 7.2 0.8 10.4 2.4 9.6 6.4 13.6 20 8 29.6-4 6.4-11.2 10.4-19.2 10.4-4 0-8-0.8-11.2-3.2-6.4-4-10.4-10.4-10.4-18.4v-0.8L744 745.6v41.6h0.8c7.2 3.2 11.2 10.4 11.2 18.4 0 12.8-9.6 22.4-21.6 22.4zM152 575.2c-60.8 0-109.6-48.8-109.6-109.6V204.8c0-60.8 48.8-109.6 109.6-109.6h721.6c60.8 0 109.6 48.8 109.6 109.6v260.8c0 60.8-48.8 109.6-109.6 109.6H152z m-11.2-432c-28.8 0-52 24-52 54.4v278.4c0 29.6 23.2 54.4 52 54.4h743.2c28.8 0 52-24 52-54.4V197.6c0-29.6-23.2-54.4-52-54.4H140.8z m21.6 312c-10.4 0-19.2-8.8-19.2-19.2 0-10.4 8.8-19.2 19.2-19.2h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z m0-80.8c-10.4 0-19.2-8.8-19.2-19.2S152 336 162.4 336h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z" fill=""></path>
                    </svg>
                  </span>
                  Wifi
                </li>
              </ol>
            </div>
          </div>
          <div className="tab-pane" id="room" role="tabpanel" aria-labelledby="program-tab">
            <div className="itinerary-content">
              <h3> Standard Double Room with Attached Washroom </h3>
              <p className="mb-0">Pax allowed: 3 </p>
              <div className="itinerary-timeline-wrap">
                <ul>
                  <li className="timeline-content-list active" data-property="1" data-room-type="1" data-room="1">
                    <div className="timeline-content">
                      <div className="day-count">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" version="1.1" id="Layer_1" width="800px" height="800px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#ffffff">

                          <g id="SVGRepo_bgCarrier" stroke-width="0" />

                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                          <g id="SVGRepo_iconCarrier">
                            <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z" />
                            <g>
                              <path d="M177.914,311.906l-12.969,9.312c6.844,9.516,15.094,17.922,24.547,24.906l9.516-12.828 C190.883,327.281,183.789,320.094,177.914,311.906z" />
                              <path d="M144.008,255.406V256c0,11.578,1.766,23,5.25,33.953l15.188-4.844c-2.969-9.375-4.469-19.172-4.469-29.109L144.008,255.406 z" />
                              <path d="M165.711,189.75c-6.953,9.469-12.375,19.938-16.078,31.078l15.172,5.016c3.141-9.562,7.797-18.531,13.766-26.625 L165.711,189.75z" />
                              <path d="M220.539,362.25c11.078,3.719,22.688,5.625,34.469,5.75l0.156-15.969c-10.125-0.094-20.062-1.734-29.594-4.922 L220.539,362.25z" />
                              <path d="M221.758,149.344c-11.156,3.594-21.672,8.922-31.25,15.797l9.375,12.938c8.156-5.891,17.172-10.453,26.75-13.516 L221.758,149.344z" />
                              <path d="M290.883,149.531c-11.109-3.625-22.719-5.484-34.562-5.531l-0.031,15.969c10.125,0.047,20.109,1.625,29.609,4.734 L290.883,149.531z" />
                              <path d="M333.117,313.25l12.828,9.547c7.031-9.469,12.5-19.891,16.234-31.016l-15.125-5.062 C343.836,296.203,339.164,305.125,333.117,313.25z" />
                              <path d="M362.555,221.469l-15.188,4.906c3.078,9.562,4.672,19.516,4.672,29.625l11.203,0.844l4.75-0.531 C367.992,244.219,366.164,232.609,362.555,221.469z" />
                              <path d="M284.82,347.625l4.797,15.234c11.188-3.516,21.734-8.766,31.328-15.594l-9.266-13.016 C303.461,340.109,294.414,344.609,284.82,347.625z" />
                              <path d="M346.68,190.25c-6.875-9.469-15.188-17.812-24.719-24.719l-9.406,12.859c8.156,5.969,15.297,13.125,21.203,21.266 L346.68,190.25z" />
                            </g>
                          </g>

                        </svg>
                      </div>
                      <h4>standard package</h4>
                      <ol className="facilities">

                        <li>
                          <span>
                            <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path d="M383.2 941.6c-4 0-6.4-0.8-9.6-2.4-14.4-9.6-82.4-60-25.6-160 15.2-27.2 19.2-48.8 13.6-66.4-6.4-20-27.2-28-27.2-28-9.6-4-14.4-15.2-10.4-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 3.2 0 36.8 14.4 50.4 50.4 10.4 28.8 4.8 62.4-16.8 100-40 70.4 2.4 101.6 11.2 107.2 8.8 4.8 12 16.8 7.2 26.4-4.8 6.4-12 8.8-17.6 8.8z m129.6-42.4c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16 47.2 48 9.6 27.2 4.8 58.4-15.2 92.8-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4.8 6.4-12 8.8-17.6 8.8z m-265.6 0c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16.8 47.2 48 9.6 27.2 4 58.4-15.2 93.6-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4 5.6-12 8-17.6 8z m487.2-71.2c-6.4 0-11.2-2.4-15.2-6.4s-6.4-9.6-6.4-15.2c0-8.8 5.6-16.8 13.6-20.8h0.8v-43.2l-40.8 23.2v0.8c0 6.4-2.4 14.4-10.4 18.4-3.2 2.4-7.2 3.2-11.2 3.2-8 0-15.2-4-18.4-10.4-3.2-5.6-4-11.2-2.4-16.8 1.6-5.6 4.8-10.4 10.4-12.8 3.2-2.4 7.2-3.2 10.4-3.2 4 0 8 0.8 11.2 3.2l36.8-20.8-36-20.8c-4.8 1.6-8.8 2.4-12 2.4-4 0-7.2-0.8-10.4-2.4-9.6-6.4-13.6-20-8-29.6 4-6.4 11.2-10.4 19.2-10.4 4 0 8 0.8 11.2 3.2 6.4 4 10.4 10.4 10.4 18.4v0.8L728 712v-43.2h-0.8c-8-4-13.6-12-13.6-20.8 0-12 9.6-21.6 21.6-21.6 6.4 0 12 2.4 16 6.4s6.4 9.6 6.4 15.2c0 7.2-4 14.4-11.2 18.4H744v41.6l35.2-20v-0.8c0-6.4 2.4-14.4 10.4-18.4 3.2-2.4 7.2-3.2 11.2-3.2 8 0 15.2 4 18.4 10.4 3.2 5.6 4 11.2 2.4 16.8-1.6 5.6-4.8 10.4-10.4 12.8-3.2 2.4-7.2 3.2-10.4 3.2-4 0-8-0.8-11.2-3.2l-36.8 20.8 36 20.8c4.8-1.6 8.8-2.4 12-2.4 4 0 7.2 0.8 10.4 2.4 9.6 6.4 13.6 20 8 29.6-4 6.4-11.2 10.4-19.2 10.4-4 0-8-0.8-11.2-3.2-6.4-4-10.4-10.4-10.4-18.4v-0.8L744 745.6v41.6h0.8c7.2 3.2 11.2 10.4 11.2 18.4 0 12.8-9.6 22.4-21.6 22.4zM152 575.2c-60.8 0-109.6-48.8-109.6-109.6V204.8c0-60.8 48.8-109.6 109.6-109.6h721.6c60.8 0 109.6 48.8 109.6 109.6v260.8c0 60.8-48.8 109.6-109.6 109.6H152z m-11.2-432c-28.8 0-52 24-52 54.4v278.4c0 29.6 23.2 54.4 52 54.4h743.2c28.8 0 52-24 52-54.4V197.6c0-29.6-23.2-54.4-52-54.4H140.8z m21.6 312c-10.4 0-19.2-8.8-19.2-19.2 0-10.4 8.8-19.2 19.2-19.2h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z m0-80.8c-10.4 0-19.2-8.8-19.2-19.2S152 336 162.4 336h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z" fill="" />
                            </svg>
                          </span>
                          Telephone
                        </li>
                        <li>
                          <span>
                            <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path d="M383.2 941.6c-4 0-6.4-0.8-9.6-2.4-14.4-9.6-82.4-60-25.6-160 15.2-27.2 19.2-48.8 13.6-66.4-6.4-20-27.2-28-27.2-28-9.6-4-14.4-15.2-10.4-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 3.2 0 36.8 14.4 50.4 50.4 10.4 28.8 4.8 62.4-16.8 100-40 70.4 2.4 101.6 11.2 107.2 8.8 4.8 12 16.8 7.2 26.4-4.8 6.4-12 8.8-17.6 8.8z m129.6-42.4c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16 47.2 48 9.6 27.2 4.8 58.4-15.2 92.8-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4.8 6.4-12 8.8-17.6 8.8z m-265.6 0c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16.8 47.2 48 9.6 27.2 4 58.4-15.2 93.6-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4 5.6-12 8-17.6 8z m487.2-71.2c-6.4 0-11.2-2.4-15.2-6.4s-6.4-9.6-6.4-15.2c0-8.8 5.6-16.8 13.6-20.8h0.8v-43.2l-40.8 23.2v0.8c0 6.4-2.4 14.4-10.4 18.4-3.2 2.4-7.2 3.2-11.2 3.2-8 0-15.2-4-18.4-10.4-3.2-5.6-4-11.2-2.4-16.8 1.6-5.6 4.8-10.4 10.4-12.8 3.2-2.4 7.2-3.2 10.4-3.2 4 0 8 0.8 11.2 3.2l36.8-20.8-36-20.8c-4.8 1.6-8.8 2.4-12 2.4-4 0-7.2-0.8-10.4-2.4-9.6-6.4-13.6-20-8-29.6 4-6.4 11.2-10.4 19.2-10.4 4 0 8 0.8 11.2 3.2 6.4 4 10.4 10.4 10.4 18.4v0.8L728 712v-43.2h-0.8c-8-4-13.6-12-13.6-20.8 0-12 9.6-21.6 21.6-21.6 6.4 0 12 2.4 16 6.4s6.4 9.6 6.4 15.2c0 7.2-4 14.4-11.2 18.4H744v41.6l35.2-20v-0.8c0-6.4 2.4-14.4 10.4-18.4 3.2-2.4 7.2-3.2 11.2-3.2 8 0 15.2 4 18.4 10.4 3.2 5.6 4 11.2 2.4 16.8-1.6 5.6-4.8 10.4-10.4 12.8-3.2 2.4-7.2 3.2-10.4 3.2-4 0-8-0.8-11.2-3.2l-36.8 20.8 36 20.8c4.8-1.6 8.8-2.4 12-2.4 4 0 7.2 0.8 10.4 2.4 9.6 6.4 13.6 20 8 29.6-4 6.4-11.2 10.4-19.2 10.4-4 0-8-0.8-11.2-3.2-6.4-4-10.4-10.4-10.4-18.4v-0.8L744 745.6v41.6h0.8c7.2 3.2 11.2 10.4 11.2 18.4 0 12.8-9.6 22.4-21.6 22.4zM152 575.2c-60.8 0-109.6-48.8-109.6-109.6V204.8c0-60.8 48.8-109.6 109.6-109.6h721.6c60.8 0 109.6 48.8 109.6 109.6v260.8c0 60.8-48.8 109.6-109.6 109.6H152z m-11.2-432c-28.8 0-52 24-52 54.4v278.4c0 29.6 23.2 54.4 52 54.4h743.2c28.8 0 52-24 52-54.4V197.6c0-29.6-23.2-54.4-52-54.4H140.8z m21.6 312c-10.4 0-19.2-8.8-19.2-19.2 0-10.4 8.8-19.2 19.2-19.2h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z m0-80.8c-10.4 0-19.2-8.8-19.2-19.2S152 336 162.4 336h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z" fill="" />
                            </svg>
                          </span>
                          Wifi
                        </li>
                        <li>
                          <span>
                            <svg width="800px" height="800px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <path d="M383.2 941.6c-4 0-6.4-0.8-9.6-2.4-14.4-9.6-82.4-60-25.6-160 15.2-27.2 19.2-48.8 13.6-66.4-6.4-20-27.2-28-27.2-28-9.6-4-14.4-15.2-10.4-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 3.2 0 36.8 14.4 50.4 50.4 10.4 28.8 4.8 62.4-16.8 100-40 70.4 2.4 101.6 11.2 107.2 8.8 4.8 12 16.8 7.2 26.4-4.8 6.4-12 8.8-17.6 8.8z m129.6-42.4c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16 47.2 48 9.6 27.2 4.8 58.4-15.2 92.8-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4.8 6.4-12 8.8-17.6 8.8z m-265.6 0c-4 0-6.4-0.8-9.6-2.4-28.8-16.8-69.6-68.8-24-150.4 13.6-24.8 17.6-44.8 12-60-5.6-17.6-24-24.8-24-24.8-10.4-4-15.2-14.4-11.2-24.8 3.2-8 9.6-12.8 17.6-12.8 2.4 0 4.8 0.8 7.2 1.6 8 3.2 36 16.8 47.2 48 9.6 27.2 4 58.4-15.2 93.6-38.4 68.8 8 96.8 10.4 97.6 4 2.4 7.2 6.4 8.8 11.2 1.6 4.8 0.8 10.4-1.6 15.2-4 5.6-12 8-17.6 8z m487.2-71.2c-6.4 0-11.2-2.4-15.2-6.4s-6.4-9.6-6.4-15.2c0-8.8 5.6-16.8 13.6-20.8h0.8v-43.2l-40.8 23.2v0.8c0 6.4-2.4 14.4-10.4 18.4-3.2 2.4-7.2 3.2-11.2 3.2-8 0-15.2-4-18.4-10.4-3.2-5.6-4-11.2-2.4-16.8 1.6-5.6 4.8-10.4 10.4-12.8 3.2-2.4 7.2-3.2 10.4-3.2 4 0 8 0.8 11.2 3.2l36.8-20.8-36-20.8c-4.8 1.6-8.8 2.4-12 2.4-4 0-7.2-0.8-10.4-2.4-9.6-6.4-13.6-20-8-29.6 4-6.4 11.2-10.4 19.2-10.4 4 0 8 0.8 11.2 3.2 6.4 4 10.4 10.4 10.4 18.4v0.8L728 712v-43.2h-0.8c-8-4-13.6-12-13.6-20.8 0-12 9.6-21.6 21.6-21.6 6.4 0 12 2.4 16 6.4s6.4 9.6 6.4 15.2c0 7.2-4 14.4-11.2 18.4H744v41.6l35.2-20v-0.8c0-6.4 2.4-14.4 10.4-18.4 3.2-2.4 7.2-3.2 11.2-3.2 8 0 15.2 4 18.4 10.4 3.2 5.6 4 11.2 2.4 16.8-1.6 5.6-4.8 10.4-10.4 12.8-3.2 2.4-7.2 3.2-10.4 3.2-4 0-8-0.8-11.2-3.2l-36.8 20.8 36 20.8c4.8-1.6 8.8-2.4 12-2.4 4 0 7.2 0.8 10.4 2.4 9.6 6.4 13.6 20 8 29.6-4 6.4-11.2 10.4-19.2 10.4-4 0-8-0.8-11.2-3.2-6.4-4-10.4-10.4-10.4-18.4v-0.8L744 745.6v41.6h0.8c7.2 3.2 11.2 10.4 11.2 18.4 0 12.8-9.6 22.4-21.6 22.4zM152 575.2c-60.8 0-109.6-48.8-109.6-109.6V204.8c0-60.8 48.8-109.6 109.6-109.6h721.6c60.8 0 109.6 48.8 109.6 109.6v260.8c0 60.8-48.8 109.6-109.6 109.6H152z m-11.2-432c-28.8 0-52 24-52 54.4v278.4c0 29.6 23.2 54.4 52 54.4h743.2c28.8 0 52-24 52-54.4V197.6c0-29.6-23.2-54.4-52-54.4H140.8z m21.6 312c-10.4 0-19.2-8.8-19.2-19.2 0-10.4 8.8-19.2 19.2-19.2h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z m0-80.8c-10.4 0-19.2-8.8-19.2-19.2S152 336 162.4 336h682.4c10.4 0 19.2 8.8 19.2 19.2 0 10.4-8.8 19.2-19.2 19.2H162.4z" fill="" />
                            </svg>
                          </span>
                          Fan
                        </li>
                      </ol>
                      <hr className="my-3" />
                      <div className="listingPrice">
                        <span className="listingPrice_finalPrice">₹<span>3449.97</span></span>
                        <span className="listingPrice_slashedPrice">0</span>
                        <span className="listingPrice_percentage">0</span>
                      </div>
                      <div className="listingPrice__perRoomNight"> + taxes &amp; fees: 149.97</div>
                    </div>
                    <div className="timeline-content-img">
                      <img src="https://travelofox.blr1.cdn.digitaloceanspaces.com/Rooms/_20250206094246.jpg" alt="" />
                      <a href="#"> View More</a>
                    </div>
                  </li>

                </ul>
              </div>

              <h3> Cosy Room (Double Bed) </h3>
              <p className="mb-0">Pax allowed: 5 </p>
              <div className="itinerary-timeline-wrap">
                <ul>
                </ul>
              </div>

            </div>
          </div>
          <div className="tab-pane" id="policy" role="tabpanel" aria-labelledby="policy-tab">
            <div className="accordion" id="accordions">


              <div className="card">
                <div className="card-header" id="heading-1">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                    Partial Refund </button>
                </div>
                <div id="collapse-1" className="collapse" aria-labelledby="heading-1" data-parent="#accordions">
                  <div className="card-body">
                    Partial refund if cancelled within 24 hours </div>
                </div>
              </div>


            </div>
          </div>
          <div className="tab-pane" id="review" role="tabpanel" aria-labelledby="review-tab">
            <div className="summary-review">
              <div className="review-score">
                <span>4.9</span>
              </div>
              <div className="review-score-content">
                <h3>
                  Excellent
                  <span>( Based on 24 reviews )</span>
                </h3>
                <p>Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris
                  qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate,
                  vestibulum.</p>
              </div>
            </div>
            <div className="comment-area">
              <h3 className="comment-title">3 Reviews</h3>
              <div className="comment-area-inner">
                <ol>
                  <li>
                    <figure className="comment-thumb">
                      <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img20.jpg" alt="" />
                    </figure>
                    <div className="comment-content">
                      <div className="comment-header">
                        <h5 className="author-name">Tom Sawyer</h5>
                        <span className="post-on">Jana 10 2020</span>
                        <div className="rating-wrap">
                          <div className="rating-start" title="Rated 5 out of 5">
                            <span style="width: 90%;"></span>
                          </div>
                        </div>
                      </div>
                      <p>Officia amet posuere voluptates, mollit montes eaque accusamus
                        laboriosam quisque cupidatat dolor pariatur, pariatur auctor.</p>
                      <a href="#" className="reply"><i className="fas fa-reply"></i>Reply</a>
                    </div>
                  </li>
                  <li>
                    <figure className="comment-thumb">
                      <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img21.jpg" alt="" />
                    </figure>
                    <div className="comment-content">
                      <div className="comment-header">
                        <h5 className="author-name">John Doe</h5>
                        <span className="post-on">Jana 10 2020</span>
                        <div className="rating-wrap">
                          <div className="rating-start" title="Rated 5 out of 5">
                            <span style="width: 90%"></span>
                          </div>
                        </div>
                      </div>
                      <p>Officia amet posuere voluptates, mollit montes eaque accusamus
                        laboriosam quisque cupidatat dolor pariatur, pariatur auctor.
                      </p>
                      <a href="#" className="reply"><i className="fas fa-reply"></i>Reply</a>
                    </div>
                  </li>
                  <li>
                    <figure className="comment-thumb">
                      <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img22.jpg" alt="" />
                    </figure>
                    <div className="comment-content">
                      <div className="comment-header">
                        <h5 className="author-name">Jaan Smith</h5>
                        <span className="post-on">Jana 10 2020</span>
                        <div className="rating-wrap">
                          <div className="rating-start" title="Rated 5 out of 5">
                            <span></span>
                          </div>
                        </div>
                      </div>
                      <p>Officia amet posuere voluptates, mollit montes eaque accusamus
                        laboriosam quisque cupidatat dolor pariatur, pariatur auctor.</p>
                      <a href="#" className="reply"><i className="fas fa-reply"></i>Reply</a>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="comment-form-wrap">
                <h3 className="comment-title">Leave a Review</h3>
                <form className="comment-form">
                  <div className="full-width rate-wrap">
                    <label>Your rating</label>
                    <div className="procduct-rate">
                      <span></span>
                    </div>
                  </div>
                  <p>
                    <input type="text" name="name" placeholder="Name" />
                  </p>
                  <p>
                    <input type="text" name="name" placeholder="Last name" />
                  </p>
                  <p>
                    <input type="email" name="email" placeholder="Email" />
                  </p>
                  <p>
                    <input type="text" name="subject" placeholder="Subject" />
                  </p>
                  <p>
                    <textarea rows="6" placeholder="Your review"></textarea>
                  </p>
                  <p>
                    <input type="submit" name="submit" value="Submit" />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="map" role="tabpanel" aria-labelledby="map-tab">
            <div className="row">
              <div className="col-md-7">
                <script>
                  const addresses = []; // Initialize the addresses array
                </script>
                <ol>

                  <script>
                    addresses.push("Mussoorie"); // Safely add the address
                  </script>
                  <li className="activity-item">
                    <img src="https://travelofox.blr1.cdn.digitaloceanspaces.com/properties/activitiesImages/Trekking_67a9d08e9927a.jpg" alt="Trekking" />
                    <div className="activity-content">
                      <h3>Trekking (Mussoorie)</h3>
                      <p>Trekking to scenic spots like Lal Tibba (a high point with panoramic views), exploring the Camel&#039;s Back Road for scenic walks</p>
                    </div>
                  </li>
                  <script>
                    addresses.push("Test002"); // Safely add the address
                  </script>
                  <li className="activity-item">
                    <img src="https://travelofox.blr1.cdn.digitaloceanspaces.com/properties/activitiesImages/camping_67a9d116efdf3.jpg" alt="Test002" />
                    <div className="activity-content">
                      <h3>Test002 (Test002)</h3>
                      <p>Test002</p>
                    </div>
                  </li>
                  <script>
                    addresses.push("test"); // Safely add the address
                  </script>
                  <li className="activity-item">
                    <img src="https://travelofox.blr1.cdn.digitaloceanspaces.com/properties/activitiesImages/test001_67a9d1a851fb6.jpg" alt="test001" />
                    <div className="activity-content">
                      <h3>test001 (test)</h3>
                      <p>test</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="col-md-5">
                <div className="map-area">
                  <div id="map-container" style="width: 100%; height: 500px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3>Similar Property</h3>
        <div className="package-inner">
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img5.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$1,900 </span> / Per Person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        7D/6N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 5
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Malaysia
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Sunset view of beautiful lakeside resident</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(25 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style="width: 60%"></span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam.
                      Ut elit tellus, luctus nec ullam elit tellpus.</p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                      <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img6.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$1,230 </span> / Per Person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        5D/4N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 8
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Canada
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Experience the natural beauty of island</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(17 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style="width: 100%"></span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam.
                      Ut elit tellus, luctus nec ullam elit tellpus.</p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                      <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img7.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$2,000 </span> / Per Person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        6D/5N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 6
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Portugal
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Vacation to the water city of Portugal</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(22 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style="width: 80%"></span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam.
                      Ut elit tellus, luctus nec ullam elit tellpus.</p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                      <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img7.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$2,000 </span> / Per Person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        6D/5N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 6
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Portugal
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Trekking to the base camp of mountain</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(22 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style="width: 80%"></span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam.
                      Ut elit tellus, luctus nec ullam elit tellpus.</p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                      <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img7.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$2,000 </span> / Per Person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        6D/5N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 6
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Portugal
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Beautiful season of the rural village</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(22 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style="width: 80%"></span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam.
                      Ut elit tellus, luctus nec ullam elit tellpus.</p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                      <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="https://travelofox.techwens.com/wp-content/themes/travelofox_bkpges/img7.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$2,000 </span> / Per Person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        6D/5N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 6
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Portugal
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Summer holiday to the Oxolotan River</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(22 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style="width: 80%"></span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam.
                      Ut elit tellus, luctus nec ullam elit tellpus.</p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                      <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailsTabs