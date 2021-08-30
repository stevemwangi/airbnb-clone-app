import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import Featured from "../components/Featured";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardData, data }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(card => (
              <MediumCard title={card.title} img={card.img} key={card.img} />
            ))}
          </div>
        </section>
        <section className="pt-5 relative">
          <LargeCard />
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-6 leading-tight">
            Discover things to do
          </h2>
          <div className="grid grid-cols-3 gap-2 place-content-center">
            {data.map(imageItem => (
              <Featured
                key={imageItem.img}
                img={imageItem.img}
                title={imageItem.title}
                subtitle={imageItem.subtitle}
              />
            ))}
          </div>
        </section>
        <section>
          <h3 className="font-medium text-2xl mt-3.5">
            Inspiration for future getaways
          </h3>
          <div>
            <Destinations />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(res =>
    res.json()
  );
  const cardData = await fetch("https://links.papareact.com/zp1").then(res =>
    res.json()
  );

  const data = require("../components/stuff.json");
  const destinations = require("../components/destinations.json");

  return {
    props: {
      exploreData,
      cardData,
      data,
      destinations
    }
  };
}
