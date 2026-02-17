import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Rules from "@/components/Rules";
import Committee from "@/components/Committee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Rules />
      <Committee />
      <Footer />
    </div>
  );
};

export default Index;
