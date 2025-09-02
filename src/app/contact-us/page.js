import ContactDetail from "@/components/contact/ContactDetail";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import React from "react";

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactDetail />
      <ContactForm />
    </>
  );
};

export default page;
