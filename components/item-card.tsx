import { TagId } from "@/data/tag";
import { getTagLabel } from "@/lib/tag";
import { Tag } from "@/types/tag";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({title, tags, href, id}: 
    {
        title:string; 
        tags: TagId[]; 
        href:string;
        id:string;
    }) {

  return (
    <div>
        {/* shadow-smが良き */}
        <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-md shadow-sm bg-card">
            <div className='aspect-video overflow-hidden border relative mb-2 rounded'  style={{ overflow: 'hidden' }}>
                <Image fill className="object-cover" src={`/tool-web/images/${id}.png`} alt="" />
            </div>

                <h2 className='text-sm font-semibold'>
                    {/* ArrowUpRightは原則他のサイトに飛ぶときにつけるIcon  */}
                    <Link href={href} target="_blank" >
                        {title}
                    <span className='absolute inset-0'></span>
                    <ArrowUpRight className="inline" size={10}/></Link>
                    </h2>
                <div className='flex relative z-10 flex-wrap mt-2 gap-2'>
                    {tags.map((tagId) => (
                        <Link 
                        key={tagId}
                        href={`/${tagId}`}
                         className='border whitespace-nowrap text-muted-foreground bg-muted rounded text-xs px-1 py-1.5'
                         >
                        {getTagLabel(tagId)}
                    </Link>
                    ))}

                </div>
            </div>
    </div>
  )
}
