import PackageCard from "@/components/shared/cards/PackageCard"
import PrimaryButton from "@/components/ui/buttons/PrimaryButton"
import SectionNameCenter from "@/components/ui/heading/SectionNameCenter"

const PopularPackages = () => {
    return (
        <section className="package-section">
            <div className="container">
                <SectionNameCenter
                    name="POPULAR PACKAGES"
                    heading="EXPLORE GREAT PLACES"
                    description="Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt."
                />
                <div className="package-inner">
                    <div className="row">
                        {[0, 1, 2].map((item) => (
                            <PackageCard
                                key={item}
                                amount="100"
                                currency="$"
                                duration="3"
                                pax="2"
                                destination="New York"
                                packageName="New York"
                                reviewCount="10"
                                rating="5"
                                description="Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud."
                                link="#"
                            />
                        ))}
                    </div>
                    <div className="btn-wrap text-center">
                        <PrimaryButton title="VIEW ALL PACKAGES" link="#" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularPackages