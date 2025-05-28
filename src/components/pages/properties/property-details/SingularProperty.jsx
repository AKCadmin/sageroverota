import AmountDetails from "./AmountDetails"
import PropertDetailsGallery from "./PropertDetailsGallery"
import PropertyDetailsTabs from "./PropertyDetailsTabs"
import PropertyDetailsTitle from "./PropertyDetailsTitle"

const SingularProperty = ({ id }) => {
  return (
    <div className="single-tour-section">
      <div className="container">
        <div className="single-tour-inner">
          <PropertyDetailsTitle />
          <PropertDetailsGallery />
        </div>
        <div className="package-details">
          <PropertyDetailsTabs />
          <AmountDetails />
        </div>
      </div>
    </div>
  )
}

export default SingularProperty