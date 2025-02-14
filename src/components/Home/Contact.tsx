import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { MdMail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import contactData from '../../data/contact/contact.json'
import { convertPhoneNumber } from '../../lib/phone'
import { FaLine } from 'react-icons/fa6'

const Contact: React.FC = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="bg-[url('data/core/contact-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-b from-background from-5% to-white/10 to-[175%] p-4 pt-10 backdrop-blur sm:p-20 md:text-left">
        <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
          <h1 className="text-3xl font-semibold">{t('home.contact.title')}</h1>
          <ul className="hidden list-inside gap-2 text-xs sm:flex lg:text-base">
            <li>
              <FaCheckCircle className="mr-2 inline" />
              {t('home.contact.list.1')}
            </li>
            <li>
              <FaCheckCircle className="mr-2 inline" />
              {t('home.contact.list.2')}
            </li>
            <li>
              <FaCheckCircle className="mr-2 inline" />
              {t('home.contact.list.3')}
            </li>
            <li>
              <FaCheckCircle className="mr-2 inline" />
              {t('home.contact.list.4')}
            </li>
          </ul>
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <iframe
              src={contactData.map}
              className="min-h-[600px] w-full rounded-lg border border-white/20 shadow-lg"
              loading="lazy"
              title="BAS location"
            ></iframe>
            <div className="flex flex-col gap-2 rounded-lg border border-white/20 bg-primary-600/75 p-7 text-left shadow-lg backdrop-blur-lg lg:p-6">
              <h1 className="text-2xl font-semibold">{t('home.contact.info.title')}</h1>
              <div className="my-2">
                <h2 className="text-lg font-semibold">{t('home.contact.info.company')}</h2>
                <p className="text-md mt-1 font-light leading-5">{t('home.contact.info.location')}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">{t('home.contact.info.contact')}</h2>
                <div className="text-md mt-1 flex flex-col items-start gap-1 font-light">
                  {contactData.phone &&
                    contactData.phone.map((contact, i) => (
                      <a
                        href={`tel:${convertPhoneNumber(contact)}`}
                        key={i}
                        className="inline-flex items-center font-light"
                      >
                        <BsTelephoneFill className="mr-1 inline-block" /> {contact}
                      </a>
                    ))}
                  {contactData.facebook &&
                    contactData.facebook.map((contact: { url: string; name: string }, i) => (
                      <a className="inline-flex items-center font-light" href={contact.url} key={i}>
                        <ImFacebook2 className="mr-1 inline-block" /> {contact.name}
                      </a>
                    ))}
                  {contactData.email &&
                    contactData.email.map((contact, i) => (
                      <a className="inline-flex items-center font-light" href={`mailto:${contact}`} key={i}>
                        <MdMail className="mr-1 inline-block size-[18px]" /> {contact}
                      </a>
                    ))}
                  {contactData.line &&
                    contactData.line.map((contact: { url: string; name: string }, i) => (
                      <a className="inline-flex items-center font-light" href={contact.url} key={i}>
                        <FaLine className="mr-1 inline-block" /> {contact.name}
                      </a>
                    ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{t('home.contact.info.open.title')}</h2>
                <p className="mt-1 font-light leading-5">{t('home.contact.info.open.day')}</p>
                <p className="font-light">{t('home.contact.info.open.time')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
