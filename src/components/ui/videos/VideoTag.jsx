const VideoTag = ({ src, type, options }) => {
    return (
        <video className="banner-video" {...options}>
            <source src={src} type={type} />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoTag;