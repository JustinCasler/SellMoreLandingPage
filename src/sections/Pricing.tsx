import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { Button } from "../components/Button";
import { FRONTEND_URL } from "../constants";

// Example SVG checkmark component
const CheckmarkIcon = () => (
  <svg
    className="w-4 h-4 text-green-500 inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// Define the props interface for the PricingCard component
interface PricingCardProps {
  title: string;
  oldPrice: string;
  price: string;
  features: string[];
  ctaText: string;
  redirectUrl: string;
  isPro?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  oldPrice,
  price,
  features,
  ctaText,
  redirectUrl,
  isPro = false,
}) => {
  const handleRedirect = () => {
    window.open(redirectUrl, "_blank");
  };

  return (
    <Card
      className={`items-start gap-4 p-8 pt-10 body-lg col text-medium text-left ${
        isPro ? "border-2 border-neon-amber" : ""
      } w-[24rem] h-96 relative`}
    >
      {isPro && (
        <div className="absolute top-[-.75rem] left-1/2 transform -translate-x-1/2 bg-neon-amber text-white text-xs font-bold px-4 py-1 rounded-full">
          Popular
        </div>
      )}
      <div className="mb-4">
        <Title size="sm">{title}</Title>
        <div className="flex items-baseline">
          <span className="text-sm line-through text-gray-400">{oldPrice}</span>
          <span className="ml-4 text-2xl font-bold text-black">{price}</span>
          <span className="ml-1 text-xs text-gray-400">USD</span>
        </div>
      </div>
      <ul className="mb-4 space-y-2">
        {features.map((feature, index) => {
          const highlight = isPro && feature.includes("Unlimited");
          const parts = highlight ? feature.split(/(Unlimited)/g) : [feature];

          return (
            <li
              key={index}
              className="text-sm text-light flex items-center space-x-2"
            >
              <CheckmarkIcon />
              <span className="relative">
                {parts.map((part, idx) => (
                  <span
                    key={idx}
                    className={
                      part === "Unlimited" && highlight
                        ? "bg-neon-pink px-1 rounded"
                        : ""
                    }
                  >
                    {part}
                  </span>
                ))}
              </span>
            </li>
          );
        })}
      </ul>
      <Button className="mt-auto w-full bg-neon-blue" onClick={handleRedirect}>
        {ctaText}
      </Button>
    </Card>
  );
};

export const Pricing = () => {
  return (
    <Section grayer className="text-center">
      {/* Header */}
      <div className="gap-2 mb-4 col">
        <Title size="md">Invest In Your Company</Title>
        <Details>For the price of a dinner</Details>
      </div>
      <p className="text-lg font-semibold mb-6">
        $10 off for the first 1000 customers
      </p>
      {/* Pricing Plans */}
      <div className="gap-10 md:gap-4 col md:row mx-auto text-center">
        {/* Basic Plan */}
        <PricingCard
          title="Basic"
          oldPrice="$25"
          price="$18"
          features={[
            "Unlimited Popups",
            "Unlimited Websites",
            "Monitor Traffic",
            "Tech Support",
          ]}
          ctaText="Get SellMore"
          redirectUrl={FRONTEND_URL}
        />
        {/* Pro Plan */}
        <PricingCard
          title="Pro"
          oldPrice="$35"
          price="$25"
          features={[
            "Unlimited Popups",
            "Unlimited Websites",
            "Monitor Traffic",
            "Tech Support",
          ]}
          ctaText="Get SellMore"
          redirectUrl={FRONTEND_URL}
          isPro={true}
        />
      </div>
    </Section>
  );
};
