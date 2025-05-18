import SectionNameLeft from "@/components/ui/heading/SectionNameLeft"
import Image from "next/image"

const HomeGallery = () => {
	return (
		<section className="best-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<SectionNameLeft
							name="BEST GALLERY"
							heading="BEST TRAVELER'S SHARED PHOTOS"
						/>
						<figure className="gallery-img">
							<Image src="/assets/images/img12.jpg" alt="" width={500} height={500} />
						</figure>
					</div>
					<div className="col-lg-7">
						<div className="row">
							<div className="col-sm-6">
								<figure className="gallery-img">
									<Image src="/assets/images/img13.jpg" alt="" width={500} height={500} />
								</figure>
							</div>
							<div className="col-sm-6">
								<figure className="gallery-img">
									<Image src="/assets/images/img14.jpg" alt="" width={500} height={500} />
								</figure>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<figure className="gallery-img">
									<Image src="/assets/images/img15.jpg" alt="" width={500} height={500} />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeGallery