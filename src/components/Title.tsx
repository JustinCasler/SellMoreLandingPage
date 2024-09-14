import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Title = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > & { size: "lg" | "md" | "sm" }, // Added "sm" option
) => {
  const { size, className = "", ...htmlProps } = props;

  const headingProps = {
    ...htmlProps,
    "data-aos": "zoom-y-out",
  };

  if (size === "lg") {
    return (
      <h1
        {...headingProps}
        className={twMerge(
          "font-bold leading-tight tracking-tighter title-lg",
          className,
        )}
      />
    );
  } else if (size === "md") {
    return (
      <h2
        {...headingProps}
        className={twMerge(
          "font-bold leading-tight tracking-tighter title-md",
          className,
        )}
      />
    );
  } else {
    return (
      <h3
        {...headingProps}
        className={twMerge(
          "leading-tight tracking-tighter title-xs",
          className,
        )}
      />
    );
  }
};
