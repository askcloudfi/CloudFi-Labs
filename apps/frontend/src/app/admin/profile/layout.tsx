import type { ReactNode } from 'react';

export default function AdminProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}