export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar?: string
  phone?: string
  dateOfBirth?: string
  createdAt: string
  updatedAt: string
}

export interface UserProfile extends User {
  addresses: Address[]
  defaultShippingAddress?: Address
  defaultBillingAddress?: Address
  preferences: UserPreferences
}

export interface Address {
  id: number
  userId: number
  type: 'shipping' | 'billing'
  firstName: string
  lastName: string
  company?: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
  isDefault: boolean
}

export interface UserPreferences {
  emailNotifications: boolean
  smsNotifications: boolean
  marketingEmails: boolean
  language: string
  currency: string
  theme: 'light' | 'dark' | 'system'
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  firstName: string
  lastName: string
} 