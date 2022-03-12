import { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { SiVodafone } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pdgbg1f",
      "template_x31qfck",
      form.current,
      "d1-AVEKbcrzWvoXCD"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lefvlac@gmail.com</h5>
            <a href="mailto:lefvlac@gmail.com" target="_blank" rel="noopener">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Lefteris Vlachos</h5>
            <a
              href="https://www.facebook.com/lefteris.amc"
              target="_blank"
              rel="noopener"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiVodafone className="contact__option-icon" />
            <h4>Vodafone</h4>
            <h5>+3012345</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+3012345"
              rel="noopener"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placehodler="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
