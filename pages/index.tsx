import { useRef } from "react";
import Head from "next/head";
import { Features } from "../src/sections/Features";
import { FeatureBlocks } from "../src/sections/FeatureBlocks";
import { Footer } from "../src/sections/Footer";
import { Header } from "../src/sections/Header";
import { Hero } from "../src/sections/Hero";
import { Newsletter } from "../src/sections/Newsletter";
import { Pricing } from "../src/sections/Pricing";
import { FAQSection } from "../src/sections/FAQ";

const Home = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-hidden col text-strong">
           <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, r) { 
                w[r] = w[r] || function() { 
                  (w[r].q = w[r].q || []).push(arguments); 
                }; 
              })(window, 'customConfig'); 
              customConfig({ siteId: '66f16a1ef620f7de79a64593' });
            `,
          }}
        />
        <script src="https://app.sellmore.live/scripts/script.js" async></script>
      </Head>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero onScrollToPricing={scrollToPricing} />
        <Features />
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <FAQSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
