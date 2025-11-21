import Header from "@/components/layout/Header";
import Users from "@/components/common/UserCard";

export async function getStaticProps(){
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return{
        props:{
            users,
        },
    }
}
export default function UserPages({users}){

    return(
        <>
        <Header />
        <h1 className="text-3xl text-gray-4g00 font-bold  underline underline-offset-4" >Users Page</h1>
        <div className="grid grid-cols-4 gap-3 border-4 p-3">
    {users.map((user)=> 
    
        <Users key={user.id} name={user.name} email={user.email} address={`${user.address.street}, ${user.address.city}`} />    )}
            </div>

        </>
    )
}