import Link from "next/link"

const ScrollToTop = () => {
    return (
        <Link id="backTotop" href="#" className="to-top-icon">
            <i className="fas fa-chevron-up"></i>
        </Link>
    )
}

export default ScrollToTop