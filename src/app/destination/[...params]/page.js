"use client";

import DestinationDetails from "@/components/pages/destination/destination-details/DestinationDetails";
import { decrypt } from "@/utils/encryption";
import { useParams } from "next/navigation";

const DestinationDetailsPage = () => {
  const params = useParams();
  const slug = params?.params?.[1];
  const id = params?.params?.[0];
  const decryptedId = decrypt(id);
  console.log("slug:", slug, "id:", id);


  return <DestinationDetails key={id} id={decryptedId} />
};

export default DestinationDetailsPage;
