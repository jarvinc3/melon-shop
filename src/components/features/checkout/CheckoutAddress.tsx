import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { AddressForm } from "./AddressForm";

export function CheckoutAddress() {
  const [addAddress, setAddAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("home");

  const addresses = [
    {
      id: "home",
      label: "Home",
      address: "NY, United States",
      details: "300 Post Street 122422"
    },
    {
      id: "office",
      label: "Office",
      address: "3891 Ranchview",
      details: "Dr. Richardson, California 62639"
    }
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-primary">Address</h2>
      <div className="space-y-3">
        {addresses.map((address) => (
          <div
            key={address.id}
            onClick={() => setSelectedAddress(address.id)}
            className="bg-primary rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex-1">
              <div className="font-bold text-sm mb-1">{address.label}</div>
              <div className="text-sm text-secondary">{address.address}</div>
              <div className="text-sm text-secondary">{address.details}</div>
            </div>
            <button
              type="button"
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAddress === address.id
                ? "bg-inverse border-inverse"
                : "bg-background border-border"
                }`}
            >
              {selectedAddress === address.id && (
                <Check className="w-3 h-3 text-inverse" />
              )}
            </button>
          </div>
        ))}
        {!addAddress && (
          <Button variant="outline" onClick={() => setAddAddress(true)} className="bg-primary w-full cursor-pointer text-primary flex items-center justify-center rounded-xl p-4 h-12 shadow-sm border border-border hover:shadow-md transition-shadow">
            <Plus className="size-5 text-primary" />
          </Button>
        )}
        {addAddress && (
          <AddressForm setAddAddress={setAddAddress} />
        )}
      </div>
    </div>
  );
}
