import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "./Button";

export const WaitlistForm = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    id: string;
  },
) => {
  const { id, ...divProps } = props;

  const email = "developedlastweek@gmail.com";

  const mailtoLink = `mailto:${email}?subject=SellMore%20|`;

  return (
    <div {...divProps} className={twMerge("col", divProps.className)}>
      <div className="relative gap-2 md:gap-4 row">
        {/* Display the email with rounded rectangle background */}
        <p
          id={id}
          className="px-4 py-2 bg-custom-light-lighter rounded-lg text-lg text-gray-800"
        >
          {email}
        </p>
        <Button
          type="button"
          onClick={() => (window.location.href = mailtoLink)}
        >
          Email Us
        </Button>
      </div>
    </div>
  );
};
