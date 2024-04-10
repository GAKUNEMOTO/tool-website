'use client';

import { TagId, mainTAGS } from "@/data/tag";
import { useSearchParams } from "next/navigation";

export const useTagParams = () => {
    const defaultTags = (useSearchParams().get('tags')?.split(',').filter(Boolean)??[]) as TagId[];

    const addTagSearchParams = (tag:TagId, keepMainTag? : boolean) => {
        const src  = keepMainTag ? defaultTags : defaultTags.filter((t: TagId) => !mainTAGS.includes(t))
        if(defaultTags.includes(tag)){
            return src.join(',');
        } else {
            return [...src,tag].join(',');
        }
    }

    const removeTagSearchParams = (tag:TagId) => {
      return defaultTags.filter((t:TagId) => t !== tag).join(',');
    }

    return {addTagSearchParams, removeTagSearchParams};
}