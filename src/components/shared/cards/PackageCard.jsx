import { encrypt } from "@/utils/encryption";
import { extractFormattedNights } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const PackageCard = ({ tour }) => {
    const encryptedId = encrypt(tour?.id);
    const slug = slugify(tour?.tour_name, { lower: true, strict: true });

    return (
        <div className="col-lg-4 col-md-6">
            <div className="package-wrap">
                <figure className="feature-image">
                    <Link href={`/tour-packages/${encryptedId}/${slug}`}>
                        {tour?.primary_tour_package_image && <Image src={tour?.primary_tour_package_image || "/assets/images/img5.jpg"} alt="image" width={500} height={305} />}
                    </Link>
                </figure>
                <div className="package-price">
                    <h6>
                        <span>&#8377; {(tour?.final_price)} </span> / per person
                    </h6>
                </div>
                <div className="package-content-wrap">
                    <div className="package-meta text-center">
                        <ul>
                            {tour?.destination_and_no_of_nights && (
                                <li>
                                    <i className="far fa-clock"></i>
                                    {extractFormattedNights(tour?.destination_and_no_of_nights)}
                                </li>
                            )}
                            {tour?.min_number_of_people && (
                                <li>
                                    <i className="fas fa-user-friends"></i>
                                    People: {tour?.min_number_of_people} - {tour?.max_number_of_people}
                                </li>
                            )}
                            {tour?.all_transports_included && tour?.all_transports_included > 0 && (
                                <li>
                                    Transport Included
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="package-content">
                        <h3>
                            <Link href={`/tour-packages/${encryptedId}/${slug}`}>{tour?.tour_name}</Link>
                        </h3>
                        <div className="review-area">
                            <span className="review-text">(25 reviews)</span>
                            <div className="rating-start" title="Rated 5 out of 5">
                                <span style={{ width: "60%" }}></span>
                            </div>
                        </div>
                        <div
                            className="package-inclusions"
                            dangerouslySetInnerHTML={{
                                __html: tour?.inclusions || tour?.itenary_plan || ""
                            }}
                        />

                        <div className="btn-wrap">
                            {/* <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                            <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageCard