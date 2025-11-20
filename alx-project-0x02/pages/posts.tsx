import Header from "@/components/layout/Header"
import Posts from "@/components/common/Post"
export default function PostPage(){
    return(
        <div >
            <Header />
            <h1 className="text-3xl text-gray-800 font-bold  underline underline-offset-4" >Posts Page</h1>
<div className="flex gap-2 ">
    <Posts title='Ultmate React course...' description="The Ulatimate React course is one of the best common tech worlds Leader Carior skill..." imgUrl="/assets/images/react.png"/>
    <Posts title='Ultmate Next.js course...' description="The Ulatimate Next.js course is one of the best common tech worlds Leader Carior skill..." imgUrl="/assets/images/next.png"/>
    <Posts title='Ultmate Typscript course...' description="The Ulatimate Typscript course is one of the best common tech worlds Leader Carior skill..." imgUrl="/assets/images/ts.png"/>
</div>
        </div>
    )
}

