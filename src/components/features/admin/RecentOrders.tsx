import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentOrders = [
  {
    id: "#3210",
    customer: "John Doe",
    amount: "$299.00",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3209",
    customer: "Jane Smith",
    amount: "$159.00",
    status: "processing",
    date: "2024-01-14",
  },
  {
    id: "#3208",
    customer: "Mike Johnson",
    amount: "$89.00",
    status: "shipped",
    date: "2024-01-14",
  },
  {
    id: "#3207",
    customer: "Sarah Wilson",
    amount: "$199.00",
    status: "pending",
    date: "2024-01-13",
  },
]

const statusColors = {
  completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  shipped: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
}

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{order.id}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{order.amount}</p>
                <Badge className={statusColors[order.status as keyof typeof statusColors]}>{order.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
