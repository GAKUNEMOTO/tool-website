'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { getTagLavel, mainTAGS } from '@/lib/tag';
import Filter from './filter';
import { useTagParams } from '@/hooks/tagParams';

export default function Sidebar() {
  const {addTagSearchParams} = useTagParams();
  return (
    <div className="hidden lg:block w-64  space-y-6 border-r  p-4">
      <div className="flex flex-col">
        {mainTAGS.map((tagId) => (
          <Button 
            variant="ghost" 
            className="justify-start" 
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
