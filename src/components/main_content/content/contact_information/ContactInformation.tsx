import Link from "../../../Link";

function ContactInformation() {
    return (
        <div className={ `contact-information` }>
            <p>The best way to contact me is via LinkedIn.</p>
            <p>Please message me here if you wish to get in contact.</p>
            <Link link="https://www.linkedin.com/in/randy-le-425799125/">LinkedIn</Link>
        </div>
    )
}

export default ContactInformation;