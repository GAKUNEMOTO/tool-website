import { TagId, allTags, mainTAGS } from "@/data/tag";

export const getTagLavel = (tagId: TagId) => {
    return allTags.find((tag) => tag.id === tagId)?.label ?? '';
}

export const addTagSearchParams = (defaultTags: TagId[], tag:TagId) => {
    const src  = defaultTags.filter((t: TagId) => !mainTAGS.includes(t))
    if(defaultTags.includes(tag)){
        return src.join(',');
    } else {
        return [...src,tag].join(',');
    }
}
export const removeTagSearchParams = (defaultTags: TagId[], tag:TagId) => {
  return defaultTags.filter((t:TagId) => t !== tag).join(',');
}