import Image, { StaticImageData } from "next/image";
import React from "react";

type CharacterCardProps = {
  name: string;
  image: StaticImageData;
};

export default function CharacterCard({ name, image }: CharacterCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
      <Image 
        src={image} 
        alt={name} 
        width={300} 
        height={400} 
        className="object-cover w-full h-full" 
        loading="lazy"
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-between p-4">
        <h2 className="text-white text-xl font-bold">{name}</h2>
        <div className="relative w-0 h-0">
          <a 
            href="/characters/nobita" 
            className="absolute bottom-0 right-0 border-l-8 border-t-8 border-transparent border-t-white rotate-90"
          ></a>
        </div>
      </div>
    </div>
  );
}
