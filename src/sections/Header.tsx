import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";

import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Moon, Sun } from "../svg/DarkModeIcons";
import { FRONTEND_URL } from "../constants";

export const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  // Handle scrolling logic
  const handleScroll = () => {
    setTop(window.pageYOffset <= 10);
    setNextSection(window.pageYOffset > window.innerHeight);
  };
  useEventListener("scroll", handleScroll);

  // Clean up stale dark mode
  useEffectOnce(() => setReloaded(true));

  const goToEmail = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Logo = () => (
    <Link href="/">
      <div className="items-center block gap-1 row">
        <div className="text-3xl font-bold">
          <div className="items-center gap-2 row">
            <Image
              src="/images/logo.png"
              alt="SellMore Logo"
              height="80"
              width="80"
            />
            <span className="text-neon-blue">SellMore</span>
          </div>
        </div>
      </div>
    </Link>
  );

  const Navigation = () => (
    <nav>
      <ul className="items-center gap-2 row">
        {reloaded ? ( // Only show after first reload
          <li>
            <LinkButton
              button
              onClick={toggleDarkMode}
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </LinkButton>
          </li>
        ) : null}
        <li>
          <LinkButton href={FRONTEND_URL}>Sign In</LinkButton>
        </li>
      </ul>
    </nav>
  );

  return (
    // Colors must be set explicitly since opacity and blur don't work together
    <header
      className={`fixed w-full z-30 transition duration-300 ${
        !top &&
        "bg-custom-light/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      {/* Header Content */}
      <div className="items-center justify-between h-16 px-5 mx-auto row md:h-20 max-w-7xl sm:px-6">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
