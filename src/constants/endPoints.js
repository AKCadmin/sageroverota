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
}

export default ENDPOINTS;
