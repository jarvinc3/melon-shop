import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar"
import { CircleDollarSign, FunnelX, LayoutGridIcon, ListIcon, Palette, RulerDimensionLine } from "lucide-react"

interface ProductFiltersProps {
  viewMode: "grid" | "list",
  setViewMode: (viewMode: "grid" | "list") => void,
  filters: {
    category: string,
    price: string,
    color: string,
    size: string,
  },
  setFilters: (filters: {
    category: string,
    price: string,
    color: string,
    size: string,
  }) => void
}

const categories = [
  { id: 'all', name: 'All', icon: '📦' },
  { id: 'shoes', name: 'Shoes', icon: '👟' },
  { id: 'heels', name: 'Heels', icon: '👠' },
  { id: 'sneakers', name: 'Sneakers', icon: '👟' },
  { id: 'boots', name: 'Boots', icon: '🥾' },
  { id: 'sandals', name: 'Sandals', icon: '👡' },
];

const priceOptions = [
  { id: 'under-100', label: 'Under $100' },
  { id: '100-200', label: '$100 - $200' },
  { id: '200-300', label: '$200 - $300' },
  { id: '300-400', label: '$300 - $400' },
];

const colorOptions = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500', '#800080', '#808080', '#000000', '#800000'];
const sizeOptions = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

export function ProductFilters({ viewMode, setViewMode, filters, setFilters }: ProductFiltersProps) {
  const handleFilterChange = (type: keyof typeof filters, value: string) => {
    setFilters({ ...filters, [type]: filters[type] === value ? "" : value });
  };

  const renderCheckboxGroup = (options: { id: string, label: string }[], type: keyof typeof filters) => (
    options.map(option => (
      <div key={option.id} className="flex items-center gap-3 bg-background border border-border rounded-md p-2 shadow-md">
        <Checkbox
          id={`${type}-${option.id}`}
          className="border-border cursor-pointer"
          checked={filters[type] === option.id}
          onCheckedChange={() => handleFilterChange(type, option.id)}
        />
        <Label htmlFor={`${type}-${option.id}`} className="cursor-pointer w-full">{option.label}</Label>
      </div>
    ))
  );

  const renderColorCheckboxes = () => (
    colorOptions.map(color => (
      <Checkbox
        key={color}
        id={`color-${color}`}
        style={{
          backgroundColor: color,
        }}
        className={`size-8 ${filters.color === color ? 'border-4 border-info' : 'border border-transparent'} ${['gray', 'black'].includes(color) ? 'text-white' : 'text-primary'}`}
        checked={filters.color === color}
        onCheckedChange={() => handleFilterChange('color', color)}
      />
    ))
  );

  return (
    <div className="my-10 space-y-4">
      <Carousel className="w-full h-28">
        <CarouselContent className="h-28 snap-none">
          {categories.map(({ id, name, icon }) => (
            <CarouselItem
              key={id}
              onClick={() => setFilters({ ...filters, category: id })}
              className={`basis-1/5 h-24 ml-6 flex flex-col items-center justify-center p-6 rounded-lg gap-2 shadow-md
              ${filters.category === id ? 'bg-gradient-to-b from-blue-500 to-blue-700 text-white' : 'bg-secondary border-border'} 
              cursor-pointer transition-all duration-300 hover:scale-105`}
            >
              <span className="text-xl bg-primary text-white rounded-full p-2 flex items-center justify-center shadow-md">{icon}</span>
              <span className={`font-medium text-center ${filters.category === id ? 'text-white' : 'text-primary'}`}>{name}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="size-9 md:hidden cursor-pointer bg-primary border border-border rounded-md p-2 shadow-md text-primary" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
            {viewMode === "grid" ? <LayoutGridIcon className="size-6" /> : <ListIcon className="size-6" />}
          </Button>
          <Button variant="outline" onClick={() => setFilters({ category: "all", price: "all", color: "all", size: "all" })} className="cursor-pointer bg-primary border border-border rounded-md p-2 shadow-md text-primary">
            <FunnelX className="size-6" />
            <span className="text-primary hidden md:block text-base">Clear Filters</span>
          </Button>
        </div>

        <Menubar className="flex text-primary gap-4 bg-background border-none shadow-none">
          {[{
            icon: <CircleDollarSign className="size-6" />,
            label: 'Price',
            type: 'price' as const,
            content: renderCheckboxGroup(priceOptions, 'price')
          }, {
            icon: <Palette className="size-6" />,
            label: 'Color',
            type: 'color' as const,
            content: renderColorCheckboxes()
          }, {
            icon: <RulerDimensionLine className="size-6" />,
            label: 'Size',
            type: 'size' as const,
            content: renderCheckboxGroup(sizeOptions.map(s => ({ id: s, label: s.toUpperCase() })), 'size')
          }].map(({ icon, label, type, content }) => (
            <MenubarMenu key={type}>
              <MenubarTrigger className="bg-primary md:space-x-2 cursor-pointer relative border border-border rounded-md p-2 shadow-md">
                {icon}
                <span className="text-primary hidden md:block text-base">{label}</span>
                {filters[type] !== "all" && <span className="absolute -top-2 -right-2 bg-info text-white rounded-full p-2 text-xs"></span>}
              </MenubarTrigger>
              <MenubarContent className={`p-2 ${type === 'color' ? 'grid grid-cols-4 gap-2' : 'space-y-3'} bg-primary border border-border rounded-md shadow-md text-primary`}>
                {content}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
      </div>
    </div>
  )
}
