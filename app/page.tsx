"use client";
import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import { LazyImage } from '@components/RandomFox'

const random = () => Math.floor(Math.random() * 122) + 1;

type ImageItems = { id:string, url:string};

const generateId = () => Math.random().toString(36).substring(2,9);


export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {

    const newImageItems: ImageItems = { 
      id: generateId(), 
      url:`https://randomfox.ca/images/${random()}.jpg` 
    };
    setImages([
      ...images,
      newImageItems
    ])
  }

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline ">Hello Cinlo!</h1> 
        <button onClick={addNewFox}>Add New Fox</button>
        {images.map(({ id, url }) => (
           <div key={id} className='p-4'>
            <LazyImage 
              src={url} 
              width={320}
              height="auto"
              title="Random Fox" 
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => console.log('hey')} 
            />
          </div>
        ))}
      </main>
    </div>
  );
};
