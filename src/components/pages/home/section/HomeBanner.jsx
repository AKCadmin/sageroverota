import BannerHeading from "@/components/ui/heading/BannerHeading"
import BannerSubHeading from "@/components/ui/heading/BannerSubHeading"
import VideoTag from "@/components/ui/videos/VideoTag"
import DestinationSearchForms from "./forms/DestinationSearchForms"

const HomeBanner = () => {
    return (
        <>
            <section className="home-slider-section">
                <div className="home-slider">
                    <div className="home-banner-items">
                        <VideoTag
                            src="assets/videos/banner-video-2.mp4"
                            type="video/mp4"
                            options={{ autoPlay: true, loop: true, muted: true, playsInline: true }}
                        />
                        <div className="banner-content-wrap">
                            <div className="container">
                                <div className="banner-content text-center">
                                    <BannerHeading title="TRAVELLING AROUND THE WORLD" />
                                    <BannerSubHeading title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                                </div>
                            </div>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </section>
            <DestinationSearchForms />
        </>
    )
}

export default HomeBanner