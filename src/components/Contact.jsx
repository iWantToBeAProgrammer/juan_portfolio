import Divider from "./common/Divider";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_nb4k32a",
        "template_d53uevq",
        form.current,
        {
          publicKey: "tO1o9G8YT9L0S5UKC",
        }
      );

      setIsSent(true);
      const timeoutId = setTimeout(() => {
        setIsSent(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      setIsError(true);
      const timeoutId = setTimeout(() => {
        setIsError(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex items-center flex-col mt-48 rounded-xl sm:px-0 px-4"
    >
      <div
        className={`toast toast-center ${
          isSent || isError ? "flex" : "hidden"
        }`}
      >
        <div className={`alert alert-success ${isError && "alert-error"}`}>
          <span>Message sent successfully.</span>
        </div>
      </div>
      <h1 className="text-2xl sm:text-5xl text-white font-semibold text-center">
        Let's Have a Chat
      </h1>
      <Divider />
      <p className="sm:text-md text-sm sm:px-0 px-16 text-center text-base-content mt-4 font-josefin font-semibold">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-base-200 border-white/30 rounded-xl border px-8 py-12 w-full sm:w-1/2 mx-auto flex flex-col mt-12 shadow-xl"
      >
        <div className="flex flex-col">
          <label className="label text-sm">Your Name</label>
          <input
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            required
            type="text"
            className="input max-w-none w-full input-lg validator"
            name="user_name"
            placeholder="Enter Your Name"
          />
        </div>
        <p className="validator-hint">
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </p>

        <div className="flex flex-col">
          <label className="label text-sm mt-2">Email Address</label>
          <input
            required
            type="email"
            className="input max-w-none w-full input-lg validator"
            name="user_email"
            placeholder="Enter Your Email"
          />
          <div className="validator-hint">Enter valid email address</div>
        </div>
        <div className="flex flex-col">
          <label className="label text-sm mt-2">Message</label>
          <textarea
            required
            className="textarea max-w-none w-full textarea-lg validator"
            placeholder="Enter Your Message..."
            minlength="3"
            name="message"
          ></textarea>
          <div className="validator-hint">Must be at least 3 characters</div>
        </div>
        <button
          type="submit"
          className="btn bg-gradient-to-r from-primary to-accent text-base-100 rounded-xl text-xl h-12"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
