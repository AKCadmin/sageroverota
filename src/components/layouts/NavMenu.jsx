
const NavMenu = () => {
    return (
        <div className="bottom-header py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="site-identity">
                    <h1 className="site-title">
                        <a href="/">
                            <img className="white-logo" src="/assets/images/travele-logo.png" alt="logo" />
                            <img className="black-logo" src="/assets/images/travele-logo1.png" alt="logo" />
                        </a>
                    </h1>
                </div>
                <div className="main-navigation d-none d-lg-block">
                    <nav id="navigation" className="navigation">
                        <ul>
                            <li className="">
                                <a href="/about">About Us</a>
                            </li>
                            <li className="">
                                <a href="/destination">Destination</a>
                            </li>
                            <li className="">
                                <a href="/tour-packages">Tour Packages</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-btn">
                    <a href="#" className="button-primary">BOOK NOW</a>
                </div>
            </div>
        </div>
    )
}

export default NavMenu