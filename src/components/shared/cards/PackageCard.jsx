import Image from "next/image"
import Link from "next/link"

const PackageCard = ({
    image,
    amount,
    currency,
    duration,
    pax,
    destination,
    packageName,
    reviewCount,
    rating,
    description,
    link,
    wishList
}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="package-wrap">
                <figure className="feature-image">
                    <Link href="link">
                        <Image src={image || "/assets/images/img5.jpg"} alt="image" width={365} height={305} />
                    </Link>
                </figure>
                <div className="package-price">
                    <h6>
                        <span>{currency} {parseFloat(amount).toFixed(2)} </span> / per person
                    </h6>
                </div>
                <div className="package-content-wrap">
                    <div className="package-meta text-center">
                        <ul>
                            <li>
                                <i className="far fa-clock"></i>
                                {duration}
                            </li>
                            <li>
                                <i className="fas fa-user-friends"></i>
                                People: {pax}
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                {destination}
                            </li>
                        </ul>
                    </div>
                    <div className="package-content">
                        <h3>
                            <Link href="link">{packageName}</Link>
                        </h3>
                        <div className="review-area">
                            <span className="review-text">({reviewCount} reviews)</span>
                            <div className="rating-start" title="Rated 5 out of 5">
                                <span style={{ width: "60%" }}></span>
                            </div>
                        </div>
                        <p>{description}</p>
                        <div className="btn-wrap">
                            <Link href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></Link>
                            <a onClick={wishList} className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageCard