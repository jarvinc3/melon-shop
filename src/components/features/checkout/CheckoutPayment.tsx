import { Check } from "lucide-react";
import { useState } from "react";

export function CheckoutPayment() {
   const [selectedPayment, setSelectedPayment] = useState("cash");
   const [selectedTransfer, setSelectedTransfer] = useState("bhd");

   const renderCheckboxGroup = (options: { id: string, label: string }[]) => (
      options.map(option => (
         <div key={option.id} onClick={() => setSelectedTransfer(option.id)} className="bg-primary rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
            <button
               type="button"
               className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedTransfer === option.id
                  ? "bg-inverse border-inverse"
                  : "bg-background border-border"
                  }`}
            >
               {selectedTransfer === option.id && (
                  <Check className="w-3 h-3 text-inverse" />
               )}
            </button>
            <span className="text-sm text-primary">{option.label}</span>
         </div>
      ))
   );

   return (
      <div>
         <h2 className="text-lg font-bold mb-4">Payment</h2>
         <div className="space-y-3">
            <div
               onClick={() => setSelectedPayment("transfer")}
               className="bg-primary rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
            >
               <div className="flex-1 flex items-center gap-3">
                  <span className="text-lg">💳</span>
                  <div>
                     <div className="font-bold text-sm mb-1">Transfer</div>
                     <div className="text-sm text-secondary">Transfer to bank account</div>
                  </div>
               </div>
               <button
                  type="button"
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPayment === "transfer"
                     ? "bg-inverse border-inverse"
                     : "bg-background border-border"
                     }`}
               >
                  {selectedPayment === "transfer" && (
                     <Check className="w-3 h-3 text-inverse" />
                  )}
               </button>
            </div>

            {selectedPayment === "transfer" && (
               <div className="space-y-2 grid grid-cols-2 gap-2">
                  {renderCheckboxGroup([
                     { id: "scotiaBank", label: "Scotia Bank" },
                     { id: "bankOfAmerica", label: "Bank of America" },
                     { id: "citiBank", label: "Citibank" },
                     { id: "wellsFargo", label: "Wells Fargo" },
                     { id: "usBank", label: "US Bank" },
                     { id: "capitalOne", label: "Capital One" },
                     { id: "chaseBank", label: "Chase Bank" },
                     { id: "other", label: "Other Bank" },
                  ])}
               </div>
            )}

            <div
               onClick={() => setSelectedPayment("cash")}
               className="bg-primary rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
            >
               <div className="flex-1 flex items-center gap-3">
                  <span className="text-lg">💰</span>
                  <div>
                     <div className="font-bold text-sm mb-1">Cash on Delivery</div>
                     <div className="text-sm text-secondary">$ 54.49</div>
                  </div>
               </div>
               <button
                  type="button"
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPayment === "cash"
                     ? "bg-inverse border-inverse"
                     : "bg-background border-border"
                     }`}
               >
                  {selectedPayment === "cash" && (
                     <Check className="w-3 h-3 text-inverse" />
                  )}
               </button>
            </div>
         </div>
      </div>
   )
}
