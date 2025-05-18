import { encrypt } from "@/utils/encryption"
import Image from "next/image"
import Link from "next/link"
import slugify from "slugify"

const DestinationCard = ({ destination }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <Link href={`/destination/${encrypt(destination.id)}/${slugify(destination?.destination_name, { lower: true, strict: true }).toLowerCase()}`}>
          {destination?.primary_image || destination?.image ? (
            <Image src={destination?.primary_image || destination?.image || "/assets/images/img5.jpg"} alt="image" width={500} height={305} />
          ) : null}
        </Link>
        <div className="card-body p-4">
          <h3>
            <Link href={`/destination/${encrypt(destination.id)}/${slugify(destination?.destination_name, { lower: true, strict: true }).toLowerCase()}`}>{destination?.destination_name}</Link>
          </h3>
          <p>
            {destination?.overview?.slice(0, 120) + "..."}
            <Link href={`/destination/${encrypt(destination.id)}/${slugify(destination?.destination_name, { lower: true, strict: true }).toLowerCase()}`}>Read More</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard