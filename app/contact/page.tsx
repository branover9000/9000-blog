import { sendMessage } from "./actions";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="font-cabazon text-5xl text-red-800">Contact</h1>
      <p className="mt-4">Want to get in touch? Send me a message.</p>
      <form action={sendMessage} className="mt-8 flex flex-col gap-4">
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
    </section>
  );
}
