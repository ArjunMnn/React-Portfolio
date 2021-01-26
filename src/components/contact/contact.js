import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vugf6en",
        "template_pajl46g",
        e.target,
        "user_8VlceEirxb9yOvjL1Y8ds"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your Email is sent successfully!!");
    e.target.reset();
  }

  //   const onSubmit = (data, r) => {
  //     console.log(data);
  //     alert(`Thank you for your message from ${data.email}`);
  //     const templateId = "template_pajl46g";
  //     const serviceID = "service_vugf6en";
  //     sendFeedback(
  //       serviceID,
  //       templateId,
  //       {
  //         from_name: data.name,
  //         message: data.message,
  //         to_name: data.email,
  //       },
  //       "user_8VlceEirxb9yOvjL1Y8ds"
  //     );
  //     r.target.reset();
  //   };

  return (
    <section id="contact" className="section6">
      <div className="head-wrapper">
        <div className="heading">
          Get In Touch
          <div className="underline"></div>
        </div>

        <div className="backhead">CONTACT</div>
      </div>
      <div className="contact-content">
        <div className="contact-left-area">
          <h4>ADDRESS</h4>
          <p>3/16 Thakur Ramkrishna Apt, Telco, Jamshedpur, Jharkhand</p>
        </div>

        <form
          name="contact"
          className="contact-right-area"
          onSubmit={sendEmail}
        >
          <h4>SEND ME A NOTE</h4>
          <div>
            <div className="contact-first-input">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="name-input"
                required
              />
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                className="mail-input"
                required
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Type Something"
              className="text-input"
              required
            ></textarea>
            <p className="center">
              <button type="submit">Send Message</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
