import { Item } from "@/types/item";

export const allItems: Item[] = [
    {
        id:'いらすとや',
        title:'いらすとや',
        href:'https://www.irasutoya.com/' ,
        tags:['no-license-required', 'illuste'],
    },    
    {
        id:'pixaboy',
        title:'Pixabay',
        href:'https://pixabay.com/' ,
        tags:['no-license-required','video','photo'],
    },    
    {
        id:'unsplash',
        title:'unsplash',
        href:'https://unsplash.com/ja' ,
        tags:['no-license-required','free','photo'],
    },
    {
        id:'lucide',
        title:'Lucide',
        href:'https://lucide.dev/' ,
        tags:['no-license-required','free','icon'],
    },
    {
        id:'vector-shelf',
        title:'vectoreShelf',
        href:'https://vectorshelf.com/' ,
        tags:['no-license-required','free','illuste'],
    },
    {
        id:'simple-Icons',
        title:'Simple-Icons',
        href:'https://simpleicons.org/?q=gitHub' ,
        tags:['no-license-required','free','icon'],
    },

    // {
    //     imageURL:'',
    //     title:'',
    //     href:'' ,
    //     tags:[],
    // },
] as const;
