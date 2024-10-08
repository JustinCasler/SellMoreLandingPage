import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const GradientText = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
) => {
  return (
    <span
      {...props}
      className={twMerge("bg-text bg-gradient-to-r", props.className)}
    />
  );
};
