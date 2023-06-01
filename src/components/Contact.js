import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import TickCircle from "../assets/icons/tick-circle.svg";

const Contact = () => {
  const [submitText, setSubmitText] = useState("Send Message");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    setSubmitText("Sending...");

    console.log(data);

    emailjs
      .sendForm(
        "service_8pae6yd",
        "template_6v5u1oo",
        form.current,
        "tctXy7Oujf7pOJgzc"
      )
      .then(
        (result) => {
          console.log(result.text);

          setSuccess(true);

          setSubmitText("Send Message");
        },
        (error) => {
          console.log(error.text);

          setSuccess(false);
          setSubmitText("Send Message");
        }
      );
  };

  return (
    <section className="contact md:flex-row items-center" id="contact">
        <div className="md:pl-10">
          <h1>Contact Me</h1>
          <h2>Email</h2>
          <p>
            <a href="mailto:makalamin012@gmail.com"> makalamin012@gmail.com </a>{" "}
            <br />
          </p>
          <br />
          <h2>Phone / WhatsApp</h2>
          <p>
            <a href="tel:+8801739530410"> +880 17 39 53 04 10 </a>
          </p>
          <br />

          <p>Or, </p>

          <br />

          <p>
            <a href="skype:live:makalamin012?chat"> Get me on Skype</a>
          </p>
        </div>

        {success ? (
          <p className="mt-10 text-center text-[#06B76A] font-semibold"> <img src={TickCircle} alt="success" className="w-12 mx-auto mb-2" /> Your message has been sent. Thank you for reaching out to me. I'll be in touch with you soon! </p>
        ) : (
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mb-3 mt-5 text-2xl font-bold">Send a message</h3>

            <div>
              <label htmlFor="your_name">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("your_name", { required: true })}
                className="form-control"
              />
              {errors.your_name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            <div>
              <label htmlFor="your_email">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("your_email", { required: true })}
                className="form-control"
              />
              {errors.your_email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div>
              <label htmlFor="your_message">Your Message</label>
              <textarea
                {...register("your_message")}
                className="form-control"
              ></textarea>
            </div>

            <input
              type="submit"
              value={submitText}
              className="button-primary"
            />
          </form>
        )}
    </section>
  );
};

export default Contact;
