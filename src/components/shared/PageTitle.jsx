
const PageTitle = ({ title, image }) => {
  return (
    <section className="inner-banner-wrap">
      <div className="inner-baner-container" style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <div className="inner-banner-content">
            <h1 className="inner-title">{title}</h1>
          </div>
        </div>
      </div>
      <div className="inner-shape"></div>
    </section>
  )
}

export default PageTitle