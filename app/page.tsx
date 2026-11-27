import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Downloads from "@/components/home/Downloads";
import Ebooks from "@/components/home/Ebooks";
import Hero from "@/components/home/Hero";
import LeadMagnet from "@/components/home/LeadMagnet";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Ebooks />
        <Downloads />
        <LeadMagnet />
      </main>
      <Footer />
    </>
  );
}
