"use client";

import PropertiesList from "@/components/pages/properties/PropertiesList";
import { useEffect, useState } from "react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  // getting 
  useEffect(() => {
    const propertyData = JSON.parse(sessionStorage.getItem("propertySearchResult"));
    if (propertyData) {
      setProperties(propertyData);
    }
  }, [])


  if (properties.length > 0) {
    return <PropertiesList properties={properties} />
  } else {
    return null;
  }
}

export default PropertyList