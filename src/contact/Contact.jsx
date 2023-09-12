import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import "./contact.css";
import {
  FaFacebookMessenger,
  FaGithubSquare,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";

const Contact = () => {
  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>
          <div className="cards grid">
            <div className="card">
              <div className="instaIcon">
                <BsInstagram className="icon" />
              </div>
              <h4>Instagram</h4>
              <span className="userName">@lismanarsilo</span>
              <div>
                <a
                  href="https://www.instagram.com/lismanarsilo/"
                  className="flex"
                  target="_blank"
                >
                  Send Message
                  <TbArrowBigRightLineFilled className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div className="instaIcon">
                <FaWhatsapp className="icon" />
              </div>
              <h4>WhatsApp</h4>
              <span className="userName">@lismanarsilo</span>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=085335711347&text=Hello%20Lisman,%20can%20I%20have some%20time%20to%20talk?"
                  className="flex"
                  target="_blank"
                >
                  Send Message
                  <TbArrowBigRightLineFilled className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div className="instaIcon">
                <BsLinkedin className="icon" />
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">@LismanArsilo</span>
              <div>
                <a
                  href="https://www.linkedin.com/in/lisman-arsilo-1104a6202/"
                  className="flex"
                  target="_blank"
                >
                  Send Message
                  <TbArrowBigRightLineFilled className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div className="instaIcon">
                <FaGithubSquare className="icon" />
              </div>
              <h4>Github</h4>
              <span className="userName">@LismanArsilo</span>
              <div>
                <a
                  href="https://github.com/LismanArsilo?tab=repositories"
                  className="flex"
                  target="_blank"
                >
                  Send Message
                  <TbArrowBigRightLineFilled className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me and email</h3>

          <form action="" className="grid">
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="formBtn" type="submit" name="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
