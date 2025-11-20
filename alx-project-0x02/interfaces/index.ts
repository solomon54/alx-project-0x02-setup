
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
    description:string;

}