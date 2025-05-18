import Image from "next/image"
import Link from "next/link"

const FeatureCard = ({ image, title, destinationCount, link }) => {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="activity-item">
                <div className="activity-icon">
                    <Link href="#">
                        <Image src={image || "/assets/images/icon6.png"} alt="" width={50} height={50} />
                    </Link>
                </div>
                <div className="activity-content">
                    <h4>
                        <Link href={link}>{title}</Link>
                    </h4>
                    <p>{destinationCount} Destination</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard