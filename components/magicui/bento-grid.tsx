import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name?: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description?: string;
  href?: string;
  cta?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-secondary border-2",
      // dark styles
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 ">
        {Icon && (
          <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out hidden md:block" />
        )}
        {name && (
          <h3 className="text-lg font-normal text-neutral-500 dark:text-neutral-300">
            {name}
          </h3>
        )}
        {description && (
          <p className="max-w-lg text-xl font-medium hidden md:block text-black">
            {description}
          </p>
        )}
      </div>

      {href && cta && (
        <div className="lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            variant="link"
            asChild
            size="sm"
            className="pointer-events-auto p-0"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
            </a>
          </Button>
        </div>
      )}
    </div>

    {href && cta && (
      <div className="hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center ml-2 py-4 px-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href} className="bg-secondary">
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    )}
  </div>
);

export { BentoCard, BentoGrid };
