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
          className="border-2 border-black bg-[#fffdf7] px-4 py-3 text-base outline-none transition-colors placeholder:text-stone-500 focus:border-red-800"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 border-black bg-[#fffdf7] px-4 py-3 text-base outline-none transition-colors placeholder:text-stone-500 focus:border-red-800"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="min-h-40 border-2 border-black bg-[#fffdf7] px-4 py-3 text-base outline-none transition-colors placeholder:text-stone-500 focus:border-red-800"
        />
        <button type="submit" className="w-fit border-2 border-black bg-black px-6 py-3 font-cabazon text-3xl leading-none text-white transition-colors hover:border-red-800 hover:bg-red-800">
          Send Message
        </button>
      </form>
      {sent && <p className="mt-5 border-l-2 border-red-800 pl-3 text-red-800">Message sent!</p>}
    </>
  );
}
