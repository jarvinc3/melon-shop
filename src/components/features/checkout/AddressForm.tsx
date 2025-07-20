import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface AddressFormProps {
   setAddAddress: (addAddress: boolean) => void;
   onAddAddress?: (newAddress: { label: string; address: string; details: string }) => void;
}

export const AddressForm = ({ setAddAddress, onAddAddress }: AddressFormProps) => {
   const [formData, setFormData] = useState({
      name: "",
      type: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: ""
   })

   const handleSubmit = () => {
      if (onAddAddress) {
         const addressDetails = `${formData.city}, ${formData.state} ${formData.zip}, ${formData.country}`;
         onAddAddress({
            label: formData.type || "New Address",
            address: addressDetails,
            details: `${formData.name} - ${formData.phone}`
         });
      }
      setAddAddress(false);
   }

   const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
   }

   return (
      <div className="flex flex-col bg-primary rounded-xl p-4 shadow-sm space-y-4">
         <div className=" flex flex-row space-x-2">
            <div className="flex-1">
               <Label className="text-primary text-sm" htmlFor="name">
                  Name
               </Label>
               <Input
                  placeholder="Your name"
                  className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
               />
            </div>
            <div className="flex-1">
               <Label className="text-primary text-sm" htmlFor="type">
                  Type Address
               </Label>
               <Input
                  placeholder="Home, Office, etc."
                  className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
                  type="text"
                  value={formData.type}
                  onChange={(e) => handleInputChange("type", e.target.value)}
               />
            </div>
         </div>
         <div className="">
            <Label className="text-primary text-sm" htmlFor="phone">
               Phone Number
            </Label>
            <Input
               placeholder="Address phone number"
               className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
               id="phone"
               type="number"
               value={formData.phone}
               onChange={(e) => handleInputChange("phone", e.target.value)}
            />
         </div>
         <div className="">
            <Label className="text-primary text-sm" htmlFor="address">
               Address
            </Label>
            <Textarea
               placeholder="Your address"
               className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
               id="address"
               value={formData.address}
               onChange={(e) => handleInputChange("address", e.target.value)}
            />
         </div>
         <div className=" flex flex-row space-x-2">
            <div className="flex-1">
               <Label className="text-primary text-sm" htmlFor="city">
                  City
               </Label>
               <Input
                  placeholder="Your city"
                  className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
               />
            </div>
            <div className="flex-1">
               <Label className="text-primary text-sm" htmlFor="state">
                  State
               </Label>
               <Input
                  placeholder="Your state"
                  className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
                  id="state"
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
               />
            </div>
         </div>
         <div className=" flex flex-row space-x-2">
            <div className="flex-1">
               <Label className="text-primary text-sm" htmlFor="zip">
                  ZIP
               </Label>
               <Input
                  placeholder="Your ZIP code"
                  className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
                  id="zip"
                  type="text"
                  value={formData.zip}
                  onChange={(e) => handleInputChange("zip", e.target.value)}
               />
            </div>
            <div className="flex-1">
               <Label className="text-primary text-sm" htmlFor="country">
                  Country
               </Label>
               <Input
                  placeholder="Your country"
                  className="w-full bg-primary rounded-md border-border text-primary px-2 py-1"
                  id="country"
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
               />
            </div>
         </div>
         <div className="flex justify-between space-x-2">
            <Button
               variant="outline"
               className="bg-primary text-primary rounded-md h-10 "
               type="button"
               onClick={() => setAddAddress(false)}
            >
               Cancel
            </Button>
            <Button
               variant="outline"
               className="bg-inverse text-inverse rounded-md h-10"
               type="button"
               onClick={handleSubmit}
            >
               Add Address
            </Button>
         </div>
      </div>
   )
}
