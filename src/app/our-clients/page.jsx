import ClientCta from "@/components/clients/ClientCta";
import ClientList from "@/components/clients/ClientList";
import ClientsHero from "@/components/clients/ClientsHero";
import React from "react";

const page = () => {
  // Your provided data for Indian clients
  const clientData = [
    {
      company: " Larsen & Toubro Limited",
      location: "Allahabad Project",
      imgSrc: "/assets/clients/l-and-t-logo.webp",
    },
    {
      company: " Steelco Gujarat Limited",
      location: "Palaj, Gujarat",
      imgSrc: "/assets/clients/steelco-gujarat-limited.webp",
    },
    {
      company: " National Dairy Develop Board",
      location: "NDDB, Anand",
      imgSrc: "/assets/clients/national-dairy-develop-board.webp",
    },
    {
      company: " BHEL Limited",
      location: "Hyderabad",
      imgSrc: "/assets/clients/bhel-limited.webp",
    },
    {
      company: " Gas Authority of India Limited",
      location: "Waghodia, Gujarat",
      imgSrc: "/assets/clients/gail.webp",
    },
    {
      company: " Birla Copper",
      location: "Dahej",
      imgSrc: "/assets/clients/birla-copper.webp",
    },
    {
      company: " Thermax Limited",
      location: "Pune",
      imgSrc: "/assets/clients/thermax.webp",
    },
    {
      company: " HOEC Limited",
      location: "Palaj",
      imgSrc: "/assets/clients/hoec-limited.webp",
    },
    {
      company: " Baroda Dairy Co.op. Milk Limited",
      location: "Bodeli",
      imgSrc: "/assets/clients/baroda-dairy.webp",
    },
    {
      company: " Electrothem (India) Limited",
      location: "Kutch",
      imgSrc: "/assets/clients/electrotherm.webp",
    },
    {
      company: " Vihita Bio-Chem Limited",
      location: "Ankleshwar",
      imgSrc: "/assets/clients/vihi.webp",
    },
    {
      company: " Bodal Chemical Limited",
      location: "Dudhwada, Baroda",
      imgSrc: "/assets/clients/BodalLogo.webp",
    },
    {
      company: " Gujarat Alkalies & Chemicals Ltd.",
      location: "Dahej, Dist.: Bharuch",
      imgSrc: "/assets/clients/gacl.webp",
    },
    {
      company: " Welspun Limited",
      location: "Anjar",
      imgSrc: "/assets/clients/welspun.webp",
    },
    {
      company: "Aimco Pesticides Limited",
      location: "Maharashtra",
      imgSrc: "/assets/clients/AIMCO-LOGO.webp",
    },
    {
      company: "GMM Pfaudler Limited",
      location: "Anand",
      imgSrc: "/assets/clients/gmm-pfaudler-limited.webp",
    },
  ];

  // Your provided data for international clients
  const internationalClient = [
    {
      company: "M/s. Tobinco Pharmaceuticals Limited",
      location: "Accra – Ghana",
      model_fuel: "IBO–15 – LDO",
      imgSrc: "/assets/clients/tobino.webp",
    },
    {
      company: "M/s. Gulf Environmental Company L.L.C",
      location: "Abu Dhabi",
      model_fuel: "IBO–10 – Gas",
      imgSrc: "/assets/clients/gulf-env.webp",
    },
    {
      company: "M/s. VFK Head Corporation",
      location: "Seoul, Korea",
      model_fuel: "IBO–0.5 – LDO",
      imgSrc: "/assets/clients/vfk.webp",
    },
    {
      company: "M/s. Basumati Distribution Ltd.",
      location: "Bangladesh",
      model_fuel: "TC–04 – FO",
      imgSrc: "/assets/clients/basumati.webp",
    },
    {
      company: "M/s. Midland Rolling Mills Ltd",
      location: "Abeokuta, Nigeria",
      model_fuel: "IBO–1.5 – FO",
      imgSrc: "/assets/clients/mrm.webp",
    },
    {
      company: "M/s. Finepack Industries Ltd",
      location: "Accra – Ghana",
      model_fuel: "SIB–0.5 Solid",
      imgSrc: "/assets/clients/finepack.webp",
    },
  ];

  return (
    <>
      <ClientsHero />
      <ClientList clientData={clientData} heading={"Our Indian Clients"} />
      <ClientCta />
      <ClientList
        clientData={internationalClient}
        heading={"Our International Clients"}
      />
    </>
  );
};

export default page;
