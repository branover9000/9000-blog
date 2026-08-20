import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch to discuss collaboration, projects, or new opportunities.",
};

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-5xl px-12 py-20">
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-16 border-t-2 border-black pt-10">
        <div>
          <h1 className="font-cabazon text-7xl leading-none text-red-800">Contact</h1>
          <p className="mt-5 max-w-sm text-xl leading-relaxed">Want to get in touch? Send me a message.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
