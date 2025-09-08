import type { ReactNode } from 'react';

export default function ResourcesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}