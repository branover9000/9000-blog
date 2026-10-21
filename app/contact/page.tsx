import ContactForm from "@/components/ContactForm";
import PageHeading from "@/components/PageHeading";

export const metadata = {
  title: "Contact",
  description: "Get in touch to discuss collaboration, projects, or new opportunities.",
};

export default function Contact() {
  return (
    <section className="site-width">
      <div className="grid grid-cols-1 gap-8 border-b border-border/35 py-10 md:grid-cols-12 md:gap-10 md:py-14">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4 text-accent">Contact / Get in touch</p>
          <PageHeading>Let&apos;s talk.</PageHeading>
          <p className="mt-5 max-w-md text-xl leading-relaxed">Want to get in touch? Send me a message.</p>
        </div>
        <div className="md:col-span-7 md:border-l md:border-border/35 md:pl-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
