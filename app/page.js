import AboutSection from "./components/AboutSection";
import BackToTop from "./components/BackToTop";
import HeroSection from "./components/HeroSection";
import RevealOnScroll from "./components/RevealOnScroll";
import PreFooterSection from "./components/PreFooterSection";
import ShowcaseSection from "./components/ShowcaseSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <HeroSection />
      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ShowcaseSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <PreFooterSection />
      </RevealOnScroll>
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
