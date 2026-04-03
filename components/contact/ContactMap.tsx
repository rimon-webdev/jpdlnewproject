export default function ContactMap() {
  return (
    <section className="h-[450px] w-full">
      <iframe
        src="https://www.google.com/maps?q=Sayednagar,%20Vatara,%20Dhaka,%20Bangladesh&output=embed"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
