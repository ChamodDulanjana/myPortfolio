'use client';

import React from 'react'
import { useSectionInView } from '@/hook/use-section-inview';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import SubmitBtn from '@/components/submit-btn';
import { addToast } from "@heroui/toast";
import { useTheme } from '@/context/theme-context';
import { validateEmail } from '@/util/validation';

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  // Form submission handler
  const handleSubmit = async (formData: FormData) => {
  const payload = {
    name: formData.get("name")?.toString(),
    senderEmail: formData.get("senderEmail")?.toString(),
    subject: formData.get("subject")?.toString(),
    message: formData.get("message")?.toString(),
  };

  // Validate email format
  if (payload.senderEmail && !validateEmail(payload.senderEmail)) {
    addToast({
      title: "Invalid Email",
      description: "Please enter a valid email address.",
      color: "danger",
    });
    return;
  }

  await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  .then(() => {
    addToast({
      title: "Successful!",
      description: "Email sent successfully!",
      color: "success",
    });
  })
  .catch((err) => {
    addToast({
      title: "Error",
      description: err.message || "Failed to send email. Please try again.",
      color: "danger",
    });
  });
};
  
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="pt-12 sm:pt-28 px-4 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-3 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:chamodperera128@gmail.com">
          chamodperera128@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* Main form */}
      <form
        className="mt-10 flex flex-col dark:text-black gap-3"
        action={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack text-black transition-all dark:outline-none shadow-sm"
          name="name"
          type="text"
          required
          minLength={3}
          maxLength={50}
          placeholder="Your name"
          style={{
            WebkitBoxShadow: theme === 'dark' 
              ? '0 0 0 30px #95a5a6 inset' // gray
              : '0 0 0 30px white inset',
            WebkitTextFillColor: theme === 'dark' ? '#2d3436' : '#636e72',
          }}
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack text-black transition-all dark:outline-none shadow-sm"
          name="senderEmail"
          type="email"
          required
          minLength={5}
          maxLength={50}
          placeholder="Your email"
          style={{
            WebkitBoxShadow: theme === 'dark' 
              ? '0 0 0 30px #95a5a6 inset' // gray
              : '0 0 0 30px white inset',
            WebkitTextFillColor: theme === 'dark' ? '#2d3436' : '#636e72',
          }}
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack text-black transition-all dark:outline-none shadow-sm"
          name="subject"
          type="text"
          required
          minLength={3}
          maxLength={50}
          placeholder="Your subject"
          style={{
            WebkitBoxShadow: theme === 'dark' 
              ? '0 0 0 30px #95a5a6 inset' // gray
              : '0 0 0 30px white inset',
            WebkitTextFillColor: theme === 'dark' ? '#2d3436' : '#636e72',
          }}
        />
        <textarea
          className="h-52 rounded-lg borderBlack bg-white text-black dark:text-[#2d3436] dark:bg-[#95a5a6] p-4 transition-all dark:outline-none shadow-md"
          name="message"
          placeholder="Your message"
          required
          minLength={5}
          maxLength={1000}
          style={{
            WebkitBoxShadow: theme === 'dark' 
              ? '0 0 0 30px #95a5a6 inset' // gray
              : '0 0 0 30px white inset',
            WebkitTextFillColor: theme === 'dark' ? '#2d3436' : '#636e72',
          }}
        />
        <div className="self-end-safe mt-2">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  )
}

export default Contact