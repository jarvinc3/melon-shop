import { NavLayout } from "@/components/layout/NavLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Star, ThumbsUp } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
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
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <NavLayout title="Reviews">
      <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-start px-4 pt-20">
        <div className="w-full max-w-4xl">
          {/* Header Stats */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl font-bold">4.8</div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-muted-foreground">Based on 1,247 reviews</div>
              </div>
            </div>
            <Button className="w-full md:w-auto">Write a Review</Button>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-primary border-border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">by {review.user}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary mb-4">{review.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Reply ({review.comments})
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </NavLayout>
  );
} 