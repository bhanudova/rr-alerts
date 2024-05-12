import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { listItem } from "@/constraints/data";
import { Menu } from "lucide-react";

export function SheetSlider() {
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded-md bg-black/5 bg-white dark:bg-white/80 text-black">
          <Menu className="w-6"/>
        </button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-6 sm:text-sm md:text-base lg:text-base mt-12 text-center font-semibold">
          {
            listItem.map((list: string, i: number) => (
              <li key={i} className="w-full bg-[#D1D5DB] dark:bg-[#262626] p-2 rounded-md">{list}</li>
            ))
          }
        </ul>
      </SheetContent>
    </Sheet>
  )
}
