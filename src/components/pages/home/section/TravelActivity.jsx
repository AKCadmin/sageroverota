import FeatureCard from "@/components/shared/cards/FeatureCard"
import SectionNameCenter from "@/components/ui/heading/SectionNameCenter"

const TravelActivity = () => {
    return (
        <section className="activity-section">
            <div className="container">
                <SectionNameCenter
                    name="TRAVEL BY ACTIVITY"
                    heading="EXPLORE GREAT PLACES"
                    description="Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt."
                />
                <div className="activity-inner row">
                    {
                        [6, 7, 8, 9, 10, 11].map((item) => (
                            <FeatureCard
                                key={item}
                                image={`/assets/images/icon${item}.png`}
                                title="Adventure"
                                destinationCount="15"
                                link="#"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TravelActivity