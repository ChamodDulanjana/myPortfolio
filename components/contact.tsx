'use client';

import { useSectionInView } from '@/hook/use-section-inview';
import { motion } from 'framer-motion';
import React from 'react'
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import toast from "react-hot-toast";
import { useTheme } from '@/context/theme-context';

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();
  
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="pt-28 px-4 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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

      <form
        className="mt-10 flex flex-col dark:text-black gap-3"
        action={async (formData) => {
          // const { data, error } = await sendEmail(formData);

          // if (error) {
          //   toast.error(error);
          //   return;
          // }
          //console.log("Form submitted", formData, formData.get("senderEmail"), formData.get("message"));

          toast.success("Email sent successfully!");
        }}
      >
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
          }}
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack text-black transition-all dark:outline-none shadow-sm"
          name="subject"
          type="text"
          required
          minLength={5}
          maxLength={50}
          placeholder="Your subject"
          style={{
            WebkitBoxShadow: theme === 'dark' 
              ? '0 0 0 30px #95a5a6 inset' // gray
              : '0 0 0 30px white inset',
          }}
        />
        <textarea
          className="h-52 rounded-lg borderBlack bg-white text-black dark:bg-[#95a5a6] p-4 transition-all dark:outline-none shadow-sm"
          name="message"
          placeholder="Your message"
          required
          rows={8}
        />
        <div className="self-end-safe mt-2">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  )
}

export default Contact