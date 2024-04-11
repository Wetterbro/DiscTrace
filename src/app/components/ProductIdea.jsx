import React, { useState } from 'react';
import Link from "next/link";

const ProductIdea = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Keep Your Game on Course:
              </h1>
              <h2 className="mb-8 text-xl font-bold text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-900">
                  DiscTrace, Where Lost Discs Find Their Way Home
              </h2>

              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                  Introducing DiscTrace – the innovative solution to the age-old frustration of lost disc golf discs.
                  DiscTrace integrates RFID technology into every disc,
                  allowing players to easily track and recover their lost discs using a simple mobile app.
                  Say goodbye to fading marker pen names and hello to a seamless disc identification process.
                  Whether it's nestled in thick underbrush or submerged in water hazards, DiscTrace ensures your disc
                  always finds its way back to you.
                  Plus, with the added convenience of score tracking and personalized disc reviews, DiscTrace
                  revolutionizes the disc golf experience from start to finish.
                  Never lose your favorite disc again – with DiscTrace, every throw counts.
              </p>
              <marquee className="mt-4 text-base font-italic" behavior="scroll" direction="left" scrollamount="3">
                  🥏 Swoooooooosh ---- --- -- - 
              </marquee>
          </div>
      </section>

        <section className='flex justify-center'>
            <Link href="/productpage">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Go to prototype page
        </button>
      </Link>
  

      </section>

    </div>
  );
};

export default ProductIdea;
