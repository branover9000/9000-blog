import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch to discuss collaboration, projects, or new opportunities.",
};

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="font-cabazon text-5xl text-red-800">Contact</h1>
      <p className="mt-4">Want to get in touch? Send me a message.</p>
      <ContactForm />
    </section>
  );
}
