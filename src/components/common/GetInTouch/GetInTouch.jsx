import { useNavigate } from "react-router-dom";
import CommonButton from "../CommonButton/CommonButton";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

function GetInTouch() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 md:py-20">
      <SectionWrapper>
        <div className="w-[100%]">
          <div className="flex flex-col gap-10 items-center">
            <div className="w-full lg:w-3xl flex flex-col items-center justify-center">
              <p className="text-[18px] font-bold text-primary tracking-wide mb-3">
                Get In Touch
              </p>

              <h2
                className="text-center text-3xl sm:text-4xl font-bold mb-[20px] text-gray-900"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Have questions or need assistance? we're here to help!Get in
                touch with our team for expert guidance.
              </h2>
              <CommonButton
                text="Contact Us"
                variant="primary"
                onClick={() => navigate("/contact-us")}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default GetInTouch;
