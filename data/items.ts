import { Item } from "@/types/item";

export const allItems: Item[] = [
    {
        imageURL:'/ダウンロード.jpeg',
        title:'イラストや',
        href:'https://www.irasutoya.com/' ,
        tags:['no-license-required', 'illuste'],
    },    
    {
        imageURL:'/images/pixaboy.png',
        title:'Pixabay',
        href:'https://pixabay.com/' ,
        tags:['no-license-required','video','photo'],
    },    
    {
        imageURL:'/images/unsplash.png',
        title:'unsplash',
        href:'https://unsplash.com/ja' ,
        tags:['no-license-required','free','photo'],
    },
    // {
    //     imageURL:'',
    //     title:'',
    //     href:'' ,
    //     tags:[],
    // },
] as const;
