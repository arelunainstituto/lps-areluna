import type { Procedure } from "../data/types";
import Nav from "./Nav";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Mechanism from "./Mechanism";
import Differentials from "./Differentials";
import Process from "./Process";
import Compare from "./Compare";
import Gallery from "./Gallery";
import Professionals from "./Professionals";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import FinalCta from "./FinalCta";
import Footer from "./Footer";

export default function LandingPage({ p }: { p: Procedure }) {
  return (
    <main className="relative">
      <Nav p={p} />
      <Hero p={p} />
      <TrustBar p={p} />
      <Mechanism p={p} />
      <Differentials p={p} />
      <Process p={p} />
      <Compare p={p} />
      <Gallery p={p} />
      <Professionals p={p} />
      <Testimonials p={p} />
      <Faq p={p} />
      <FinalCta p={p} />
      <Footer p={p} />
    </main>
  );
}
