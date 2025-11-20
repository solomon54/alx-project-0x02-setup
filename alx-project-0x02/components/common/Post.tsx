import Image from "next/image";
import { type PostProps } from "@/interfaces";
export default function PostCard({title , imgUrl, description}:PostProps) {
    return (
        <div className="">
            <div className=" ml-5 text-center mt-5 p-3 justify-center bg-blue-200 shadow-2xl shadow-emerald-400 rounded-b-md hover:scale-101 cursor">
            <Image src ={imgUrl}  alt='image post' width={400} height={300} className="shadow-[5xl]"></Image>
            <h2 className="text-2xl text-gray-900 font-bold  py-2">{title}</h2>
            <p className="text-lg text-gray-700 font-semibold  py-4">{description}</p>

        </div>
        </div>
    )
}