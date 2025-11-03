declare module 'framer-motion' {
  import * as React from 'react';

  // Define basic types for motion components
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
    whileInView?: any;
    [key: string]: any;
  }

  // Create motion components
  export type Motion = {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      MotionProps & JSX.IntrinsicElements[K] & React.RefAttributes<HTMLElement>
    >;
  };

  // Export motion components
  export const motion: Motion & {
    custom: <T extends React.ElementType>(
      Component: T
    ) => React.ForwardRefExoticComponent<
      MotionProps & React.ComponentPropsWithoutRef<T> & React.RefAttributes<unknown>
    >;
  };

  // AnimatePresence
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
    initial?: boolean;
    exitBeforeEnter?: boolean;
    onExitComplete?: () => void;
    mode?: 'sync' | 'wait' | 'popLayout';
  }

  export const AnimatePresence: React.FC<AnimatePresenceProps>;

  // Animation controls
  export const useAnimation: () => any;
  export const useMotionValue: (initial: number) => any;
  export const useTransform: <T>(
    value: any,
    inputRange: any[],
    outputRange: any[]
  ) => any;
  export const useSpring: (props: any) => any;
  export const useScroll: () => any;
  export const useInView: (options?: any) => any;

  // Export commonly used functions
  export const useCycle: <T>(...args: T[]) => [T, (next?: number) => void];
}