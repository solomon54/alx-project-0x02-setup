import { type ButtonProps } from "@/interfaces";
export default function Button({size= 'medium', shape='rounded-md'}:ButtonProps){
  

    // Determine padding based on size prop
     const  sizes={
            small: 'px-2 py-1',
            medium:'px-4 py-2',
            large: 'px-6 py-3',
       }

    // Determine border radius based on shape prop
    const shapes={
       'rounded-sm': 'rounded-sm',
       'rounded-md': 'rounded-md',
       'rounded-full': 'rounded-full'
            
    }

    return(
        <div >

        <button className={`${sizes[size]} ${shapes[shape]} bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer`}>
            Click Me
        </button>
        </div>
    )
}
