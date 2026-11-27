import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Downloads from "@/components/home/Downloads";
import Ebooks from "@/components/home/Ebooks";
import Hero from "@/components/home/Hero";
import LeadMagnet from "@/components/home/LeadMagnet";
import Myths from "@/components/home/Myths";
import Recovery from "@/components/home/Recovery";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Recovery />
        <Myths />
        <Downloads />
        <Ebooks />
        <LeadMagnet />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
