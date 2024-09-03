import { useState, useRef } from "react";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { Demo } from "../components/Demo";
import { Section } from "../components/Section";

export const Hero: React.FC<{ onScrollToPricing: () => void }> = ({ onScrollToPricing }) => {
  return (
    <Section
      className="items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 col md:flex-row"
    >
      <div className="z-10 gap-4 text-center col md:text-left">
        <Title size="lg">
          We Help You <span className="text-neon-blue">Sell More.</span>
          <br />
          <u><i>that's it.</i></u>
        </Title>
        <Details>
          A no code way to increase brand trust and sales. A tool that will pay for itself multiple times over.
        </Details>
        <button
          className="mt-6 px-8 py-4 text-lg font-bold text-neon-blue border-2 border-neon-blue rounded-lg bg-transparent hover:bg-neon-blue hover:text-gray-50 transition-colors"
          onClick={onScrollToPricing} // Scroll to pricing section on button click
        >
          Get SellMore
        </button>
      </div>
      <Demo
        data-aos="fade-left"
        webmSrc="/videos/hero.webm"
        mp4Src="/videos/hero.mp4"
        alt="A video showing Vivid's functionality including command palette, style preview, code pane, and mouse resizing"
        roundedCorners={true}
      />
    </Section>
  );
};
