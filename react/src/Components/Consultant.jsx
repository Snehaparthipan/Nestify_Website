"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Consultant() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.warning("Please fill in all fields!");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your request...");

    setTimeout(() => {
      toast.update(toastId, {
        render: `Thank you ${name}! Your consultation request has been sent 🎉`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="consultation-page">
      <div className="consultation-card">

        <h1>Request a Consultation</h1>
        <p>Fill in your details and our team will contact you shortly.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="consbtn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Send Request"}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}
