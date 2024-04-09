import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { TAGS } from '@/lib/tag';

export default function Sidebar() {
  return (
    <div className="hidden lg:block w-64 border-r">
      <div className="flex flex-col p-4">
        {TAGS.map((tag) => (
          <Button 
            variant="ghost" 
            className="justify-start" 
            key={tag.id} 
            asChild
          >
            <Link href={`/${tag.id}`} passHref> 
                {tag.label} 
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
