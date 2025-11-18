import React from 'react'
import Link from 'next/link';

export default function Header() {
    return (
       <main>
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <div className="text-lg font-bold">MyWebsite</div>
                <div className="space-x-4">
                    <Link href="/home" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                </div>
            </nav>
        </header>
       </main>
    )
}
