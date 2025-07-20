import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RatingReviews() {
  const ratingData = [
    { stars: 5, count: 45, percentage: 90 },
    { stars: 4, count: 5, percentage: 10 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Rating & Reviews</h2>
        <span className="text-sm text-secondary items-center gap-2 hidden md:flex">
          View All <ChevronRight className="h-4 w-4" />
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary">4,5</div>
            <div className="text-secondary">/ 5</div>
            <div className="text-sm text-muted mt-2">(50 New Reviews)</div>
            <div className="flex justify-center mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-3">
          {ratingData.map((rating) => (
            <div key={rating.stars} className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{rating.stars}</span>
              </div>
              <Progress value={rating.percentage} className="flex-1" />
              <span className="text-sm text-secondary w-8">{rating.count}</span>
            </div>
          ))}
        </div>

        {/* Customer Review */}
        <div className="flex items-center justify-between md:hidden">
          <h2 className="font-bold text-primary">Customer Reviews</h2>
          <Link to="/reviews" className="text-sm text-secondary flex items-center gap-2">
            View All <ChevronRight className="h-4 w-4 text-secondary" />
          </Link>
        </div>
        <div className="bg-primary p-4 rounded-lg border border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Alex Mathio</p>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted">13 Oct 2024</span>
            </div>
          </div>
          <p className="text-sm text-secondary">
            "NextGen's dedication to sustainability and ethical practices resonates strongly
            with today's consumers, positioning the brand as a responsible choice in the
            fashion world."
          </p>
        </div>
      </div>
    </div>
  );
}