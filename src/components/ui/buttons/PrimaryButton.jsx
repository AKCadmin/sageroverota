import Link from "next/link";

const PrimaryButton = ({
    title,
    icon,
    link,
    onClick,
    type
}) => {
    if (link) {
        return (
            <Link href={link} className="button-primary">
                {title}
            </Link>
        );
    } else {
        return (
            <button type={type} onClick={onClick} className="button-primary">
                {title}
            </button>
        );
    }
};

export default PrimaryButton;
