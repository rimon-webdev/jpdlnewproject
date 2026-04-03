import { Mail, User, Phone, PenLine } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h2 className="text-center text-2xl font-semibold mb-10">
            Get In Touch
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Your Name" icon={<User size={18} />} />
            <Input placeholder="Email Address" icon={<Mail size={18} />} />
            <Input placeholder="Phone Number" icon={<Phone size={18} />} />
            <Input placeholder="Subject" icon={<PenLine size={18} />} />

            <textarea
              placeholder="Message"
              className="md:col-span-2 h-40 rounded-xl border px-5 py-4 text-sm outline-none focus:border-red-500"
            />

            <div className="md:col-span-2 flex justify-center pt-6">
              <button
                type="submit"
                className="rounded-full bg-red-500 px-10 py-4 text-sm font-medium text-white hover:bg-red-600 transition"
              >
                Send Message Us →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ placeholder, icon }: any) {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="w-full rounded-xl border px-5 py-4 pr-12 text-sm outline-none focus:border-red-500"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
    </div>
  );
}
