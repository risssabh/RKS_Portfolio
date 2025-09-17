import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "d9030dd5-fe69-4089-a852-1f40b017610f",
        subject: "New Message from Portfolio",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Thanks for Connecting!! We'll be back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  // Auto-hide feedback after 15 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 15000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Connect Me</h2>
      <p className="contact-subheading">
        Let's get in touch, I’d love to hear from you<span className="bang">...!</span>
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn contact-btn">Send Message</button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </section>
  );
}
