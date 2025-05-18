import HomeBanner from './section/HomeBanner'
import HomeGallery from './section/HomeGallery'
import PopularPackages from './section/PopularPackages'
import SpecialTravelOffer from './section/SpecialTravelOffer'
import TopDestination from './section/TopDestination'
import TravelActivity from './section/TravelActivity'

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <TopDestination />
      <PopularPackages />
      <TravelActivity />
      <SpecialTravelOffer />
      <HomeGallery />
    </>
  )
}

export default HomePage