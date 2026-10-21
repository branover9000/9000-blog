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
          className="border border-border bg-surface px-5 py-4 text-lg placeholder:text-muted focus:border-accent"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-border bg-surface px-5 py-4 text-lg placeholder:text-muted focus:border-accent"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="min-h-48 border border-border bg-surface px-5 py-4 text-lg placeholder:text-muted focus:border-accent"
        />
        <button type="submit" className="w-fit border border-border bg-border px-7 py-4 font-display text-4xl leading-none text-inverse hover:-translate-y-0.5 hover:border-accent hover:bg-accent">
          Send message →
        </button>
      </form>
      {sent && <p className="mt-5 border-l-2 border-accent pl-3 text-lg text-accent">Message sent!</p>}
    </>
  );
}
