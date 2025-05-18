import NavMenu from "./NavMenu"

const Header = () => {
   return (
      <header id="masthead" className="site-header header-primary">
         <NavMenu />
         <div className="mobile-menu-container"></div>
      </header>
   )
}

export default Header