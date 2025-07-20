import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useOrderSummary } from "@/hooks";
import { motion } from "framer-motion";
import { CheckCircle, Home, ShoppingBag, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrderItem {
   name: string
   quantity: number
   price: number
}

export default function SuccessPage() {
   const navigate = useNavigate()
   const { data: orderDetails, isLoading } = useOrderSummary()

   if (isLoading || !orderDetails) {
      return (
         <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <div className="text-center">Loading order details...</div>
         </main>
      )
   }

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
         }
      }
   };

   const itemVariants = {
      hidden: {
         opacity: 0,
         y: 30,
         scale: 0.9
      },
      visible: {
         opacity: 1,
         y: 0,
         scale: 1,
         transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.8
         }
      }
   };

   const successIconVariants = {
      hidden: {
         scale: 0,
         rotate: -180,
         opacity: 0
      },
      visible: {
         scale: 1,
         rotate: 0,
         opacity: 1,
         transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 20,
            delay: 0.5,
            duration: 1
         }
      }
   };

   const sparkleVariants = {
      hidden: {
         scale: 0,
         opacity: 0,
         rotate: 0
      },
      visible: (i: number) => ({
         scale: [0, 1.2, 1],
         opacity: [0, 1, 0.8],
         rotate: [0, 180, 360],
         transition: {
            delay: 1 + i * 0.1,
            duration: 0.8,
            ease: "easeOut" as const
         }
      })
   };

   const buttonVariants = {
      hidden: {
         opacity: 0,
         y: 20
      },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
         }
      },
      hover: {
         scale: 1.05,
         y: -3,
         transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 10
         }
      },
      tap: {
         scale: 0.98
      }
   };

   const floatingVariants = {
      animate: {
         y: [-10, 10, -10],
         transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
         }
      }
   };

   return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:pt-10 relative overflow-hidden">
         {/* Background decorative elements */}
         <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
         >
            {[...Array(6)].map((_, i) => (
               <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-200 rounded-full"
                  style={{
                     left: `${20 + i * 15}%`,
                     top: `${10 + i * 12}%`,
                  }}
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 2 + i * 0.2 }}
               />
            ))}
         </motion.div>

         <motion.div
            className="w-full max-w-md text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            {/* Success Icon with Sparkles */}
            <motion.div
               className="relative mb-8"
               variants={itemVariants}
            >
               <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  variants={successIconVariants}
                  whileHover={{
                     scale: 1.1,
                     rotate: 5,
                     transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
               >
                  <CheckCircle className="w-12 h-12 text-white" />
               </motion.div>

               {/* Sparkles around the icon */}
               {[...Array(4)].map((_, i) => (
                  <motion.div
                     key={i}
                     className="absolute"
                     style={{
                        left: i === 0 ? '10%' : i === 1 ? '90%' : i === 2 ? '20%' : '80%',
                        top: i === 0 ? '20%' : i === 1 ? '30%' : i === 2 ? '70%' : '60%',
                     }}
                     variants={sparkleVariants}
                     custom={i}
                     initial="hidden"
                     animate="visible"
                  >
                     <Sparkles className="w-6 h-6 text-yellow-400" />
                  </motion.div>
               ))}
            </motion.div>

            {/* Success Message */}
            <motion.div
               className="mb-8"
               variants={itemVariants}
            >
               <motion.h1
                  className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
               >
                  Order Confirmed!
               </motion.h1>
               <motion.p
                  className="text-lg text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
               >
                  Thank you for your purchase. We'll send you an email confirmation shortly.
               </motion.p>
            </motion.div>

            {/* Order Summary */}
            <motion.div
               className="bg-primary rounded-2xl p-6 mb-8 shadow-lg border border-border"
               variants={itemVariants}
               whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
               }}
            >
               <motion.div
                  className="flex justify-between items-center mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
               >
                  <span className="text-secondary font-medium">Order:</span>
                  <span className="font-bold text-secondary">{orderDetails.orderNumber}</span>
               </motion.div>
               <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.6 }}
               >
                  <span className="text-secondary font-medium">Total:</span>
                  <span className="font-bold text-2xl text-green-600">${orderDetails.total}</span>
               </motion.div>
            </motion.div>

            {/* Additional Information Accordion */}
            <motion.div
               className="mb-8"
               variants={itemVariants}
               initial="hidden"
               animate="visible"
            >
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="order-details" className="border border-b border-border rounded-xl bg-primary text-primary shadow-none px-4">
                     <AccordionTrigger className="text-primary">
                        View Order Details
                     </AccordionTrigger>
                     <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="space-y-3">
                           <h4 className="font-semibold text-secondary">Items Ordered:</h4>
                           {orderDetails.items.map((item: OrderItem, index: number) => (
                              <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                                 <div>
                                    <span className="font-medium">{item.name}</span>
                                    <span className="text-sm text-secondary ml-2">x{item.quantity}</span>
                                 </div>
                                 <span className="font-semibold">${item.price}</span>
                              </div>
                           ))}
                        </div>

                        <div className="space-y-2 pt-4 border-t border-border">
                           <div className="flex justify-between">
                              <span className="text-secondary">Estimated Delivery:</span>
                              <span className="font-medium">{orderDetails.estimatedDelivery}</span>
                           </div>
                           <div className="flex justify-between">
                              <span className="text-secondary">Shipping Address:</span>
                              <span className="font-medium text-right">{orderDetails.shippingAddress}</span>
                           </div>
                           <div className="flex justify-between">
                              <span className="text-secondary">Payment Method:</span>
                              <span className="font-medium">{orderDetails.paymentMethod}</span>
                           </div>
                        </div>
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
               className="space-y-4 flex justify-between"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
               <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
               >
                  <Button onClick={() => navigate("/shop")} className="w-full h-12 font-semibold bg-inverse shadow-lg group cursor-pointer text-inverse border border-border">
                     <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="mr-3"
                     >
                        <ShoppingBag className="w-5 h-5" />
                     </motion.div>
                     Continue Shopping
                  </Button>
               </motion.div>

               <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
               >
                  <Button variant="outline" onClick={() => navigate("/")} className="w-full h-12 font-semibold border border-border group cursor-pointer">
                     <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="mr-3"
                     >
                        <Home className="w-5 h-5" />
                     </motion.div>
                     Back to Home
                  </Button>
               </motion.div>
            </motion.div>

            {/* Celebration Message */}
            <motion.div
               className="mt-8"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
            >
               <motion.p
                  className="text-sm text-muted italic"
                  animate={{
                     opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: "easeInOut"
                  }}
               >
                  ✨ Thank you for choosing us! ✨
               </motion.p>
            </motion.div>
         </motion.div>
      </main>
   );
}