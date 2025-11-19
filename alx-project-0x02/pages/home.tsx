import Card from "@/components/common/Card";
import PostModals from "@/components/common/PostModal";
import { Content } from "next/font/google";
import { title } from "process";
import { useState } from "react";

export default function Home(){
const [cards,setCards]= useState([
    {title: "React", Content: "from the Ultimate Ract course..."},
    {title: "Next.Js", Content: "from the Ultimate Next.Js course..."}
]);
  // 2️⃣ State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 3️⃣ Callback function to add a new card
    const addCard = (newCard: { title: string; content: string }) => {
        setCards([...cards, newCard]); // add new card to existing array
    };

    return (
        <div className="text-2xl text-gray-700 bg-gray-100 mb-8">
           <div className="p-5 bg-gray-100 text-4xl text-gray-700 ml-5">
             <h1 >Home Page</h1>
            <p className="text-lg">This is the home page...</p>
        </div>
        <div className="p-7 shadow-2xl shadow-blue-200 rounded-2xl ">
            <button onClick={()=> setIsModalOpen(true)} 
            className="bg-indigo-500 text-white text-shadow-md px-4 py-2 mb-6 rounded-2xl hover:bg-indigo-400 hover:cursor-pointer transition-all duration-100 ">Add Card</button>
        </div>
{isModalOpen && (
    <PostModals  closeModal={ () => isModalOpen(false)}
addCardCallback={addCard} />
)}

  {/* 6️⃣ Render cards dynamically */}
            <div className="grid gap-4">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} content={card.Content} />
                ))}
            </div>


<Card title="React" content="This is the content of the React Course." />
<Card title="Next.js" content="This is the content of the Next.js Course." />
<Card title="TypeScript" content="This is the content of the TypeScript Course." />

<PostModals title= "Welcome to the Post Modal" content="This is a sample modal content." />
        </div>
    )
}