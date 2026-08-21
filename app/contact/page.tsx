import ContactForm from "@/components/ContactForm";
import PageHeading from "@/components/PageHeading";

export const metadata = {
  title: "Contact",
  description: "Get in touch to discuss collaboration, projects, or new opportunities.",
};

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-5xl px-12 py-20 max-md:px-6 max-md:py-12">
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-16 border-t-2 border-border pt-10 max-md:grid-cols-1 max-md:gap-8">
        <div>
          <PageHeading>Contact</PageHeading>
          <p className="mt-5 max-w-sm text-xl leading-relaxed max-md:text-base">Want to get in touch? Send me a message.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
