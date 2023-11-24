import { cn } from '@nextui-org/react';

import type { PropsWithChildren } from 'react';

interface TextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

  color?: string;

  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';

  align?: 'left' | 'center' | 'right' | 'justify';

  overflow?: 'truncate' | 'overflow-ellipsis' | 'overflow-clip';
  className?: string;
}

export default function Text({
  size = 'base',
  color = 'black',
  weight = 'normal',
  align = 'left',
  className,
  children,
}: PropsWithChildren<TextProps>) {
  return (
    <span
      className={cn(
        `text-${size}`,
        `text-${color}`,
        `font-${weight}`,
        `text-${align}`,
        className,
      )}
    >
      {children}
    </span>
  );
}
