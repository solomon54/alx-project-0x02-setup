import { UserProps } from "@/interfaces";

export default function UserCard({name, email, address}:UserProps) {
    return (
        <div className="block ml-5 text-center mt-5 p-3 justify-center bg-green-200 shadow-2xl shadow-indigo-400 rounded-b-md hover:scale-101 cursor">
            <h2 className="text-2xl text-gray-900 font-bold  py-2">{name} </h2>
            <p className="text-lg text-gray-700 font-semibold  py-2">Email: {email} </p>
            <p className="text-lg text-gray-700 font-semibold  py-2">Address: {address} </p>

        </div>
    )
}