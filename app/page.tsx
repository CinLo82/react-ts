"use client";
import { useState } from 'react';
import { RandomFox } from '@components/RandomFox'

const random = () => Math.floor(Math.random() * 122) + 1;

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
  ]);

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline ">Hello Cinlo!</h1> 

        {images.map((image, index) => (
           <div key={index} className='p-4'>
            <RandomFox image={image}/>
          </div>
        ))}
      </main>
    </div>
  );
};
