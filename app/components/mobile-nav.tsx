'use client';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { mainTAGS } from "@/data/tag";
import { useTagParams } from "@/hooks/tagParams";
import { getTagLabel} from "@/lib/tag";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  const {addTagSearchParams} = useTagParams();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
            <Menu size={20}/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
        {mainTAGS.map((tagId) => (
            <Button variant="ghost" className="justfiy-start" key={tagId} asChild>
               <Link href={`/?tags=${addTagSearchParams(tagId)}`}>
                {getTagLabel(tagId)} 
              </Link>
                </Button>
  
        ))}
        </div>
        
      </SheetContent>
    </Sheet>
  )
}
