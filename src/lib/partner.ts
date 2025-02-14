import companies from '../data/partners/partner.json'

export const getPartners = companies.map(
  (company) => new URL(`../data/partners/images/${company.company_logo}`, import.meta.url).href,
)
