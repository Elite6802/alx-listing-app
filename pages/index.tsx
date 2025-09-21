import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { HERO_BG_IMAGE } from '@/lib/constants';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Airbnb Clone - Find Your Favorite Place</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={HERO_BG_IMAGE}
                alt="Beautiful property"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-4">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
                Find your favorite place here!
              </h1>
              <p className="mt-4 text-lg md:text-2xl font-medium drop-shadow-md">
                The best prices for over 2 million properties worldwide.
              </p>
            </div>
          </section>

          {/* Additional content can be added here later */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
