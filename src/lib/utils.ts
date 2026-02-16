import { type ClassValue } from 'clsx'

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString()}`
}

export function calculateTotal(items: Array<{ price: number; quantity: number }>): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}

export function generateOrderId(): string {
  return `#${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}

export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0]
}

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}