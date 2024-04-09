import ItemCard from '@/components/item-card';
import { ItemType, allItems } from '@/data';

import React from 'react';

export default function Page({
    params: { id },
}: {
    params: {
        id: ItemType;
    };
}) {
    const curentItems = allItems[id] || [];


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
