import React from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import myImage from './img/logoQastanBlackXtraLarge.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
      <footer className="bg-[#eff6fa]">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="/" className="flex items-center">
                        <img src={myImage} className="h-32 me-3" alt="Qastan Logo" />
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{t("Home.Footer.Title")}</h2>
                        <ul className="text-gray-800 font-medium">
                            <li className="mb-4">
                                <a href="/Boekhouders" className="hover:text-legoOrange transistion duration-300">{t("Home.Footer.Boekhouders")}</a>
                            </li>
                            <li className="mb-4">
                                <a href="/Ondernemers" className="hover:text-legoOrange transistion duration-300">{t("Home.Footer.Ondernemers")}</a>
                            </li>
                            <li className="mb-4">
                                <a href="/Contact" className="hover:text-legoOrange transistion duration-300">{t("Home.Footer.Contact")}</a>
                            </li>
                            <li className="mb-4">
                                <a href="/Blog" className="hover:text-legoOrange transistion duration-300">{t("Home.Footer.Blog")}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Qastan</h2>
                        <ul className="text-gray-800 font-medium">
                        <li className="mb-4">
                          <a href="tel:051310744" className="hover:cursor-pointer hover:text-legoOrange transistion duration-300">+32 (0)51 31 07 44</a>
                        </li>
                        <li className="mb-4">
                          <a href="mailto:info@qatsan.be" className="hover:cursor-pointer hover:text-legoOrange transistion duration-300">info@qatsan.be</a>
                        </li>
                        <li className="mb-4">
                          <a href="https://www.google.com/maps/place/Brugsesteenweg+48,+8520+Kuurne/@50.847052,3.2699317,17z/data=!3m1!4b1!4m5!3m4!1s0x47c33baca934db0d:0xcabd55e1f44a7f39!8m2!3d50.847052!4d3.2699317?sa=X&ved=2ahUKEwjXhPCJwP77AhW5gP0HHUyTCoUQ8gF6BAgSEAE&coh=164777&entry=tt&shorturl=1" target='_blank' className="hover:cursor-pointer hover:text-legoOrange transistion duration-300">Brugsesteenweg 48,<br/> 8520 Kuurne</a>
                        </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Privacy</h2>
                        <ul className="text-gray-800 font-medium">
                            <li className="mb-4">
                                <a href="/Cookies&Privacy" className="hover:text-legoOrange transistion duration-300">Cookies & Privacy</a>
                            </li>
                            <li className="mb-4">
                                <a href="/AlgemeneVoorwaarden" className="hover:text-legoOrange transistion duration-300">{t("Home.Footer.Voorwaarden")}</a>
                            </li>
                            <li className="mb-4">
                                BTW BE0464 798 554
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-800 sm:text-center">© 2024 <a href="https://www.qastan.be/" className="hover:text-legoOrange transistion duration-300">Qastan</a>. 
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">          
                    <a href='https://www.facebook.com/QastanIT?locale=nl_NL' target='_blank' className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                      </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href='https://www.instagram.com/qastan_it/' target='_blank' className="text-gray-800 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href='https://www.linkedin.com/company/qastan-it/' target='_blank' className="text-gray-800 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                        <span className="sr-only">LinkedIn page</span>
                    </a>
                </div>
            </div>
          </div>
      </footer>
  )
}

export default Footer
