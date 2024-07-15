import About from "@/components/About";
import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurStory from "@/components/OurStory";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-[#FFFFFF] h-auto ">
      <div className=" max-w-6xl  mx-auto">
      <Header />
      <Partners />

      <div className="mt-20">
      <About />
      </div>
      </div>
      <div className="mt-20">
      <CallToAction />
      </div>
      <Reviews />
      <OurStory />
      <Blog />
      <Footer />
    </main>
  );
}
