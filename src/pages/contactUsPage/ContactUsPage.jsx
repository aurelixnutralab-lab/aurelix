// function ContactUs() {
//   return <div className="flex items-center gap-3">about nutra</div>;
// }

import { Clock, Factory, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../../components/contactForm/ContactForm";
import CommonButton from "../../components/common/CommonButton/CommonButton";

export default function ContactUs() {
  return (
    <>
      <section className="px-4 md:px-14 lg:px-24 mx-auto py-12">
        <div className="flex flex-col justify-between  w-[100%] lg:flex-row gap-12">
          <div className="w-full lg:w-[50%]">
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We’d love to hear from you
            </h1>

            <p className="text-gray-600 mb-8  ">
              Have questions about our herbal ingredients or wellness solutions?
              Reach out and our team will get back to you shortly.
            </p>

            {/* Contact Details */}
            {/* <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-800 font-medium">
                  Aurelix Nutra Labs <br /> FF-10, SEVENTH PARISUR, <br />
                  Shree Vishnudhara Gardens, Gota - Jagatpur Rd, <br /> Gota,
                  Ahmedabad, Gujarat 382481
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a
                  href="tel:+919274799430"
                  className="text-gray-800 font-medium hover:text-primary hover:underline"
                >
                  +91 92747 99430
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:info@aurelixnutralab.com"
                  className="text-gray-800 font-medium hover:text-primary hover:underline"
                >
                  info@aurelixnutralab.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Business Hours</p>
                <p className="text-gray-800 font-medium">
                  Mon – Sat: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div> */}
            <div className="space-y-6">
              {/* Address */}

              <div className="flex flex-col gap-3 items-start">
                <div className="flex gap-3 items-start">
                  <MapPin size={22} className="text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-800 font-medium">
                      Aurelix Nutra Labs <br />
                      FF-10, SEVENTH PARISUR, <br />
                      Shree Vishnudhara Gardens, Gota - Jagatpur Rd, <br />
                      Gota, Ahmedabad, Gujarat 382481
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Factory size={22} className="text-primary mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Manufacturing Unit</p>
                    <p className="text-gray-800 font-medium">
                      7 Devashray Arcade and Industrial Estate,
                      <br /> Near Hathijan (Lal Gebi) Circle, <br />
                      Sardar Patel Ring Rd,
                      <br /> Hathijan, Ahmedabad, Gujarat 382445
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-start">
                <Phone size={22} className="text-primary mt-1" />
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:+919274799430"
                    className="text-gray-800 font-medium hover:text-primary hover:underline"
                  >
                    +91 92747 99430
                  </a>
                  <a
                    href="tel:+917490099430"
                    className="text-gray-800 font-medium hover:text-primary hover:underline"
                  >
                    +91 74900 99430
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <Mail size={22} className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:info@aurelixnutralab.com"
                    className="text-gray-800 font-medium hover:text-primary hover:underline"
                  >
                    info@aurelixnutralab.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-3 items-start">
                <Clock size={22} className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="text-gray-800 font-medium">
                    Mon – Sat: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* <div>
                <a
                  href={window.location.origin + "/broucher.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CommonButton
                    text="Checkout Products Broucher"
                    variant="primary"
                  ></CommonButton>
                </a>
              </div> */}
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex justify-end">
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="iframeContainer">
        <iframe
          style={{ border: "none" }}
          height="333"
          width="100%"
          allowFullscreen={true}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7263292366656!2d72.5414292!3d23.107111999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83eb3ef9d265%3A0xa3a9c16e1154a65f!2sAurelix%20Nutra%20Labs!5e0!3m2!1sen!2sin!4v1770132118354!5m2!1sen!2sin"
        ></iframe>
      </div>
    </>
  );
}
