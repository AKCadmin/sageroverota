const ENDPOINTS = {
  AUTH: {
    GENERATE_TOKEN: '/generate-token',
  },

  // =========== Destinations routes ==============
  DESTINATIONS: {
    GET_ALL: '/get-destinations',
    GET_DESTINATION_DETAILS: (id) => `/destinations/${id}`
  },


  // ========== Property routes ==============
  PROPERTY: {
    SEARCH_BY_DESTINATION: '/property-list'
  },


  // ========== TOUR PACKAGES routes ==============
  TOUR_PACKAGE: {
    GET_PACKAGES: '/tour-packages'
  },
}

export default ENDPOINTS;
