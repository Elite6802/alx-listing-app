import Head from 'next/head';
import Card from '../components/common/Card';
import { LISTINGS, APP_NAME } from '../constants';

export default function Home() {
  const handleCta = (id: string) => {
    // Placeholder action for now — replace with routing later
    // eslint-disable-next-line no-alert
    alert(`You clicked Book on ${id}`);
  };

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="A modern Airbnb-style listing page scaffold" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tight">{APP_NAME}</h1>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LISTINGS.map((listing) => (
              <Card
                key={listing.id}
                id={listing.id}
                title={listing.title}
                location={listing.location}
                pricePerNight={listing.pricePerNight}
                imageUrl={listing.imageUrl}
                onCtaClick={handleCta}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
