import ContactForm from "@/components/ContactForm";
import PageHeading from "@/components/PageHeading";

export const metadata = {
  title: "Contact",
  description: "Get in touch to discuss collaboration, projects, or new opportunities.",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid grid-cols-12 border-t border-border pt-10 lg:pt-16">
        <div className="col-span-12 lg:col-span-5 lg:pr-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Correspondence</p>
          <PageHeading className="mt-6">Let&apos;s talk.</PageHeading>
          <p className="mt-8 max-w-md text-2xl leading-relaxed">Want to get in touch? Send me a message.</p>
        </div>
        <div className="col-span-12 mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
