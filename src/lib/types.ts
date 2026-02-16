export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description?: string
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'delivered' | 'cancelled'
  date: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  totalOrders: number
  totalSpent: number
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}