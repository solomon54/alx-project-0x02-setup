import { type CardProps } from "@/interfaces";
import { useState } from "react";

interface PostModalProps {
    addCardCallback: (newCard: { title: string; content: string }) => void;
    closeModal: () => void;
}

export default function PostModal({ addCardCallback, closeModal }: PostModalProps) {
    // 1️⃣ Controlled inputs: track user typing
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 2️⃣ Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // prevent page reload

        // 3️⃣ Send data to parent
        addCardCallback({ title, content });

        // 4️⃣ Reset input fields
        setTitle("");
        setContent("");

        // 5️⃣ Close the modal
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Add a New Card</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <div className="flex justify-end gap-2 mt-2">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Add Card
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
