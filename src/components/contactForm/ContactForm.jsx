import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";

function ContactForm() {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be under 50 characters")
      .required("Name is required"),

    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),

    subject: Yup.string()
      .trim()
      .min(1, "Subject is required")
      .max(100, "Subject must be under 100 characters")
      .required("Subject is required"),

    message: Yup.string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(1000, "Message must be under 1000 characters")
      .required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);

      const response = await axios.post(
        "https://api.aurelixnutralab.com/api/contact",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      toast.success(response.data?.success || "Message sent successfully");
      resetForm();
    } catch (error) {
      console.error("Contact API Error:", error);

      toast.error(
        error.response?.data?.error ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="border border-[#E5E7EB] bg-white rounded-lg p-4 sm:p-8 w-full md:max-w-none lg:max-w-md">
      <h2
        className="text-3xl font-bold text-gray-800 mb-2"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Get In Touch
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        We read every message carefully
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
            {/* Name, Email, Subject in a row for tablet only, stacked on mobile and desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className={`w-full bg-[#F8F8F8] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
                    errors.name && touched.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:ring-blue-500"
                  }`}
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email{" "}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className={`w-full bg-[#F8F8F8] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:ring-blue-500"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Your Subject"
                  className={`w-full px-4 bg-[#F8F8F8] py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
                    errors.subject && touched.subject
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:ring-blue-500"
                  }`}
                />
                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            {/* Message Field - Full Width */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter Your Message"
                rows="4"
                className={`w-full bg-[#F8F8F8] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition resize-none ${
                  errors.message && touched.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:ring-blue-500"
                }`}
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-primary text-[#FFFFFF] py-3 rounded-md font-medium hover:bg-primary-light hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "sending" : "send message"}
            </button>
          </Form>
        )}
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default ContactForm;
