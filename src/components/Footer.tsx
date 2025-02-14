import Logo from 'src/data/core/logo.svg'
import Image from './Utils/Image'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../constants/routes'
import { useTranslation } from 'react-i18next'
import { animateScroll } from 'react-scroll'
import { ImFacebook2 } from 'react-icons/im'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdLocationPin, MdMail } from 'react-icons/md'
import contactData from '../data/contact/contact.json'
import { convertPhoneNumber } from '../lib/phone'
import { FaLine } from 'react-icons/fa6'

const Footer: React.FC = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="border-t border-white/20 bg-foreground px-5 py-20 text-white sm:px-10 md:px-20">
      <Image src={Logo} alt="logo" className="-ml-4 mb-4 w-[275px] select-none" />
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="md:w-[500px]">
          <h4 className="mb-4 text-lg">
            <MdLocationPin className="mr-1 inline-block" /> {t('home.contact.info.location')}
          </h4>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold">{t('home.contact.info.contact')}</h4>
          <div className="flex flex-col items-start gap-2">
            {contactData.email &&
              contactData.email.map((contact, i) => (
                <a
                  className="inline-flex items-center text-sm hover:text-primary-500"
                  href={`mailto:${contact}`}
                  key={i}
                >
                  <MdMail className="mr-1 inline-block size-[20px]" /> {contact}
                </a>
              ))}
            {contactData.phone &&
              contactData.phone.map((contact, i) => (
                <a
                  className="inline-flex items-center hover:text-primary-500"
                  href={`tel:${convertPhoneNumber(contact)}`}
                  key={i}
                >
                  <BsTelephoneFill className="mr-1 inline-block" /> {contact}
                </a>
              ))}
          </div>
        </div>
        <div className="mb-10">
          <h4 className="mb-4 text-lg font-bold">Link</h4>
          <div className="flex flex-col">
            <Link className="hover:text-primary-500" to={BASE_PATH} onClick={() => animateScroll.scrollToTop()}>
              {t('nav.home')}
            </Link>
            <Link className="hover:text-primary-500" to={`${BASE_PATH}#about`}>
              {t('nav.about')}
            </Link>
            <Link className="hover:text-primary-500" to={`${BASE_PATH}#service`}>
              {t('nav.service')}
            </Link>
            <Link className="hover:text-primary-500" to={`${BASE_PATH}#project`}>
              {t('nav.project')}
            </Link>
            <Link className="hover:text-primary-500" to={`${BASE_PATH}#contact`}>
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 h-px bg-gradient-to-r from-[#070707] via-[#393939] to-[#070707]" />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          {contactData.facebook &&
            contactData.facebook.map((contact: { url: string; name: string }, i) => (
              <a href={contact.url} target="_blank" rel="noreferrer" className="inline-block" key={i}>
                <ImFacebook2 className="size-[24px] opacity-50 transition-opacity duration-200 hover:opacity-100" />
              </a>
            ))}
          {contactData.line &&
            contactData.line.map((contact: { url: string; name: string }, i) => (
              <a href={contact.url} target="_blank" rel="noreferrer" className="inline-block" key={i}>
                <FaLine className="size-[24px] opacity-50 transition-opacity duration-200 hover:opacity-100" />
              </a>
            ))}
        </div>
        <div className="text-xs text-gray-500/50">© Building Advanced Solution Co., Ltd.</div>
      </div>
    </div>
  )
}

export default Footer
