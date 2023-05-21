"use client";
import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import { LazyImage } from '@components/RandomFox'

const random = () => Math.floor(Math.random() * 122) + 1;

const generateId = () => Math.random().toString(36).substring(2,9);


export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);

  const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {

    const newImageItems: IFoxImageItems = { 
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
        {images.map(({ id, url }, index) => (
           <div key={id} className='p-4'>
            <LazyImage 
              src={url} 
              width={320}
              height="auto"
              title="Random Fox" 
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => console.log('hey')} 
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
    </div>
  );
};
