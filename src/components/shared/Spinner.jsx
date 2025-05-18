import Image from 'next/image';
import loaderGif from '../../../public/assets/images/loader1.gif';


const Spinner = () => {
    return (
        <div id="siteLoader" className="site-loader">
            <div className="preloader-content">
                <Image src={loaderGif} alt="Spinner GIF" width={100} height={100} />
            </div>
        </div>
    )
}

export default Spinner