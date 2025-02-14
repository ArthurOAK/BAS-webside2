export function calculateYears() {
  const startDate = new Date(2011, 8, 21)
  const endDate = new Date()

  const timeDifference = endDate.getTime() - startDate.getTime()
  const yearsDifference = timeDifference / (1000 * 3600 * 24 * 365.25)

  return yearsDifference
}
