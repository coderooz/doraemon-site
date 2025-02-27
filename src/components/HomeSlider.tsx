"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CharacterCard from "@/components/CharacterCard";

const characters = [
  { id: 1, name: "Doraemon", image: '/assets/Doraemon.jpg' },
  { id: 2, name: "Nobita", image: '/assets/Nobita.png' },
  { id: 3, name: "Shizuka", image: '/assets/Shizuka.jpg' },
];



export default function HomeSlider() {
  return (
    <Swiper spaceBetween={30} slidesPerView={1}>
      {characters.map((char) => (
        <SwiperSlide key={char.id}>
          <CharacterCard name={char.name} image={char.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
