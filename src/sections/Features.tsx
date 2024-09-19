import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { Card } from "../components/Card";
import { Demo } from "../components/Demo";
import { Details } from "../components/Details";
import { Section } from "../components/Section";
import { Title } from "../components/Title";


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

        <div className="px-4"> {/* Add padding around the Demo */}
          <Demo
            data-aos="fade-left"
            webmSrc="/videos/demo.webm"
            mp4Src="/videos/demo.mp4"
            alt="A demo showing SellMore's functionality"
            roundedCorners={true}
          />
        </div>
      </FeatureSection>
    </>
  );
};
