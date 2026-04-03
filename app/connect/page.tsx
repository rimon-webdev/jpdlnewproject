import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url(/images/contact.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">Contact</h1>
          <p className="text-sm text-white/80"></p>
        </div>
      </section>

      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
}
