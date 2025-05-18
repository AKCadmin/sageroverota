import OfferCards from "@/components/shared/cards/OfferCards"
import SectionNameCenter from "@/components/ui/heading/SectionNameCenter"

const SpecialTravelOffer = () => {
    return (
        <section className="special-section">
            <div className="container">
                <SectionNameCenter
                    name="TRAVEL OFFER & DISCOUNT"
                    heading="SPECIAL TRAVEL OFFER"
                    description="Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt."
                />
                <div className="special-inner">
                    <div className="row">
                        {[0, 1, 2].map((item) => (
                            <OfferCards
                                key={item}
                                image={`/assets/images/img9.jpg`}
                                currency="$"
                                offerPercentage="20"
                                offerPrice="200"
                                price="300"
                                title="Adventure"
                                description="Experience the natural beauty of glacier"
                                link="#"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialTravelOffer