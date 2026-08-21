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
      <form action={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-2 border-border bg-surface px-4 py-3 text-base outline-none transition-colors placeholder:text-stone-500 focus:border-accent max-md:px-3 max-md:py-2 max-md:text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 border-border bg-surface px-4 py-3 text-base outline-none transition-colors placeholder:text-stone-500 focus:border-accent max-md:px-3 max-md:py-2 max-md:text-sm"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="min-h-40 border-2 border-border bg-surface px-4 py-3 text-base outline-none transition-colors placeholder:text-stone-500 focus:border-accent max-md:min-h-32 max-md:px-3 max-md:py-2 max-md:text-sm"
        />
        <button type="submit" className="w-fit border-2 border-border bg-border px-6 py-3 font-display text-3xl leading-none text-inverse transition-colors hover:border-accent hover:bg-accent max-md:px-4 max-md:py-2 max-md:text-xl">
          Send Message
        </button>
      </form>
      {sent && <p className="mt-5 border-l-2 border-accent pl-3 text-accent">Message sent!</p>}
    </>
  );
}
