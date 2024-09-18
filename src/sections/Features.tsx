import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { Card } from "../components/Card";
import { Demo } from "../components/Demo";
import { Details } from "../components/Details";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import Image from "next/image";

const InlineSVG = () => (
  <div className="w-32 h-32">
    {" "}
    {/* Adjust width and height as needed */}
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 146.7 98.65"
      className="w-full h-full"
    >
      <defs>
        <style>
          {`
            .cls-2 {
              stroke-dasharray: 0 0 12.07 6.03;
            }
            .cls-2, .cls-3 {
              fill: none;
              stroke-miterlimit: 10;
              stroke-width: 1px;
            }
          `}
        </style>
      </defs>
      <path className="cls-3 stroke-current" d="m4.01.13s-.96,1.52-1.92,5.66" />
      <path
        className="cls-2 stroke-current"
        d="m1.07,11.74c-.56,4.39-.93,10.25-.79,17.96.15,8.26.94,38.89,29.69,39.32s27.75-38.46,12.8-33.18c-14.95,5.28-14.41,26.31,20.51,18.58,34.92-7.72,67.32-27.66,79.13-5.03s-15.86,32.67-31.33,32.5c-19.55-.22-31.76-26.61-45.49-15.02-9.93,8.38-2.36,15.19,2.01,22.7"
      />
      <path
        className="cls-3 stroke-current"
        d="m68.98,92.27c.81,1.88,1.28,3.81,1.12,5.84"
      />
      <polygon
        className="cls-1 fill-current"
        points="68.08 96.38 68.46 96.05 70.07 97.91 71.81 96.17 72.17 96.52 70.05 98.65 68.08 96.38"
      />
    </svg>
  </div>
);

const BlockTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-xl font-bold text-strong text-neon-amber">
      {children}
    </h3>
  );
};

const BlockText = ({ children }: { children: ReactNode }) => {
  return <p className="text-light">{children}</p>;
};

const Block = ({ children }: { children: ReactNode }) => {
  return (
    <Card grayer className="items-center gap-1 p-6 col">
      {children}
    </Card>
  );
};

const FeatureSection = ({
  children,
  grayer,
  right,
  center,
}: {
  children: ReactNode;
  grayer?: boolean;
  right?: boolean;
  center?: boolean;
}) => (
  <Section
    grayer={grayer}
    fullWidth
    className={`flex col items-center ${
      center ? "text-center" : right ? "md:flex-row-reverse" : "md:flex-row"
    }`}
  >
    {children}
  </Section>
);

const FeatureDemo = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    webmSrc: string;
    mp4Src: string;
    bumpLeft?: boolean;
    center?: boolean;
    className: string;
    alt: string;
    roundedCorners?: boolean;
    scaleDown?: boolean;
  },
) => {
  const { webmSrc, mp4Src, bumpLeft, center, alt, className, ...divProps } =
    props;

  return (
    <Demo
      data-aos={`${
        center ? "zoom-y-out" : bumpLeft ? "fade-right" : "fade-left"
      }`}
      data-aos-delay="300"
      webmSrc={webmSrc}
      mp4Src={mp4Src}
      alt={alt}
      roundedCorners={false}
      scaleDown={true}
    />
  );
};

const Text = ({
  children,
  center,
}: {
  children: ReactNode;
  center?: boolean;
}) => (
  <div
    className={`w-5/6 col gap-4 text-center mb-8 mx-auto ${
      center ? "md:w-2/3" : "md:w-2/5 md:text-left md:my-auto"
    }`}
  >
    {children}
  </div>
);

export const Features = () => {
  return (
    <>
      <FeatureSection grayer center>
        <div className="bg-neon-pink text-white p-24 rounded-lg  mx-auto">
          <ul className="list-none space-y-4">
            <li>
              - <span className="text-neon-blue font-bold">Days</span> spent
              brainstorming ✅
            </li>
            <li>
              - <span className="text-neon-blue font-bold">Weeks</span> getting
              your design just right ✅
            </li>
            <li>
              - <span className="text-neon-blue font-bold">Months</span>{" "}
              building your product ✅
            </li>
            <li>
              - <span className="text-neon-blue font-bold">Headaches</span>{" "}
              figuring out your brand ✅
            </li>
            <li>
              - <span className="text-neon-blue font-bold">Money</span> spent on
              advertising ✅
            </li>
            <li>
              - <span className="text-neon-blue font-bold">Time</span>{" "}
              sacrificed to build your company ✅
            </li>
            <li>
              - <span className="text-neon-blue font-bold">Investments</span>{" "}
              into growth and sales ✅
            </li>
            <li>
              - <span className="text-neon-blue font-bold">Customers</span> make
              purchases ❌
            </li>
          </ul>
          <p className="mt-4 text-center text-md font-bold">
            You invested too much to not get your rewards
          </p>
        </div>
        <p className="mt-12 text-center text-lg text-neon-amber font-bold">
          We've Been There. Here's our solution
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 inline-block ml-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
              fill="currentColor"
            />
          </svg>
        </p>
      </FeatureSection>

      <FeatureSection grayer center>
        <Text center>
          <Title size="md">
            Remind Your Customer Why They
            <span
              className="bg-neon-amber italic px-1 ml-1 mr-1"
              style={{ lineHeight: "1.2" }}
            >
              NEED
            </span>
            You.
          </Title>
          <Details>
            Popup's are your way to talk to your customers. Show your value,
            show your trusted. Make your product a nescessity
          </Details>
        </Text>
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          <Block>
            <BlockTitle>Social Proof</BlockTitle>
            <BlockText>Increase conversion rates by 15% on average</BlockText>
            <div className="relative mt-4">
              <img
                src={"/images/TrustPopup.png"}
                alt="SellMore Logo"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </Block>
          {/* Block 2 */}
          <Block>
            <BlockTitle>Reviews</BlockTitle>
            <BlockText>Build trust by displaying reviews</BlockText>
            <div className="relative mt-4">
              <img
                src={"/images/ReviewPopup.png"}
                alt="SellMore Logo"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </Block>
          {/* Block 3 */}
          <Block>
            <BlockTitle>New Product Notifs</BlockTitle>
            <BlockText>Highlight and direct traffic to new products</BlockText>
            <div className="relative mt-4">
              <img
                src={"/images/SalePopup.png"}
                alt="SellMore Logo"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </Block>
        </div>
      </FeatureSection>

      {/* Feature 3 */}

      <FeatureSection right>
        <Text>
          <Title size="md">
            <span className="text-neon-pink">Set it up in seconds</span>
          </Title>
          <Details>
            No coding needed
            <ul className="list-disc pl-5 mt-2">
              <li>Choose custom text, images, color and more.</li>
              <li>Copy and paste our script</li>
              <li>Your done!</li>
            </ul>
          </Details>
        </Text>

      <Demo
        data-aos="fade-left"
        webmSrc="/videos/demo.webm"
        mp4Src="/videos/demo.mp4"
        alt="A demo showing SellMore's functionality"
        roundedCorners={true}
      />
      </FeatureSection>
    </>
  );
};
