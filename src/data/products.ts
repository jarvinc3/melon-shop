import type { Product } from '@/types/product.types'

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 1247,
    badge: "Sale",
    description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium sound quality",
      "Comfortable fit",
      "Quick charge technology",
    ],
    sizes: ["One Size"],
    colors: ["Black", "White", "Silver", "Blue"],
    category: "Electronics",
    inStock: true,
    sku: "WH-001",
    weight: 0.3,
    dimensions: {
      length: 20,
      width: 15,
      height: 8
    },
    tags: ["wireless", "headphones", "premium", "noise-cancelling"],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 892,
    badge: "New",
    description: "Comfortable and sustainable organic cotton t-shirt. Perfect for everyday wear with a modern fit.",
    features: [
      "100% Organic Cotton",
      "Sustainable production",
      "Modern fit",
      "Machine washable",
      "Breathable fabric"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Gray"],
    category: "Clothing",
    inStock: true,
    sku: "TS-002",
    weight: 0.2,
    dimensions: {
      length: 30,
      width: 25,
      height: 2
    },
    tags: ["organic", "cotton", "sustainable", "casual"],
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z"
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 2156,
    badge: "Best Seller",
    description: "Track your fitness goals with our advanced smart watch. Features heart rate monitoring, GPS, and water resistance.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Sleep tracking"
    ],
    sizes: ["One Size"],
    colors: ["Black", "Silver", "Rose Gold"],
    category: "Electronics",
    inStock: true,
    sku: "SW-003",
    weight: 0.05,
    dimensions: {
      length: 4,
      width: 4,
      height: 1
    },
    tags: ["smartwatch", "fitness", "health", "tracking"],
    createdAt: "2024-01-05T10:00:00Z",
    updatedAt: "2024-01-05T10:00:00Z"
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 89.99,
    originalPrice: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 634,
    badge: "Sale",
    description: "Stylish and practical leather crossbody bag. Perfect for everyday use with multiple compartments.",
    features: [
      "Genuine leather",
      "Multiple compartments",
      "Adjustable strap",
      "Water resistant",
      "Laptop compartment"
    ],
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan"],
    category: "Accessories",
    inStock: true,
    sku: "LB-004",
    weight: 0.8,
    dimensions: {
      length: 35,
      width: 15,
      height: 25
    },
    tags: ["leather", "bag", "crossbody", "practical"],
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z"
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug Set",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 445,
    description: "Beautiful ceramic coffee mug set. Perfect for your morning coffee or tea with a modern design.",
    features: [
      "Ceramic material",
      "Microwave safe",
      "Dishwasher safe",
      "Set of 4",
      "Modern design"
    ],
    sizes: ["Standard"],
    colors: ["White", "Gray", "Blue"],
    category: "Home & Kitchen",
    inStock: true,
    sku: "CM-005",
    weight: 1.2,
    dimensions: {
      length: 20,
      width: 20,
      height: 15
    },
    tags: ["ceramic", "coffee", "mug", "kitchen"],
    createdAt: "2024-01-08T10:00:00Z",
    updatedAt: "2024-01-08T10:00:00Z"
  },
  {
    id: 6,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviews: 789,
    badge: "Sale",
    description: "Portable wireless Bluetooth speaker with amazing sound quality. Perfect for outdoor activities and parties.",
    features: [
      "Bluetooth 5.0",
      "Water resistant",
      "20-hour battery",
      "360° sound",
      "Built-in microphone"
    ],
    sizes: ["One Size"],
    colors: ["Black", "Blue", "Red"],
    category: "Electronics",
    inStock: true,
    sku: "BS-006",
    weight: 0.6,
    dimensions: {
      length: 15,
      width: 15,
      height: 10
    },
    tags: ["bluetooth", "speaker", "portable", "wireless"],
    createdAt: "2024-01-14T10:00:00Z",
    updatedAt: "2024-01-14T10:00:00Z"
  },
  {
    id: 7,
    name: "Yoga Mat Premium",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 1123,
    badge: "New",
    description: "Premium yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, and fitness activities.",
    features: [
      "Non-slip surface",
      "6mm thickness",
      "Eco-friendly material",
      "Lightweight",
      "Easy to clean"
    ],
    sizes: ["Standard", "Long"],
    colors: ["Purple", "Blue", "Green", "Pink"],
    category: "Sports & Fitness",
    inStock: true,
    sku: "YM-007",
    weight: 2.5,
    dimensions: {
      length: 180,
      width: 60,
      height: 0.6
    },
    tags: ["yoga", "mat", "fitness", "premium"],
    createdAt: "2024-01-16T10:00:00Z",
    updatedAt: "2024-01-16T10:00:00Z"
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    originalPrice: 44.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 1567,
    badge: "Sale",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    features: [
      "24-hour cold retention",
      "12-hour hot retention",
      "BPA-free",
      "Leak-proof",
      "1L capacity"
    ],
    sizes: ["1L", "750ml", "500ml"],
    colors: ["Silver", "Black", "Blue", "Pink"],
    category: "Sports & Fitness",
    inStock: true,
    sku: "WB-008",
    weight: 0.4,
    dimensions: {
      length: 30,
      width: 8,
      height: 8
    },
    tags: ["water", "bottle", "insulated", "stainless"],
    createdAt: "2024-01-11T10:00:00Z",
    updatedAt: "2024-01-11T10:00:00Z"
  },
  {
    id: 9,
    name: "LED Desk Lamp",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 892,
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for work and study.",
    features: [
      "Adjustable brightness",
      "Color temperature control",
      "Touch controls",
      "USB charging port",
      "Memory function"
    ],
    sizes: ["Standard"],
    colors: ["White", "Black", "Silver"],
    category: "Home & Kitchen",
    inStock: true,
    sku: "DL-009",
    weight: 1.8,
    dimensions: {
      length: 40,
      width: 20,
      height: 60
    },
    tags: ["led", "lamp", "desk", "modern"],
    createdAt: "2024-01-13T10:00:00Z",
    updatedAt: "2024-01-13T10:00:00Z"
  },
  {
    id: 10,
    name: "Denim Jacket Classic",
    price: 89.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 678,
    badge: "Sale",
    description: "Classic denim jacket with a modern fit. Versatile and timeless piece for any wardrobe.",
    features: [
      "100% Cotton denim",
      "Classic fit",
      "Multiple pockets",
      "Machine washable",
      "Timeless design"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    category: "Clothing",
    inStock: true,
    sku: "DJ-010",
    weight: 0.7,
    dimensions: {
      length: 70,
      width: 60,
      height: 5
    },
    tags: ["denim", "jacket", "classic", "casual"],
    createdAt: "2024-01-09T10:00:00Z",
    updatedAt: "2024-01-09T10:00:00Z"
  },
  {
    id: 11,
    name: "Portable Phone Charger",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 1345,
    badge: "Best Seller",
    description: "High-capacity portable phone charger with fast charging technology. Keep your devices powered on the go.",
    features: [
      "10000mAh capacity",
      "Fast charging",
      "Multiple ports",
      "LED indicator",
      "Compact design"
    ],
    sizes: ["One Size"],
    colors: ["Black", "White", "Blue"],
    category: "Electronics",
    inStock: true,
    sku: "PC-011",
    weight: 0.3,
    dimensions: {
      length: 10,
      width: 6,
      height: 2
    },
    tags: ["charger", "portable", "phone", "power"],
    createdAt: "2024-01-07T10:00:00Z",
    updatedAt: "2024-01-07T10:00:00Z"
  },
  {
    id: 12,
    name: "Aromatherapy Diffuser",
    price: 69.99,
    originalPrice: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 567,
    badge: "Sale",
    description: "Ultrasonic aromatherapy diffuser with LED mood lighting. Create a relaxing atmosphere in your home.",
    features: [
      "Ultrasonic technology",
      "LED mood lighting",
      "Timer function",
      "Auto shut-off",
      "Large capacity"
    ],
    sizes: ["Standard"],
    colors: ["White", "Black", "Wood"],
    category: "Home & Kitchen",
    inStock: true,
    sku: "AD-012",
    weight: 0.5,
    dimensions: {
      length: 15,
      width: 15,
      height: 20
    },
    tags: ["aromatherapy", "diffuser", "relaxing", "home"],
    createdAt: "2024-01-17T10:00:00Z",
    updatedAt: "2024-01-17T10:00:00Z"
  }
]

export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => product.category === category)
}

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some((tag: string) => tag.toLowerCase().includes(lowercaseQuery))
  )
} 