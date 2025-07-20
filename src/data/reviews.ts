import type { Review } from '@/types/ui.types'

export const mockReviews: Review[] = [
  {
    id: 1,
    user: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    title: "Excellent Quality Products",
    content: "I'm very satisfied with my purchase. The products are high quality and arrived quickly. Will definitely shop here again!",
    helpful: 12,
    comments: 3
  },
  {
    id: 2,
    user: "Mike Chen",
    rating: 4,
    date: "2024-01-14",
    title: "Great Service",
    content: "Good experience overall. The customer service was helpful and the delivery was on time. Products met my expectations.",
    helpful: 8,
    comments: 1
  },
  {
    id: 3,
    user: "Emily Rodriguez",
    rating: 5,
    date: "2024-01-13",
    title: "Amazing Shopping Experience",
    content: "This is my third order and I couldn't be happier. The website is easy to navigate and the checkout process is smooth.",
    helpful: 15,
    comments: 5
  },
  {
    id: 4,
    user: "David Wilson",
    rating: 4,
    date: "2024-01-12",
    title: "Fast Delivery",
    content: "Impressed with the delivery speed. Products were well packaged and in perfect condition.",
    helpful: 6,
    comments: 2
  },
  {
    id: 5,
    user: "Lisa Anderson",
    rating: 5,
    date: "2024-01-11",
    title: "Outstanding Quality",
    content: "The quality of the products exceeded my expectations. Great value for money and excellent customer service.",
    helpful: 9,
    comments: 4
  }
]

export const getReviews = () => mockReviews

export const getReviewById = (id: number) => mockReviews.find(review => review.id === id) 