import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d08hjwf",
        "template_tmn32r9",
        form.current,
        "RBG8RCMMnC7sD8nZL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg(true)
          setTimeout(()=>{
              setMsg(false)
          },4000)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value={"Send"} className="button" />
          <span>{msg && 'Thanks for your message'}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
