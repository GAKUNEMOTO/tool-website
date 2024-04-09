import { Tag } from "@/types/tag";

export const photos: {
    title:string; 
    tags: Tag[]; 
    href:string;
    imageURL:string;
}[] = [
    {
        imageURL:'/images/pixaboy.png',
        title:'Pixabay',
        href:'https://pixabay.com/' ,
        tags:[{ id: 'xxx', label:'ライセンス不要'}],
    },    
    {
        imageURL:'/images/unsplash.png',
        title:'unsplash',
        href:'https://unsplash.com/ja' ,
        tags:[{ id: 'xxx', label:'ライセンス不要'}],
    },

    // {
    //     imageURL:'',
    //     title:'',
    //     href:'' ,
    //     tags:[],
    // },
];