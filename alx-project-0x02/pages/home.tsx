import Card from "@/components/common/Card";

export default function Home(){
    return (
        <div className="text-2xl text-gray-700 bg-gray-100">
            <h1>Home Page</h1>
            <p>This is the home page...</p>

<Card title="React" content="This is the content of the React Course." />
<Card title="Next.js" content="This is the content of the Next.js Course." />
<Card title="TypeScript" content="This is the content of the TypeScript Course." />
        </div>
    )
}