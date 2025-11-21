import Header from "@/components/layout/Header"
import Posts from "@/components/common/PostCard"


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return{
        props: {
            posts,
        },
    }
}
export default function PostPage({posts}){
    return(
        <div >
            <Header />
            <h1 className="text-3xl text-gray-800 font-bold  underline underline-offset-4" >Posts Page</h1>
<div className="grid grid-cols-3 gap-2 ">{/* from API */}
        {posts.slice(0, 6).map((post) =>{
            console.log(post);
            return <Posts key={post.id} title={post.title} userId={post.userId} content={post.body} />
        })}</div>
        
<div className="grid grid-cols-4 gap-2 ">




    <Posts title='Ultmate React course...' userId='1' content="The Ulatimate React course is one of the best common tech worlds Leader Carior skill..."  imgUrl="/assets/images/react.png"/>
    <Posts title='Ultmate Next.js course...'  userId='2' content="The Ulatimate Next.js course is one of the best common tech worlds Leader Carior skill..."  imgUrl="/assets/images/next.png"/>
    <Posts title='Ultmate Typscript course...' userId='3'  content="The Ulatimate Typscript course is one of the best common tech worlds Leader Carior skill..." imgUrl="/assets/images/ts.png"/>
</div>
        </div>
    )
}

