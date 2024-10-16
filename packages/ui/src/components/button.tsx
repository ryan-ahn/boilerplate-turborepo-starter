import { Button, ButtonProps, cn, tv } from "@nextui-org/react";

const button = tv({
  base: "rounded-none font-medium",
  variants: {
    variant: {
      solid: "",
      bordered: "border-1 bg-background",
      light: "text-foreground bg-transparent",
    },
    rounded: {
      none: "",
      small: "rounded-small",
      medium: "rounded-medium",
      large: "rounded-large",
    },
    size: {
      sm: "text-small",
      md: "text-small font-bold",
      lg: "text-medium h-14 px-4 py-3 font-bold",
    },
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      danger: "bg-danger",
      warning: "bg-warning",
      success: "bg-success",
      default: "bg-background",
    },
  },
  compoundVariants: [
    {
      variant: ["solid"],
      color: ["default"],
      className: "bg-foreground text-background",
    },
    {
      variant: ["bordered"],
      color: ["default"],
      className: "border-default-500 text-foreground",
    },
    {
      variant: ["bordered"],
      color: ["primary"],
      className: "border-primary-300 text-primary",
    },
    {
      variant: ["bordered"],
      color: ["secondary"],
      className: "border-secondary-300 text-secondary",
    },
  ],
  defaultVariants: {
    variant: "solid",
    rounded: "none",
    size: "md",
    color: "default",
  },
});

export const ButtonV1 = ({
  className,
  variant,
  rounded,
  size,
  color,
  as,
  to,
  children,
  ...rest
}: {
  className?: string;
  variant?: "solid" | "bordered" | "light";
  rounded?: "none" | "small" | "medium" | "large";
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary";
  as?: React.RefAttributes<HTMLAnchorElement>;
  to?: string;
  children: React.ReactNode;
} & ButtonProps) => {
  return (
    <Button
      as={as}
      to={to}
      className={cn(button({ variant, rounded, size, color }), className)}
      {...rest}
    >
      {children}
    </Button>
  );
};
