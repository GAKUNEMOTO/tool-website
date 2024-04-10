'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { getTagLavel} from '@/lib/tag';
import Filter from './filter';
import { useTagParams } from '@/hooks/tagParams';
import { mainTAGS } from '@/data/tag';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const {addTagSearchParams} = useTagParams();
  const searchParams = useSearchParams();
  const tags = searchParams.get('tags')?.split(',');

  return (
    <div className="hidden lg:block w-64  space-y-6 border-r  p-4">
      <div className="flex flex-col">
        {mainTAGS.map((tagId) => (
          <Button 
            variant="ghost" 
            className={cn('justify-start', tags?.includes(tagId) && 'bg-accent' )} 
            key={tagId} 
            asChild
            
          >
            <Link href={`/?tags=${addTagSearchParams(tagId)}`}>
                {getTagLavel(tagId)} 
            </Link>
          </Button>
        ))}
      </div>
        <Filter/>
      
    </div>
  );
}
