import Image from "next/image";
import Hero from "@/src/components/Hero";
import Demo from "@/src/components/Demo";
import Problem from "@/src/components/Problem";
import Features from "@/src/components/Features";
import FounderSection from "../components/Founder";
import Footer from "../components/Footer";


export default function Home() {
  return (
  <>
   <Hero /> 
   <Demo />
   <Problem />
   <Features />
   <FounderSection />
   <Footer />
  </>
  );
}
