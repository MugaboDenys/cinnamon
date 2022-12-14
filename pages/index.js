import Head from "next/head";
import Image from "next/image";
import Design from "../components/Design";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image25 from "../public/image(25).png";
import image20 from "../public/image(20).png";
import image18 from "../public/image(18).png";
import Ourservices from "../components/Ourservices";
import Agile from "../components/Agile";
import Ping from "../components/Ping";
import Whoweare from "../components/Whoweare";
import College from "../components/College";
import Grow from "../components/Grow";
import Offices from "../components/offices";
import Prefooter from "../components/Prefooter";
import Topics from "../components/Topics";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cinnamon | All software, zero bullshit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Hero />
        <Design
          bg={"bg-limegreen"}
          image = {image25}
          product={"Quality Assurance"}
          description={" Corrily: Optimize prices to maximize revenue"}
          paragraph={
            "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
          }
        />
        <Design
          bg={"bg-purple"}
          image = {image18}
          product={"web development"}
          description={" Fiona: Engage &Decide"}
          paragraph={
            "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
          }
        />
        <Design
          bg={"bg-banana"}
          image = {image20}
          product={"web development"}
          description={`Ukulele: \n The largest ukulele tabs archive`}
          paragraph={
            "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
          }
        />
        <Ourservices/>
        <Agile/>
        <Ping/>
        <Whoweare/>
        <College/>
        <Grow/>
        <Offices/>
        <Topics/>
        <Prefooter/>
      </main>
    </div>
  );
}
