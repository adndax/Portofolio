"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@lib";
import Image from "next/image";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

// Define the interface for the props
interface ThreeDCardDemoProps {
  title: string;
  jobs: string;
  description: string;
  imageSrc: string;
  link: string;
  icons: React.ReactNode[];
}

// Functional component accepting props
export function ThreeDCardDemo({
  title,
  jobs,
  description,
  imageSrc,
  link,
  icons,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-[20rem] sm:w-[25rem] h-full min-h-[480px] rounded-xl p-5 border flex flex-col">
        {/* Title */}
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        
        {/* Jobs (role) */}
        <CardItem translateZ="60" className="text-neutral-200 text-sm mb-4">
          {jobs}
        </CardItem>
        
        {/* Description */}
        <CardItem as="p" translateZ="70" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4">
          {description}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4 mb-4">
          <Image
            src={imageSrc}
            height="800"
            width="800"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="project-thumbnail"
          />
        </CardItem>

        <div className="flex flex-row justify-between mt-auto">
          <div className="flex flex-row gap-2">
            {/* Displaying icons dynamically */}
            {icons.map((icon, index) => (
              <CardItem key={index} translateZ={20} className="flex items-center gap-2">
                {icon}
              </CardItem>
            ))}
          </div>

          {/* Button */}
          <CardItem translateZ={20} as="a" href={link} target="__blank" className="flex items-center gap-2">
            <FaExternalLinkAlt size={20} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-2 sm:py-5 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & React.ComponentPropsWithRef<"div"> & React.ComponentPropsWithRef<"a">) => { // Menggunakan `ComponentPropsWithRef` untuk menangani properti `href`
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();
  
  useEffect(() => {
    const handleAnimations = () => {
      if (!ref.current) return;
      if (isMouseEntered) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    };
    handleAnimations();
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};


// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};