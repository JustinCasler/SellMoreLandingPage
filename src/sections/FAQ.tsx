import React, { useState, ReactNode } from 'react';
import { Section } from "../components/Section";
import { Title } from "../components/Title";

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

// FAQItem component to handle individual questions and answers
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-300 dark:border-gray-700">
        <button
          className={`w-full py-4 text-left font-bold text-lg flex justify-between items-center ${
            isOpen ? 'text-neon-blue' : 'text-gray-900 dark:text-gray-100'
          } focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <span
            className={`transform transition-transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
        {isOpen && (
          <div className="p-4 text-gray-700 dark:text-gray-300">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  };

// FAQSection component to display multiple FAQ items
export const FAQSection = () => {
  return (
    <FeatureSection>
      <div className="container mx-auto px-4">
        <Title size="md">
          FAQ
        </Title>
        <div className="mt-8">
            <FAQItem
            question="Can I track how many visitors my site gets?"
            answer="Yes! We track your unique site visitors to display on popups and for your information."
          />
          <FAQItem
            question="Is it a monthly subscription?"
            answer="No! If you purchase, you own it. FOREVER :)"
          />
          <FAQItem
            question="Is it compatible with..."
            answer="Wordpress, Shopify, Webflow, Wix, etc. are all supported. If you can add a code snippet (script) to your website, we are good 2 go."
          />
          <FAQItem
            question="What if I don't know how to add a code snippet?"
            answer="Dont worry! It's super simple, each website builder has tutorials, and if those don't work our support team will walk you through where to paste your snippet."
          />
          <FAQItem
            question="How much controll do I have on the popup design?"
            answer="A lot... You can choose the title, body, image, color, transparancy, when and where it comes up, if you want to show # of visitors."
          />
        </div>
      </div>
    </FeatureSection>
  );
};

export default FAQSection;
