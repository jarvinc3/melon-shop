import { Loader } from "./loader"

interface DataWrapperProps {
   isLoading?: boolean
   isError?: boolean
   data: unknown
   loadingMessage?: string
   errorMessage?: string
   emptyMessage?: string
   children: React.ReactNode
}

export function DataWrapper({
   isLoading = false,
   isError = false,
   data,
   loadingMessage = "Loading...",
   errorMessage = "Something went wrong. Please try again.",
   emptyMessage = "No data found.",
   children
}: DataWrapperProps) {
   if (isLoading) {
      return (
         <div className="flex items-center justify-center py-8">
            <div className="text-center">
               <Loader />
               <p className="mt-4 text-muted-foreground">{loadingMessage}</p>
            </div>
         </div>
      )
   }

   if (isError) {
      return (
         <div className="flex items-center justify-center py-8">
            <div className="text-center">
               <p className="text-destructive">{errorMessage}</p>
            </div>
         </div>
      )
   }

   if (!data || (Array.isArray(data) && data.length === 0)) {
      return (
         <div className="flex items-center justify-center py-8">
            <div className="text-center">
               <p className="text-muted-foreground">{emptyMessage}</p>
            </div>
         </div>
      )
   }

   return <>{children}</>
}

export function BannersWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading banners..."
         errorMessage="Failed to load banners. Please try again."
         emptyMessage="No banners found."
      >
         {children}
      </DataWrapper>
   )
}

export function ProductsWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading products..."
         errorMessage="Failed to load products. Please try again."
         emptyMessage="No products found."
      >
         {children}
      </DataWrapper>
   )
}

export function ProductWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading product..."
         errorMessage="Failed to load product. Please try again."
         emptyMessage="Product not found."
      >
         {children}
      </DataWrapper>
   )
}

export function ProductsWithPaginationWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading products..."
         errorMessage="Failed to load products. Please try again."
         emptyMessage="No products found."
      >
         {children}
      </DataWrapper>
   )
}

export function CategoriesWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading categories..."
         errorMessage="Failed to load categories. Please try again."
         emptyMessage="No categories found."
      >
         {children}
      </DataWrapper>
   )
}

export function CollectionsWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading collections..."
         errorMessage="Failed to load collections. Please try again."
         emptyMessage="No collections found."
      >
         {children}
      </DataWrapper>
   )
}

export function ReviewsWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading reviews..."
         errorMessage="Failed to load reviews. Please try again."
         emptyMessage="No reviews found."
      >
         {children}
      </DataWrapper>
   )
}

export function TeamWrapper({ data, isLoading, isError, children }: Omit<DataWrapperProps, 'loadingMessage' | 'errorMessage' | 'emptyMessage'>) {
   return (
      <DataWrapper
         data={data}
         isLoading={isLoading}
         isError={isError}
         loadingMessage="Loading team members..."
         errorMessage="Failed to load team members. Please try again."
         emptyMessage="No team members found."
      >
         {children}
      </DataWrapper>
   )
} 