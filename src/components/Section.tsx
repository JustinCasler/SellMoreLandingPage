import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// Built with Vivid (https://vivid.lol) ⚡️

export const Section = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    grayer?: boolean;
    fullWidth?: boolean;
  }
) => {
  const { grayer, fullWidth, ...divProps } = props;


  return (
    <section
      className={`relative overflow-hidden ${
        grayer ? "bg-strong" : "bg-extra-strong"
      }`}
    >
      <div
        {...divProps}
        className={twMerge(
          `relative z-20 py-24 mx-auto col max-w-7xl ${
            fullWidth ? "px-0" : "px-12"
          }`,
          props.className
        )}
      />
    </section>
  );
};
