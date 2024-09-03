import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type DemoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  webmSrc: string;
  mp4Src: string;
  alt: string;
  roundedCorners?: boolean;
  scaleDown?: boolean; // New prop for optional scaling down
};

export const Demo = (props: DemoProps) => {
  const { webmSrc, mp4Src, alt, roundedCorners = true, scaleDown = false, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={twMerge(
        "relative col w-full justify-center max-w-2xl overflow-hidden shadow-lg",
        scaleDown ? "transform scale-75" : "", 
        roundedCorners ? "rounded-2xl" : "", // Apply rounded corners to the parent div
        divProps.className
      )}
      style={{ transformOrigin: "center" }} 
    >
      {webmSrc && mp4Src && (
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
          tabIndex={-1}
          className={twMerge(
            "object-cover h-full w-full", // Adjust to ensure the video fits the container
          )}
        >
          <source src={mp4Src} type="video/mp4" />
          <source src={webmSrc} type="video/webm" />
        </video>
      )}
    </div>
  );
};