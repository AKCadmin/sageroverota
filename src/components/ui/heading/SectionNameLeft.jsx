
const SectionNameLeft = ({ name, heading, description }) => {
    return (
        <div className="section-heading">
            <div className="row align-items-end">
                <div className="col-lg-7">
                    <h5 className="dash-style">{name}</h5>
                    <h2>{heading}</h2>
                </div>
                <div className="col-lg-5">
                    <div className="section-disc">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionNameLeft