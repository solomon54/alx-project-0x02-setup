
export interface CardProps{
    title: string;
    content: string;
    isModalOpen?: boolean;
}
 export interface ButtonProps{
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm'|'rounded-md' | 'rounded-full' ;
}

export interface PostProps{
    title:string;
    imgUrl:string;
    userId:string;
    content:string;

}

export interface UserProps{
    name:string;
    email:string;
   address:string;
}