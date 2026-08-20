"use client";
import { sendMessage } from "@/app/contact/actions";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  async function handleSubmit(formData: FormData) {
    await sendMessage(formData);
    setSent(true);
  }

  return (
    <>
      <form action={handleSubmit} className="mt-8 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border p-3 min-h-32"
        />
        <button type="submit" className="border px-4 py-2">
          Send Message
        </button>
      </form>
      {sent && <p>Message sent!</p>}
    </>
  );
}
