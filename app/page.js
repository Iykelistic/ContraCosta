import HeroSection from "./components/HeroSection";
import HomeSections from "./components/HomeSections";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <HeroSection />
      <HomeSections />
      <SiteFooter />
    </main>
  );
}
