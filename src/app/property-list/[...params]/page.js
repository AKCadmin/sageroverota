"use client";

import SingularProperty from "@/components/pages/properties/property-details/SingularProperty";
import { decrypt } from "@/utils/encryption";
import { useParams } from "next/navigation";

const PropertyDetails = () => {
  // getting params
  const params = useParams();
  const slug = params?.params?.[1];
  const id = params?.params?.[0];
  const decryptedId = decrypt(id);

  return <SingularProperty id={decryptedId} />
}

export default PropertyDetails