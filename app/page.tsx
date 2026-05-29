import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Model from "@/components/sections/Model";
import Practice from "@/components/sections/Practice";
import Fieldwork from "@/components/sections/Fieldwork";
import Playbook from "@/components/sections/Playbook";
import Manifesto from "@/components/sections/Manifesto";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Model />
        <Practice />
        <Fieldwork />
        <Playbook />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
