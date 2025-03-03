import { cn } from "lib/utils";
import React, { forwardRef, useState } from "react";
import ContactIcons from "./ContactIcons";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

interface contactProps {
  className?: string;
}

const Contact = forwardRef<HTMLDivElement, contactProps>(
  ({ className }, ref) => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      setForm({ name: "", email: "", message: "" });
      //below is a public key so it's fine
      formData.append("access_key", "03c13abd-95f8-4f30-ba8d-db8e8c0cb6e4");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        Swal.fire({
          title: "Thank you for reaching out",
          text: "Message sent",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Thank you for trying reaching out",
          text: "Fail to send the message",
          icon: "error",
        });
      }
    }

    return (
      <div
        id="contact"
        ref={ref}
        className={cn(
          ` h-screen w-screen flex justify-center flex-col items-center pt-[25vh]`,
          className
        )}
      >
        <div className="w-[15rem]">
          <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
            <h3 className="text-center font-light text-sm">
              Send me a message
            </h3>
            <input
              required
              className="p-[.5rem] rounded-lg"
              type="text"
              name="Name"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            ></input>
            <input
              required
              className=" p-[.5rem] rounded-lg"
              type="email"
              name="Email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            ></input>
            <textarea
              required
              className=" p-[.5rem] rounded-lg resize-none"
              name="message"
              placeholder="Message"
              rows={3}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
            ></textarea>
            <button className=" flex justify-center items-center p-[.5rem] rounded-lg text-[#475C6C] bg-[#F7EFD2] hover:bg-[#f8dd7a] cursor-pointer">
              <Send />
            </button>
          </form>
          <ContactIcons />
        </div>
      </div>
    );
  }
);

Contact.displayName = "Contact";
export default Contact;
