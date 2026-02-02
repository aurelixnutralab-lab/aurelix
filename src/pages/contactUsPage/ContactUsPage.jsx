// function ContactUs() {
//   return <div className="flex items-center gap-3">about nutra</div>;
// }

import CommonButton from "../../components/common/CommonButton/CommonButton";
import ContactForm from "../../components/contactForm/ContactForm";

// export default ContactUs;

export default function ContactUs() {
  return (
    <section className="px-4 md:px-14 lg:px-24 mx-auto py-12">
      <div className="flex flex-col justify-between  w-[100%] lg:flex-row gap-12">
        <div className="w-full lg:w-[50%]">
          {/* <p className="text-primary font-semibold mb-3">Contact Us</p> */}

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
          <div className="space-y-6">
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
              <p className="text-gray-800 font-medium">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-800 font-medium">
                info@aurelixnutralab.com
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Business Hours</p>
              <p className="text-gray-800 font-medium">
                Mon – Sat: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex justify-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
