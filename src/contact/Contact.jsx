import React, { useRef } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { FaGithubSquare, FaWhatsapp } from "react-icons/fa";
import "./contact.css";

// Email js
import emailjs from "emailjs-com";
// Alert Sweet
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fgq0q4o",
      "template_3amwea7",
      form.current,
      "ApTYVx2AQP68ff3Zy"
    );
    e.target.reset();
    alertSuccess();
  };

  const alertSuccess = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      customClass: {
        // Tambahkan kelas CSS kustom yang Anda buat di sini
        title: "swal-toast-title", // Nama kelas untuk judul alert
      },
    });

    Toast.fire({
      icon: "success",
      title: "Your Send Message Successfully",
    });
  };

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
                  href="https://api.whatsapp.com/send?phone=+6285212357622&text=Hello%20Lisman,%20can%20I%20have%20some%20time%20to%20talk?"
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
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail} className="grid">
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <input
              name="email"
              type="text"
              placeholder="Enter Your Email"
              required
            />
            <textarea
              required
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
