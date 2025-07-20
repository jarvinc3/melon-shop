import { NavLayout } from "@/components/layout/NavLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReviewsWrapper } from "@/components/ui/data-wrapper";
import { useReviews } from "@/hooks";
import { MessageCircle, Star, ThumbsUp } from "lucide-react";

export default function ReviewsPage() {
  const { data: reviews, isLoading, isError } = useReviews();

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
                <div className="text-sm text-muted-foreground">Based on {reviews?.length || 0} reviews</div>
              </div>
            </div>
            <Button className="w-full md:w-auto">Write a Review</Button>
          </div>

          {/* Reviews List */}
          <ReviewsWrapper data={reviews} isLoading={isLoading} isError={isError}>
            <div className="space-y-6">
              {reviews?.map((review) => (
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
          </ReviewsWrapper>
        </div>
      </main>
    </NavLayout>
  );
} 