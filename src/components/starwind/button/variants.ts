import { tv } from "tailwind-variants";

export const button = tv({
  base: [
    "inline-flex items-center justify-center gap-1.5 rounded-md whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "transition-all outline-none focus-visible:ring-3",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "aria-invalid:border-error aria-invalid:focus-visible:ring-error/40",
  ],
  variants: {
    variant: {
      default: "bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-outline/50",
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:ring-secondary/50",
      outline: "dark:border-input focus-visible:ring-outline/50 bg-background dark:bg-input/30 focus-visible:border-outline hover:bg-muted dark:hover:bg-input/50 hover:text-foreground border shadow-xs",
      ghost: "hover:bg-muted hover:text-foreground focus-visible:ring-outline/50",
      info: "bg-info text-info-foreground hover:bg-info/90 focus-visible:ring-info/50",
      success: "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/50",
      warning: "bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/50",
      error: "bg-error text-error-foreground hover:bg-error/90 focus-visible:ring-error/50",
      hero_button: 'bg-transparent text-white uppercase w-fit rounded-none p-0 m-0 text-shadow-md hover:border-b-1 hover:border-white',
      users_overview_button: 'uppercase text-white text-shadow-md tracking-wider bg-transparent w-fit h-fit p-0 px-0 m-0 hover:bg-transparent',
      game_and_levels_overview_button: 'flex flex-col gap-1 p-0 m-0 h-fit w-fit bg-transparent hover:bg-transparent'
    },
    size: {
      sm: "h-9 px-4 text-sm has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-3.5",
      md: "h-11 px-5 text-base has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-4.5",
      lg: "h-12 px-8 text-lg has-[>svg]:px-6 [&_svg:not([class*='size-'])]:size-5",
      xl: "h-14 px-10 text-xl has-[>svg]:px-8 [&_svg:not([class*='size-'])]:size-6",
      "2xl": "text-2xl has-[>svg]:px-10 [&_svg:not([class*='size-'])]:size-7",
      "3xl": "text-3xl has-[>svg]:px-12 [&_svg:not([class*='size-'])]:size-8 data-[slot=button]:",

      "icon-sm": "size-9 [&_svg:not([class*='size-'])]:size-3.5",
      icon: "size-11 [&_svg:not([class*='size-'])]:size-4.5",
      "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
