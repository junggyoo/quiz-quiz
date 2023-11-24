import { cn } from '@nextui-org/react';

import type { PropsWithChildren } from 'react';

export default function Stack({ children }: PropsWithChildren) {
  return (
    <div
      className={cn(
        'flex justify-between items-center',
        'space-x-3 w-[150px]',
      )}
    >
      {children}
    </div>
  );
}
