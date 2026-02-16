// Format price with Rs. currency
export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString()}`
}

// Calculate total from cart items
export function calculateTotal(items: Array<{ price: number; quantity: number }>): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}

// Generate random order ID
export function generateOrderId(): string {
  return `#${Math.random().toString(36).substring(2, 11).toUpperCase()}`
}

// Get current date in YYYY-MM-DD format
export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0]
}

// Simple className merger (replacement for clsx)
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Alternative: More robust className merger with object support
export function classNames(...args: any[]): string {
  const classes: string[] = []
  
  for (const arg of args) {
    if (!arg) continue
    
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg))
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames.apply(null, arg)
        if (inner) {
          classes.push(inner)
        }
      }
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key)
        }
      }
    }
  }
  
  return classes.join(' ')
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{4})(\d{7})/, '$1 $2')
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Format date to readable format
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-PK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Calculate discount percentage
export function calculateDiscount(originalPrice: number, discountedPrice: number): number {
  if (originalPrice <= 0) return 0
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100
  return Math.round(discount)
}

// Generate slug from text
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
}

// Check if string is empty
export function isEmpty(str: string | null | undefined): boolean {
  return !str || str.trim().length === 0
}

// Capitalize first letter
export function capitalize(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Format number with commas
export function formatNumber(num: number): string {
  return num.toLocaleString('en-PK')
}

// Get file extension
export function getFileExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

// Random color generator (for UI)
export function getRandomColor(): string {
  const colors = [
    'from-red-500 to-pink-500',
    'from-purple-500 to-indigo-500',
    'from-green-500 to-teal-500',
    'from-yellow-500 to-orange-500',
    'from-blue-500 to-cyan-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Parse query string
export function parseQueryString(queryString: string): Record<string, string> {
  const params = new URLSearchParams(queryString)
  const result: Record<string, string> = {}
  
  for (const [key, value] of params.entries()) {
    result[key] = value
  }
  
  return result
}

// Sleep/Delay function
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}