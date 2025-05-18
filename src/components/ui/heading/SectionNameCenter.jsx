
const SectionNameCenter = ({ name, heading, description }) => {
    return (
        <div className="section-heading text-center">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h5 className="dash-style">{name}</h5>
                    <h2>{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionNameCenter