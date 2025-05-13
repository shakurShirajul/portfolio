import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_onfgevf", "template_v52n1mm", form.current, {
        publicKey: "FRmDGv2whQUrNjE66",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contacts">
      <SectionTitle title={"GET IN TOUCH"} />
      <div className="mx-5 rounded-2xl md:mx-0 border border-black p-5 flex flex-col md:flex-row">
        {/* First Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold">Contact Information</h1>
          <div>
            <div className="flex items-center gap-2">
              <div>
                <MdEmail className="text-2xl" />
              </div>
              <div>
                <h1>Email:</h1>
                <h1>siirajulisllam@gmail.com</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <h1>Phone:</h1>
                <h1>+8801747493837</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaLocationDot className="text-2xl" />
              </div>
              <div>
                <h1>Location:</h1>
                <h1>Bangladesh</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <form ref={form} onSubmit={sendEmail} className="flex-1 ">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Send Me a Message</h1>
            <div className="space-y-4">
              <div className="space-y-1">
                <h6>Your Name</h6>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1">
                <h6>Your Email</h6>
                <input
                  type="email"
                  name="user_email"
                  className="input w-full"
                  placeholder="example@email.com"
                />
              </div>
              <div className="space-y-1">
                <h6>Your Message</h6>
                <textarea
                  name="message"
                  id=""
                  placeholder="What would you like to say?"
                  className="textarea w-full"
                ></textarea>
              </div>
              <div>
                <button className="btn w-full">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
