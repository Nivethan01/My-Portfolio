import React from "react";
import "./Contact.css";
import ContactIcon from "../../assets/contact.png";
import Mail from "../../assets/email.png";
import Location from "../../assets/location.png";
import LinkedIn from "../../assets/linkedin.png";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3e2decdd-98d3-4205-8ccc-577b572d1455");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>
            I'm currently open to taking on new projects, so feel free to ask
            and contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={ContactIcon} alt="Contact Icon" />
              <p>9042744118</p>
            </div>
            <div className="contact-detail">
              <img src={Mail} alt="Mail Icon" />
              <div>
                <p>nivethaneswaran@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="Location Icon" />
              <p>Tamil Nadu, India</p>
            </div>
            <div className="contact-detail">
              <a
                href="https://www.linkedin.com/in/nivethan-eswaran/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn Icon" />
              </a>
              <p>Nivethan Eswaran</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <textarea name="message" rows="8" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
