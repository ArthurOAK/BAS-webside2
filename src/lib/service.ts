import services from '../data/services/service.json'

export const getServiceImage = (title: string) => {
  const service = services.find((service) => service.title === title)?.image
  const url = new URL(`../data/services/images/${service}`, import.meta.url).href
  return url
}
