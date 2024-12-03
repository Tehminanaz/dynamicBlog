"use client";
import React, { useState, FormEvent } from "react";

import Link from "next/link";
import Image from "next/image";

// Defining a type for the form data
interface FormData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    
    const data: FormData = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Options for sending data
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      // const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative mx-52 "
    >
       {/* Background tech icons */}
       <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl top-1/3 left-1/4 animate-pulse" />
          <div className="absolute w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl top-1/4 right-1/3 animate-pulse" />
          <div className="absolute w-20 h-20 bg-green-500 opacity-30 rounded-full blur-2xl bottom-1/4 left-1/3 animate-pulse" />
        </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mx-auto z-50">
          <Link href="github.com">
            <Image src="/github-icon.svg" alt="Github Icon" width={50} height={50} />
          </Link>
          <Link href="linkedin.com">
            <Image src="/linkdlenicon.svg" alt="Linkedin Icon" width={50} height={50} />
          </Link>
          <Link href="Discord">
            <Image src="/discord.svg" alt="Linkedin Icon" width={45} height={45} />
          </Link>
      
          <Link href="instagram.com">
            <Image src="/instagram.svg" alt="Linkedin Icon" width={45} height={45} />
          </Link>
          <Link href="facebook.com">
            <Image src="/facebook.svg" alt="Linkedin Icon" width={45} height={45} />
          </Link>
          </div>
      </div>
      <div className="z-50">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
