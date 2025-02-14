export function convertPhoneNumber(phone: string): string {
  const cleanedPhone = phone.replace(/[-\s]/g, '')
  if (cleanedPhone.startsWith('0')) {
    return `+66${cleanedPhone.slice(1)}`
  }
  return cleanedPhone
}
