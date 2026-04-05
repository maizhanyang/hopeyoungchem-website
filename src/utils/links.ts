export function buildPhoneHref(number: string): string {
  return `tel:${number.replace(/[^\d+]/g, '')}`
}

export function buildMailtoHref(email: string): string {
  return `mailto:${email}`
}
