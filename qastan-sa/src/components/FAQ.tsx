// Contact pagina
import { useTranslation } from "react-i18next";
import Accordions from "./Accordion";
import React from 'react'

function FAQ() {
  const { t } = useTranslation();
  return (
    <>
    <section className="mx-auto my-20 container relative">
        <div className="text-center max-w-[600px] mx-auto w-full mb-12">
          <h1 className="text-2xl text-center md:text-3xl font-bold mb-5">
          {t('Contact.FAQ.Title')}
          </h1>
          <p className="text-md font-normal lg:text-base text-balance">
          {t('Contact.FAQ.Subtitle')}
          </p>
        </div>
        <Accordions backgroundColor="bg-orange-100"/>
    </section>
    </>
  )
}

export default FAQ
