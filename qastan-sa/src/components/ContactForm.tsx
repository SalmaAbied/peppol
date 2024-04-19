import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [tel, setTel] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (formSubmitted) {
      setEmailValid(event.target.checkValidity());
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (emailValid && subject && message) {
      console.log('Formulier verzonden:', { email, subject, message });
    } else {
      alert('Vul alle verplichte velden correct in.');
    }
  };

  return (
    <>
      <section className="container mx-auto my-20">
        <div className="container mx-auto px-4">
          <div className="section-header mb-20 text-center">
            <h2 className=" text-4xl md:text-5xl font-bold text-center">{t('Contact.Title')}</h2>
            <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoLime block mt-4 mb-6" />

            <p className="text-center  lg:text-lg max-w-3xl mx-auto mb-10">
              {t('Contact.Subtitle')}
            </p>
          </div>
          <div className="container mx-auto justify-center w-full md:w-3/4 flex flex-col rounded-lg rounded-t-md border-t-4 border-legoOrange bg-white p-7 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 p-5">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">{t('Contact.Email')}</label>
                <input
                  type="email"
                  id="email"
                  className={`shadow-sm bg-white border text-sm rounded-lg focus:ring-${emailValid ? 'primary' : 'red'}-500 focus:border-${emailValid ? 'primary' : 'red'}-500 block w-full p-3`}
                  placeholder={t('Contact.PlaceholderEmail')}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {formSubmitted && !emailValid && <p className="text-red-500 text-sm">{t('Contact.InvalidEmail')}</p>}
              </div>
              <div>
                <label htmlFor="company" className="block mb-1 text-sm font-medium text-gray-900">{t('Contact.Bedrijfsnaam')}</label>
                <input
                  type="text"
                  id="company"
                  className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder={t('Contact.PlaceholderBedrijfsnaam')}
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="tel" className="block mb-1 text-sm font-medium text-gray-900">{t('Contact.Telefoonnummer')}</label>
                <input
                  type="tel"
                  id="tel"
                  className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder={t('Contact.PlaceholderTelefoonnummer')}
                  value={tel}
                  onChange={(event) => setTel(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900">{t('Contact.Onderwerp')}</label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder={t('Contact.PlaceholderOnderwerp')}
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900">{t('Contact.Bericht')}</label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder={t('Contact.PlaceholderBericht')}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  maxLength={500} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="mb-3 md:mt-0 mt-2 font-bold md:mr-0 mr-2 bg-legoOrange px-5 py-3 text-sm text-white hover:text-white hover:bg-legoOrange">{t('Contact.Button')}</button>
              {formSubmitted && <p className="text-green-500 text-sm">{t('Contact.FormSubmitted')}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
