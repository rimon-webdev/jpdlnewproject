import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold mb-14">
          Our Contact Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex items-center gap-5 rounded-2xl border p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white">
              <MapPin />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Our Address</h4>
              <p className="text-sm text-gray-500">
                Sayed Nagar, House- 103, Block- B, Panir Pump Road, Vatara, Dhaka-1212
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 rounded-2xl border p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white">
              <Phone />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Contact Number</h4>
              <p className="text-sm text-gray-500">
                Mobile: +880 1943-100715 <br />
                Mobile: +880 1347-348052 <br />
                Email: sales.jpdlbd.com <br />
                 Email: info.jpdlbd.com <br />
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-5 rounded-2xl border p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white">
              <Clock />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Opening Hour</h4>
              <p className="text-sm text-gray-500">
                saturday - thursday: 9:00 - 9:00 <br />
                Friday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
