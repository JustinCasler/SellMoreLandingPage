import { ReactNode } from "react";

import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

// Built with Vivid (https://vivid.lol) ⚡️

const BlockTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-bold text-strong">{children}</h3>;
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

export const FeatureBlocks = () => {
  return (
    <Section className="gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          What is <GradientText className="purple-teal">SellMore</GradientText>
        </Title>
        <Details>
          Implement our product in any use case you want. But here are 3
          suggestions:
        </Details>
      </div>
      {/* Blocks */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {/* Block 1 */}
        <Block>
          <ShuffleIcon />
          <BlockTitle>Social Proof</BlockTitle>
          <BlockText>Increase conversion rates by 15% on average</BlockText>
        </Block>
        {/* Block 2 */}
        <Block>
          <SignalIcon />
          <BlockTitle>Advertising Push Notifs</BlockTitle>
          <BlockText>Remind users why they need your product</BlockText>
        </Block>
        {/* Block 3 */}
        <Block>
          <TalkingIcon />
          <BlockTitle>New Product Spotlight</BlockTitle>
          <BlockText>Highlight and direct traffic to new products</BlockText>
        </Block>
        {/* Block 4 */}
        {/*
        <Block>
          <DoorIcon />
          <BlockTitle>Production-ready code</BlockTitle>
          <BlockText>
            Modify your styling in-browser and update your IDE with code that
            looks like your own
          </BlockText>
        </Block>

        <Block>
          <CardsIcon />
          <BlockTitle>Your workflow</BlockTitle>
          <BlockText>
            Keep using your browser and IDE without needing an extra window
          </BlockText>
        </Block>

        <Block>
          <MagicIcon />
          <BlockTitle>Smarter inspect element</BlockTitle>
          <BlockText>
            Understand and modify the components making up your design with just
            one click
          </BlockText>
        </Block>
        */}
      </div>
    </Section>
  );
};
