import Image from "next/image";
import { LinkButton } from "../components/LinkButton";



export const Footer = () => {
  return (
    <footer className="bg-extra-strong">
      <div className="items-center justify-between px-10 py-4 mx-auto sm:px-6 row max-w-7xl">
        <div className="items-center gap-4 row">
          <Image
            src="/images/logo.png"
            alt="SellMore Logo"
            height="40"
            width="40"
          />
          <div className="text-sm text-light">&copy; SellMore, 2024</div>
        </div>
      </div>
    </footer>
  );
};
