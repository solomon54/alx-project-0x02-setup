import { type ButtonProps } from "@/interfaces";
export default function Button({size='medium', shape='rounded-md'}:ButtonProps){
    let padding;
    let borderRadius;

    // Determine padding based on size prop
    switch(size){
        case 'small':
            padding = 'px-2 py-1';
            break;
        case 'medium':
            padding = 'px-4 py-2';
            break;
        case 'large':
            padding = 'px-6 py-3';
            break;
        default:
            padding = 'px-4 py-2'; // default to medium
    }

    // Determine border radius based on shape prop
    switch(shape){
        case 'rounded-sm':
            borderRadius = 'rounded-sm';
            break;
        case 'rounded-md':
            borderRadius = 'rounded-md';
            break;
        case 'rounded-full':
            borderRadius = 'rounded-full';
            break;
        default:
            borderRadius = 'rounded-md'; // default to rounded-md
    }

    return(
        <div >

        <button className={`${padding} ${borderRadius} bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer`}>
            Click Me
        </button>
        </div>
    )
}
