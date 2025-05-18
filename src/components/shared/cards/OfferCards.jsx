import Image from "next/image"
import Link from "next/link"

const OfferCards = ({ image, currency, offerPercentage, offerPrice, price, title, description, link }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="special-item">
        <figure className="special-img">
          <Image src={image || "/assets/images/img9.jpg"} alt="" width={300} height={300} />
        </figure>
        <div className="badge-dis">
          <span>
            <strong>{offerPercentage}%</strong>
            off
          </span>
        </div>
        <div className="special-content">
          <div className="meta-cat">
            <Link href={link}>{title}</Link>
          </div>
          <h3>
            <Link href={link}>{description}</Link>
          </h3>
          <div className="package-price">
            Price:
            <del>{currency} {price}</del>
            <ins>{currency} {offerPrice}</ins>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCards