import { InertiaLink } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';

interface Props {
  href: string;
  active?: boolean;
}

export default function JetNavLink({
  active,
  href,
  children,
}: PropsWithChildren<Props>) {
  const classes = active
    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-green-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-green-700 transition'
    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-green-500 hover:text-purple-700 hover:border-purple-300 focus:outline-none focus:text-gray-700 focus:border-purple-300 transition';

  return (
    <InertiaLink href={href} className={classes}>
      {children}
    </InertiaLink>
  );
}
