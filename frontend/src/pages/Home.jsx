import React from 'react'
import { useState, useEffect } from 'react';


const heroImages = [
  "/src/assets/DiamondGrindinginWarehouse.png",
  "/src/assets/SEF2CColour2024.png",
  "/src/assets/homepage-Section1.jpg",
];


const Home = () => {
      const [current, setCurrent] = useState(0);


  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* Background Slider */}
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt="Epoxy Flooring"
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>



      {/* Content */}
      <div className="
        relative z-10
        max-w-7xl mx-auto
        h-full
        flex items-center
        px-6 md:px-12
      ">

        <div className="max-w-3xl text-white">


          <p className="
            uppercase
            tracking-[4px]
            text-sm
            text-[#CC1F1F]
            font-semibold
            mb-5
          ">
            Premium Epoxy Flooring Solutions
          </p>


          <h1 className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            mb-6
          ">
            Transform Your Floors
            <br />
            With Durable Epoxy Coatings
          </h1>


          <p className="
            text-base
            md:text-lg
            text-white/80
            max-w-xl
            mb-8
          ">
            High-performance epoxy flooring systems designed for
            homes, warehouses, workshops and commercial spaces.
          </p>



          <div className="flex flex-wrap gap-4">


            <a
              href="#contact"
              className="
                bg-[#CC1F1F]
                hover:bg-[#b31a1a]
                text-white
                px-7 py-3
                rounded-md
                font-medium
                no-underline
                transition
              "
            >
              Get Free Quote →
            </a>



            <a
              href="#services"
              className="
                border
                border-white/60
                hover:bg-white
                hover:text-black
                text-white
                px-7 py-3
                rounded-md
                font-medium
                no-underline
                transition
              "
            >
              View Services
            </a>


          </div>

        </div>

      </div>



      {/* Slider Dots */}
      <div className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        gap-3
        z-20
      ">

        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-3 h-3 rounded-full
              transition
              ${
                current === index
                  ? "bg-[#CC1F1F]"
                  : "bg-white/50"
              }
            `}
          />
        ))}

      </div>


    </section>
  )
}

export default Home