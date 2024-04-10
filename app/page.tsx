
'use client';
import ItemCard from '@/components/item-card';
import {allItems } from '@/data/items';
import { TagId } from '@/data/tag';

import React from 'react';

export default function Page({
  searchParams
} : {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) {
  const tags = (searchParams.tags as string)?.split(',');
    const curentItems = allItems.filter(item => {
      if(!tags) {
        return true;
      }

      return tags.every(tag => item.tags.includes(tag as TagId));

    });
    if(curentItems.length === 0){
        return <p className='text-sm text-muted-foreground my-10'>このページは存在しません</p>
    }
    
  return (
    <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1'> 
    {curentItems.map((item) =>  
    <ItemCard 
    key={item.title}
    imageURL={item.imageURL}
    title={item.title} 
    href={item.href}
    tags={item.tags}
    />
    )}
         
    </div>
  );
}

