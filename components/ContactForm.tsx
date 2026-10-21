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
        <label htmlFor="contact-name" className="font-interface flex flex-col gap-2 text-sm font-semibold">
          Name
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            className="min-h-14 border-x-0 border-t-0 border-b border-border/50 bg-transparent px-4 py-3 text-lg font-normal outline-none transition-colors focus:border-accent"
          />
        </label>
        <label htmlFor="contact-email" className="font-interface flex flex-col gap-2 text-sm font-semibold">
          Email
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="min-h-14 border-x-0 border-t-0 border-b border-border/50 bg-transparent px-4 py-3 text-lg font-normal outline-none transition-colors focus:border-accent"
          />
        </label>
        <label htmlFor="contact-message" className="font-interface flex flex-col gap-2 text-sm font-semibold">
          Message
          <textarea
            id="contact-message"
            name="message"
            required
            className="min-h-44 border-x-0 border-t-0 border-b border-border/50 bg-transparent px-4 py-3 text-lg font-normal outline-none transition-colors focus:border-accent"
          />
        </label>
        <button type="submit" className="font-interface min-h-12 w-fit border border-border bg-border px-6 text-sm font-semibold text-inverse shadow-soft transition-colors hover:border-accent hover:bg-accent">
          Send message <span aria-hidden="true">→</span>
        </button>
      </form>
      {sent && <p className="font-interface mt-5 border-l border-accent pl-3 text-sm font-medium text-accent">Your message has been sent.</p>}
    </>
  );
}
