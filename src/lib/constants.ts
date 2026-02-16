export const SHOP_INFO = {
  name: 'Hafiz Sajid Pets & Birds Shop',
  owner: 'Hafiz Sajid Syed Hussain',
  phone: '0308 4591993',
  email: 'sajidsyedhafizsajidsyed@gmail.com',
  address: 'Village Adlana, Teh Bhawana, Dist Chiniot',
  established: 2010
}

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/about', label: 'About', emoji: 'ℹ️' },
  { href: '/products', label: 'Products', emoji: '🐦' },
  { href: '/contact', label: 'Contact', emoji: '📞' },
  { href: '/directions', label: 'Directions', emoji: '🗺️' },
  { href: '/cart', label: 'Cart', emoji: '🛒' },
] as const

export const CATEGORIES = [
  'All',
  'Birds',
  'Cats',
  'Dogs',
  'Small Pets'
] as const

export const BUSINESS_HOURS = {
  weekdays: '9:00 AM - 8:00 PM',
  saturday: '10:00 AM - 6:00 PM',
  sunday: 'Closed'
} as const