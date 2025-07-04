import { useState } from "react";
import './ContactForm.css'
import Swal from "sweetalert2"
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting] = useState(false);

  const [errors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const validate = () => {
  //   const newErrors = { name: "", email: "", subject: "", message: "" };

  //   if (!name) {
  //     newErrors.name = "Required";
  //   } else if (name.length > 25) {
  //     newErrors.name = "Must be 25 characters or less";
  //   }

  //   if (!email) {
  //     newErrors.email = "Required";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     newErrors.email = "Invalid email address";
  //   }

  //   if (!subject) {
  //     newErrors.subject = "Required";
  //   } else if (subject.length > 255) {
  //     newErrors.subject = "Must be 255 characters or less";
  //   }

  //   if (!message) {
  //     newErrors.message = "Required";
  //   } else if (message.length < 10) {
  //     newErrors.message = "Must be at least 10 characters";
  //   }

  //   setErrors(newErrors);

  //   // Return true if no errors
  //   return !Object.values(newErrors).some((error) => error);
  // };
  const onSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "08f4906d-05f7-4ca2-a14a-76f17ef5cdae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title : "Success",
        text : "Message sent successfully",
        icon: "success",
      })
    }
  };



  return (
    <div className="contact-form-component">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="Name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="email"
          name="email"
          id="Email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="text"
          name="subject"
          id="Subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        {errors.subject && <div className="error">{errors.subject}</div>}

        <textarea
          placeholder="Message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        {errors.message && <div className="error">{errors.message}</div>}

        <button
          type="submit"
          className="rounded-3 w-50 mx-auto d-block"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
