import type { ReactNode } from 'react';

export default function AuditLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}