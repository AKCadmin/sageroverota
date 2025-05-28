const AmountDetails = () => {
  return (
    <div className="amount-details">
      <div className="sidebar book-from-detailsPage">
        <div className="listingDetails-wrapper">
          <div className="offer-box-details">
            <div>
              <div>Your savings</div>
            </div>
            <div className="decresed-amount">-₹6664</div>
          </div>
        </div>

        <div className="offer-box">
          <div className="offer-box-details">
            <div>
              <div>Your savings</div>
              <div className="listingPrice__perRoomNight">
                Including taxes & fees
                <span className="c-16fmin3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path
                      fillRule="evenodd"
                      d="M9.004.957c4.436 0 8.047 3.611 8.047 8.047s-3.61 8.047-8.047 8.047c-4.436 0-8.047-3.61-8.047-8.047C.957 4.568 4.568.957 9.004.957zM9 0C4.02 0 0 4.02 0 9s4.02 9 9 9 9-4.02 9-9-4.02-9-9-9zm.524 13.039v-4.96c0-.34-.226-.6-.52-.6-.294 0-.52.26-.52.6v4.96c0 .34.226.6.52.6.294 0 .52-.28.52-.6zM9.04 4.443a.681.681 0 00-.68.679c0 .373.306.679.68.679a.682.682 0 00.679-.68.681.681 0 00-.68-.678z"
                      opacity=".7"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="decresed-amount">-₹7946</div>
          </div>
        </div>

        <a href="#" className="button-primary w-100" id="room-book-now">
          BOOK NOW
        </a>

        <div className="package-details-policy">
          <div>
            <a href="#">
              Cancellation Policy
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path
                    fillRule="evenodd"
                    fill="red"
                    d="M9.004.957c4.436 0 8.047 3.611 8.047 8.047s-3.61 8.047-8.047 8.047c-4.436 0-8.047-3.61-8.047-8.047C.957 4.568 4.568.957 9.004.957zM9 0C4.02 0 0 4.02 0 9s4.02 9 9 9 9-4.02 9-9-4.02-9-9-9zm.524 13.039v-4.96c0-.34-.226-.6-.52-.6-.294 0-.52.26-.52.6v4.96c0 .34.226.6.52.6.294 0 .52-.28.52-.6zM9.04 4.443a.681.681 0 00-.68.679c0 .373.306.679.68.679a.682.682 0 00.679-.68.681.681 0 00-.68-.678z"
                    opacity=".7"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <div>
            <a href="#">Follow safety measures advised at the hotel</a>
          </div>
          <div>
            <span>
              By proceeding, you agree to our <a href="#">Guest Policies.</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountDetails;
