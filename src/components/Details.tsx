import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// Built with Vivid (https://vivid.lol) ⚡️

export const Details = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>, // Changed to HTMLDivElement
    HTMLDivElement
  >,
) => {
  return (
    <div // Changed to <div>
      {...props}
      data-aos="zoom-y-out"
      data-aos-delay="150"
      className={twMerge("body-lg text-light", props.className)}
    />
  );
};
