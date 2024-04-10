'use client';
import React from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTagParams } from '@/hooks/tagParams';
import { useRouter } from 'next/navigation';

export default function Filter() {
    const {addTagSearchParams, removeTagSearchParams} = useTagParams();
    const router = useRouter();
  return (
    <div>
      <h2 className='font-semibold text-muted-foreground text-sm mb-4'>
        絞り込み
      </h2>
      <div className="flex items-center space-x-2">
        <Switch onCheckedChange={v => {
            if(v){
              router.replace(`?tags=${addTagSearchParams('free', true)}`);
            } else {
              router.replace(`?tags=${removeTagSearchParams('free')}`);
            }
       }}/>
        <Label htmlFor="free">無料</Label>
      </div>
    </div>
  );
}
