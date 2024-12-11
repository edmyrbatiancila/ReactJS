export default function Contact({ img, alt, name, contact, email }) {
    return(
        <article className="contact-card">
            <img 
                src={img}
                alt={alt}
            />
            <h3>{name}</h3>
            <div className="info-group">
                <i class="fa-solid fa-phone"></i>
                <p>{contact}</p>
            </div>
            <div className="info-group">
                <i class="fa-solid fa-envelope"></i>
                <p>{email}</p>
            </div>
        </article>
    )
}