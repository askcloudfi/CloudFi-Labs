import type { ReactNode } from 'react';

export default function CompanyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}