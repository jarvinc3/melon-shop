import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Product } from "@/types/product.types"

const specifications = [
   { label: "Brand", value: "ModernShop" },
   { label: "Model", value: "MS-2024" },
   { label: "Weight", value: "250g" },
   { label: "Dimensions", value: "20 x 15 x 5 cm" },
   { label: "Material", value: "Premium Plastic" },
   { label: "Warranty", value: "2 Years" },
]

export const ProductDetails = ({ product }: { product: Product }) => {
   return (
      <Accordion
         type="multiple"
         className="w-full border-none shadow-none space-y-4"
      >
         <AccordionItem value="item-1" className="border border-border rounded-xl bg-primary text-primary shadow-none px-4">
            <AccordionTrigger className="text-primary">Key Features</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
               <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                     <li key={index} className="flex items-center text-secondary">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                        {feature}
                     </li>
                  ))}
               </ul>
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-2" className="border border-border rounded-xl bg-primary text-primary shadow-none px-4">
            <AccordionTrigger>Product Description</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
               <div className="prose max-w-none dark:prose-invert">
                  <p>
                     This premium product is designed with the modern consumer in mind. Crafted from high-quality materials
                     and built to last, it combines functionality with style to deliver an exceptional user experience.
                  </p>
                  <br />
                  <p>
                     Whether you're a professional or enthusiast, this product will meet and exceed your expectations. With
                     its innovative design and cutting-edge features, it represents the perfect balance of form and
                     function.
                  </p>
                  <br />
                  <h4>What's in the Box?</h4>
                  <br />
                  <ul>
                     <li>1x Main Product</li>
                     <li>1x User Manual</li>
                     <li>1x Warranty Card</li>
                     <li>1x Premium Carrying Case</li>
                  </ul>
               </div>
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-3" className="border border-border rounded-xl bg-primary text-primary shadow-none px-4">
            <AccordionTrigger>Specifications</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                     <div
                        key={index}
                        className="flex justify-between py-2 border-b border-border"
                     >
                        <span className="font-medium text-primary">{spec.label}</span>
                        <span className="text-primary">{spec.value}</span>
                     </div>
                  ))}
               </div>
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}
