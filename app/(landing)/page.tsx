import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessagesSquare, VideoIcon , ImageIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


function App() {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">AI App</h1>
          <nav>
            <ul className="flex space-x-6">
            <Link href={'/sign-in'}>
        <Button>login</Button>
      </Link>
      <Link href={'/sign-up'}>
        <Button>register</Button>
      </Link>

                          </ul>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-4">Explore the Power of AI</h2>
          <p className="text-lg mb-8">Experience AI-driven innovation that transforms industries and enhances lives.</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300">Get Started</a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <><MessagesSquare /></>
            <h3 className="text-xl font-semibold mb-4">ChatGPT</h3>
            <p>Engage with our advanced AI chatbot for insightful conversations and personalized assistance.</p>
          </Card>
          <Card>
            <><ImageIcon/></>
            <h3 className="text-xl font-semibold mb-4">Image Generation</h3>
            <p>Create stunning visuals using our AI-powered image generation tool.</p>
          </Card>
          <Card>
            <><VideoIcon /></>
            <h3 className="text-xl font-semibold mb-4">Video Editing</h3>
            <p>Edit and enhance videos with AI-driven tools to craft compelling narratives.</p>
          </Card>
        </div>
      </section>

      <section className="bg-blue-500 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Ready to Experience AIs Potential?</h2>
          <p className="text-lg mb-8">Join us on a journey of innovation and discovery.</p>
          <a href="#" className="bg-white text-blue-500 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold transition duration-300">Get Started</a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 AI App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
